<template>
  <div>
    <v-list :dense="isNavbar" v-show="notifications.length > 0" v-bind:class="{ navbarNotifications: isNavbar }">
      <v-list-tile v-for="(n, index) in notifications" :key="index">
        <v-list-tile-content>
          <v-list-tile-title style="font-size: 14px; cursor: pointer;" @click="routeTo(n.route, index)">
            {{ n.text }}
          </v-list-tile-title>
        </v-list-tile-content>
        <v-list-tile-action style="min-width: 38px;">
          <v-btn flat icon color="red darken-1" @click="removeNotification(index)">
            <v-icon>clear</v-icon>
          </v-btn>
        </v-list-tile-action>
      </v-list-tile>
    </v-list>
    <div v-show="notifications.length === 0" style="height: 48px; background-color: #fff;">
      <p class="center" style="line-height: 48px; margin-bottom: 0; padding: 0 10px; color: rgb(167, 167, 167);">No new notifications</p>
    </div>
  </div>
</template>
<script>
import gql from 'graphql-tag';
import EventBus from '@/EventBus';

export default {
  props: ['isNavbar'],
  data() {
    return {
      notifications: [],
      loaded: false,
    };
  },
  methods: {
    getNotifications() {
      if (!this.$store.state || !this.$store.state.userID) {
        this.notifications = [];
      }
      this.$apollo.query({
        fetchPolicy: 'network-only',
        query: (gql`query ($uid: MongoID) {
          findAccount (filter: {
            _id: $uid
          }) {
            _id
            notifications {
              text
              route
              notification_type
              date
            }
          }
        }`),
        variables: {
          uid: this.$store.userID,
        },
      }).then((res) => {
        var notifications = [];
        const n = res.data.findAccount.notifications;
        for (var i in n) {
          if (n[i].text) {
            notifications.push({
              text: n[i].text,
              route: n[i].route,
              notification_type: n[i].notification_type,
              date: n[i].date,
            });
          }
        }
        EventBus.$emit('setNotifications', notifications);
        // const maxNum = (this.max && typeof this.max === 'number') ? this.max : 8;
        // this.notifications = notifications.slice(0, maxNum);
      }).catch(console.error);
    },
    removeNotification(index) {
      this.notifications.splice(index, 1);
      EventBus.$emit('setNotifications', this.notifications);
      this.$apollo.mutate({
        mutation: (gql` mutation ($uid: MongoID, $record: UpdateOneAccountInput!) {
          updateAccount (
            filter: { _id: $uid },
            record: $record,
          ) {
            recordId
          }
        }`),
        variables: {
          uid: this.$store.state.userID,
          record: {
            notifications: this.notifications,
          },
        },
        refetchQueries: [{
          query: (gql`query ($uid: MongoID) {
            findAccount (filter: {
              _id: $uid
            }) {
              _id
              notifications {
                text
                route
                notification_type
                date
              }
            }
          }`),
          variables: {
            uid: this.$store.state.userID,
          },
        }],
      }).then(data => {
        console.log(data);
      }).catch(console.error);
    },
    routeTo(route, index) {
      this.removeNotification(index);
      this.$router.push(route);
    },
  },
  created() {
    EventBus.$on('setNotifications', notifications => {
      this.notifications = notifications;
    });
    if (!this.loaded) {
      this.getNotifications();
    }
    this.loaded = true;
  },
};
</script>
