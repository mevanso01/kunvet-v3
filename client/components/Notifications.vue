<template>
  <div>
    <v-list :dense="isNavbar" v-show="notifications.length > 0">
      <v-list-tile v-for="(n, index) in notifications" :key="index" @click="routeTo(n.route, index)">
        <v-list-tile-content>
          <v-list-tile-title style="font-size: 14px;">{{ n.text }}</v-list-tile-title>
        </v-list-tile-content>
        <v-list-tile-action style="min-width: 38px;">
          <v-btn flat icon color="red darken-1" @click="removeNotification(index)">
            <v-icon>remove</v-icon>
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
import Store from '@/store';

export default {
  props: ['isNavbar', 'max'],
  data() {
    return {
      notifications: [],
    };
  },
  methods: {
    getNotifications() {
      if (!Store.state || !Store.state.userID) {
        this.notifications = [];
      }
      this.$apollo.query({
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
          uid: Store.state.userID,
        },
      }).then((res) => {
        var notifications = [];
        const n = res.data.findAccount.notifications;
        for (var i in n) {
          if (n[i].notification_type) {
            notifications.push({
              text: n[i].text,
              route: n[i].route,
              notification_type: n[i].notification_type,
              date: n[i].date,
            });
          }
        }
        const maxNum = (this.max && typeof this.max === 'number') ? this.max : 8;
        this.notifications = notifications.slice(0, maxNum);
        console.log(this.notifications);
      }).catch(console.error);
    },
    removeNotification(index) {
      this.notifications.splice(index, 1);
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
          uid: Store.state.userID,
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
            uid: Store.state.userID,
          },
        }],
      }).catch(console.error);
    },
    routeTo(route, index) {
      this.removeNotification(index);
      this.$router.push(route);
    },
  },
  created() {
    this.getNotifications();
  },
};
</script>
