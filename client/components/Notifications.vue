<style lang="scss" scoped>
.notif-header{
  height: 60px; 
  background-image: linear-gradient(to right, #FFC06E , #FF5F6D);
  font-size: 14px;  
  display: flex; 
  justify-content: space-between;
}
.notif-header-text{
  padding-top: 10px;
  padding-left: 16px;
  color: white;
}

.notif-header-dismiss{
  padding-right: 16px; 
  padding-top: 22px; 
  cursor: pointer; 
  font-size: 12px; 
  color: white;
}
.notif-list{
  height: 60px;
}
.notif-list:hover{
  background-color: #F0F0F0;
}

.navDrop{
  position: relative;
}

.notif-list-items{
  height: 60px;
  color: black;
}
</style>


<template>
  <div class="navDrop">
    <div class="notif-header">
      <h3 class="notif-header-text">Notifications</h3>
      <span class="notif-header-dismiss"  @click="dismissAll()"> Dismiss All </span>
    </div>
    <v-list :dense="isNavbar" v-bind:class="{ navbarNotifications: isNavbar }" two-line class="navCustomList" style="width: 320px;">
      <v-list-tile v-for="(n, index) in notifications" :key="index" class="notif-list">
        <v-list-tile-content class="notif-list-items">
          <v-list-tile-title style="font-size: 14px; cursor: pointer;" @click="routeTo(n.route, index)">
            {{n.text}}
          </v-list-tile-title>
          {{ getApplicantDisplayDate(n)}}
        </v-list-tile-content>
        <v-list-tile-action class="notif-list-items" style="min-width: 38px;">
          <v-btn flat icon color="grey darken-1" @click="removeNotification(index)">
            <v-icon>delete</v-icon>
          </v-btn>
        </v-list-tile-action>
      </v-list-tile>  
    </v-list>
    <div v-show="notifications.length === 0" style="height: 58px; background-color: #fff;">
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
      test: false,
    };
  },
  methods: {
    getApplicantDisplayDate({ date }) {
      this.$debug(date);
      var tempDate = Date.now();
      var strDate = new Date(date);
      var diffDate = Math.round((tempDate - strDate) / (36 * (10 ** 5)));
      var str = '';
      if (diffDate < 1) {
        var temp = Math.round((tempDate - strDate) / (6 * (10 ** 4)));
        if (temp < 1) {
          str = 'Just Now';
        }
        str = String(temp);
        str += ' minutes ago';
      } else if (diffDate === 1) {
        str = '1 hour ago';
      } else if (diffDate >= 24) {
        diffDate = Math.round(diffDate / 24);
        if (diffDate === 1) {
          str = '1 day ago';
        } else {
          str = String(diffDate);
          str += ' days ago';
        }
      } else {
        str = String(diffDate);
        str += ' hours ago';
      }
      return str;
    },
    dismissAll() {
      this.$debug('This is working!');
      this.notifications = [];
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
        this.$debug(data);
      }).catch(this.$error);
    },
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
              job_title
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
        var tempList = [];
        var titleList = {};
        var countList = {};
        var dateList = {};
        for (var i in n) {
          if (n[i].text && n[i].notification_type === 'application') {
            if (tempList.indexOf(n[i].text) >= 0) {
              countList[n[i].text] += 1;
              if (n[i].date > dateList[n[i].text]) {
                dateList[n[i].text] = n[i].date;
              }
            } else {
              tempList.push(n[i].text);
              countList[n[i].text] = 1;
              titleList[n[i].text] = n[i].job_title;
              dateList[n[i].text] = n[i].date;
            }
          } else {
            notifications.push({
              text: n[i].text,
              route: n[i].route,
              notification_type: n[i].notification_type,
              date: n[i].date,
            });
          }
        }
        for (var x in tempList) {
          if (tempList[x]) {
            var txt;
            if (countList[tempList[x]] === 1) {
              txt = '1 new applicant for ';
              txt += titleList[tempList[x]];
            } else {
              txt = countList[tempList[x]].toString();
              txt += ' new applicants for ';
              txt += titleList[tempList[x]];
            }
            notifications.push({
              text: txt,
              route: '/applicants',
              notification_type: 'application',
              date: dateList[tempList[x]],
            });
          }
        }

        EventBus.$emit('setNotifications', notifications);
        // const maxNum = (this.max && typeof this.max === 'number') ? this.max : 8;
        // this.notifications = notifications.slice(0, maxNum);
      }).catch(this.$error);
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
                count
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
        this.$debug(data);
      }).catch(this.$error);
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
    EventBus.$on('removeNotification', notificationText => {
      const index = this.notifications.findIndex(n => n.text === notificationText);
      if (index !== -1) {
        this.removeNotification(index);
      }
    });
    if (!this.loaded) {
      this.getNotifications();
    }
    this.loaded = true;
  },
};
</script>
