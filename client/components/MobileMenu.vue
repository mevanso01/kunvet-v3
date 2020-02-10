<template>
  <div>
    <v-btn @click="drawer=true">click</v-btn>
    <div id="d-menu" class="d-menu" v-show="drawer">
      <div class="d-menu-inner">
        <div v-for="(item, idx) in dmenuItems" style="background-color: #fff">
          <div class="d-menu-item" @click="handleDMenuClick(item)" :class="`idx-${idx}`" :key="item.title">
            {{ item.title }}
            <!--replace with user's name-->
            <p v-if="item.isTop" style="font-size: 16px; margin: 0; color: white; font-weight: normal">Edit Profile</p>
          </div>
          <div v-if="item.subItems">
            <div v-for="subItem in item.subItems" v-show="openSubitem === item.title"
                 @click="drawer = false;" :key="subItem.title" class="d-menu-item" :class="`idx-${idx}`">
              {{ subItem.title }}
            </div>
          </div>
        </div>
        <div class="d-menu-close">
          <button @click="close">
            <i class="fa fa-times-circle " style="font-size: 46px; color: #FFE2E2;"></i>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default{
    data() {
      return {
        drawer: false,
        openSubitem: '',
        dmenuItems: [
          { title: 'User\'s Name', href: '/account', isTop: true },
          { title: 'Search', href: '/jobs/search' },
          {
            title: 'My Jobs',
            subItems: [
              { title: 'Saved Jobs', href: '/jobs/saved' },
              { title: 'Applied Jobs', href: '/jobs/applied' },
            ],
          },
          { title: 'Notifications', href: '/account' },
          {
            title: 'Settings',
            subItems: [
              { title: 'Email & Password' },
              { title: 'Email Preferences' },
              { title: 'Billing Info' },
              { title: 'Delete Account' },
            ],
          },
          { title: 'Log Out', href: '/account' },
        ],
      };
    },
    methods: {
      handleDMenuClick(item) {
        if (item.subItems) {
          this.openSubitem = this.openSubitem === item.title ? '' : item.title;
        } else {
          this.$router.push(item.href);
          this.drawer = false;
        }
      },
      close() {
        this.drawer = false;
      },
    },
  };
</script>
