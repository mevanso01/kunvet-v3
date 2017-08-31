import gql from 'graphql-tag';
import Vue from 'vue';
import Vuetify from 'vuetify';
import VueApollo from 'vue-apollo';

Vue.use(Vuetify);
Vue.use(VueApollo);

// this is just a test component to serve as a template

Vue.component('todo-item', {
  props: ['todo'],
  template: '<li>{{ todo.text }}</li>',
});

export default {
  apollo: {
    jobs: gql`
      {
        jobs {
          _id
          name
          description
          type
          address
        }
      }
    `,
  },
  data() {
    return {
      jobs: [],
      groceryList: [
        { id: 0, text: 'Vegetables' },
        { id: 1, text: 'Cheese' },
        { id: 2, text: 'Whatever else humans are supposed to eat' },
      ],
    };
  },
};
