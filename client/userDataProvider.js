import gql from 'graphql-tag';
import VuexLS from '@/store/persist';
import Store from '@/store';
import EventBus from '@/EventBus';
import axios from 'axios';
import { degreeDbToString } from '@/constants/degrees';

import apolloClient from '@/apollo/client';

function commitUserdata(udata) {
  Store.commit({
    type: 'keepUserdata',
    userdata: udata,
  });
}

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

// Returns acct, uid, and userdata
async function getUserDataFromLS() {
  var ret = {};
  // console.log(Store.state.userID, Store);
  if (Store.state.userID && Store.state.userdata && Store.state.acct) {
    // if store is available and already in store
    ret = {
      acct: Store.state.acct,
      uid: Store.state.userID,
      userdata: Store.state.userdata,
    };
    return ret;
  }
  await VuexLS.restoreState('vuex',  window.localStorage).then(async (data) => {
    if (data.acct !== 0 && data.userID) {
      // acct is not 0
      if (data.userdata) {
        ret = {
          acct: data.acct,
          uid: data.userID,
          userdata: data.userdata,
        };
      }
      // else, try to fetch userdata from db
      const userdata = await fetchUserData(data.userID);
      if (userdata) {
        ret = {
          acct: data.acct,
          uid: data.userID,
          userdata: userdata,
        };
      } else {
        // some kind of error happened when fetching account, log user out
        EventBus.$emit('logout');
        ret = {
          acct: 0,
          uid: null,
          userdata: null,
        };
      }
    } else {
      // acct is 0 or there is no userID
      ret = {
        acct: 0,
        uid: null,
        userdata: null,
      };
    }
  });
  return ret;
}

async function getUserData() {
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
    return {
      acct: acct,
      uid: userdata._id,
      userdata: userdata,
    };
  }
  // if not successful or not logged in according to server
  EventBus.$emit('logout');
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
