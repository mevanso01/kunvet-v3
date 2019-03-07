import Store from '@/store';
import EventBus from '@/EventBus';
import axios from 'axios';
import { degreeDbToString } from '@/constants/degrees';

// import apolloClient from '@/apollo/client';
// import gql from 'graphql-tag';
/*
function fetchUserData(userID) {
  apolloClient.query({
    query: (gql`query ($uid: MongoID) {
      findAccount (filter: {
        _id: $uid
      }) {
          _id
          firstname
          lastname
          school
          degree
          major
          email
          wechat_id
          org_list
          profile_pic
          default_org
          resumes {
            name
            filename
            resumeid
          }
          email_verified
      }
    }`),
    variables: {
      uid: userID,
    },
  }).then((data) => {
    const res = data.data.findAccount;
    if (!res) { return null; }
    const userdata = {};
    userdata.firstname = res.firstname;
    userdata.lastname = res.lastname;
    userdata.school = res.school;
    userdata.degree = res.degree ? degreeDbToString(res.degree) : null;
    userdata.major = res.major;
    userdata.email = res.email;
    userdata.wechat_id = res.wechat_id;
    userdata.profile_pic = res.profile_pic;
    userdata.default_org = res.default_org;
    userdata.resumes = res.resumes.concat();
    userdata.org_list = res.org_list;
    userdata.email_verified = res.email_verified;
    commitUserdata(userdata);
    return userdata;
  }).catch((error) => {
    this.$error('Error fetching account: ', error);
    return null;
  });
}
*/

function commitUserdata(udata) {
  Store.commit({
    type: 'keepUserdata',
    userdata: udata,
    updateLastFetched: true,
  });
}

// Returns acct, uid, and userdata
function getUserDataFromLS() {
  var ret = null;
  if (Store.state.userID && Store.state.userdata && Store.state.acct) {
    // if store is available and already in store
    ret = {
      acct: Store.state.acct,
      uid: Store.state.userID,
      userdata: Store.state.userdata,
    };
  }
  return ret;
}

async function getUserData() {
  // Try to get data from local storage if it's been recently fetched.
  // Time difference is 10 minutes (600000ms)
  if (Store.state.udataLastFetched && Store.state.udataLastFetched - Date.now() <= 600000) {
    const lsData = getUserDataFromLS();
    if (lsData) {
      return lsData;
    }
  }
  const res = await axios.get('auth/status');
  if (res.data && res.data.success && res.data.status) {
    // process userdata, if needed
    const userdata = res.data.user;
    const acct = userdata.default_org ? 2 : 1;
    if (userdata.degree) { userdata.degree = degreeDbToString(userdata.degree); }
    if (userdata.org_list && userdata.org_list[0] === null) { userdata.org_list = []; }
    if (userdata.resumes && userdata.resumes[0] === null) { userdata.resumes = []; }
    // commit some essential things of other pages to use
    Store.commit({ type: 'setAcct', acct: acct });
    Store.commit({ type: 'setAcctID', id: userdata._id });
    Store.commit({ type: 'setDefaultOrg', id: userdata.default_org });
    if (acct === 2) {
      Store.commit({ type: 'setBusinessID', id: userdata.default_org });
    }
    commitUserdata(userdata);
    return {
      acct: acct,
      uid: userdata._id,
      userdata: userdata,
    };
  }
  // if not successful or not logged in according to server:
  if (Store.state.acct !== 0 || Store.state.userID) {
    // Emit logout event if local state is not in sync with server
    EventBus.$emit('logout');
  }
  return {
    acct: 0,
    uid: null,
    userdata: null,
  };
}

export default {
  getUserData,
  getUserDataFromLS,
};
