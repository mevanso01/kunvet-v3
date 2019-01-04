<template>
  <!-- FIXME: Remove demo credentials and provide an offline fallback for development-->
  <div class="search">
    <ais-index
      :app-id="appId"
      :api-key="searchApiKey"
      index-name="jobs"
    >
      <div class="searchBar">
        <ais-search-box></ais-search-box>
        <!-- <ais-pagination></ais-pagination> -->
      </div>
      <ais-results class="results">
        <template slot-scope="{ result }">
          <MainJobCard
            :job="result"
          />
        </template>
      </ais-results>
    </ais-index>
  </div>
</template>
<script>
import MainJobCard from '@/components/MainJobCard';
import Config from 'config';

export default {
  components: {
    MainJobCard,
  },
  data() {
    console.log('algolia', Config.get('algolia'));
    return {
      algolia: Config.get('algolia'),
      appId: Config.get('algolia.appId'),
      searchApiKey: Config.get('algolia.searchApiKey'),
    };
  },
};
</script>
<style lang="scss">
.ais-search-box__form {
  input {
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
    font-size: 16px;
    height: 48px;
    padding: 0 16px;
    outline-width: 0;
  }
  button {
    border-radius: 5px;
    background: red;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
    height: 48px;
    width: 48px;
    svg {
      fill: #fff;
    }
  }
}
.search {
  margin: 16px 0;
}
.searchBar {
  text-align: center;
}
.results {
}
ul.ais-pagination {
  margin: 10px 0;
  padding: 0;
  li {
    display: inline-block;
    background: red;
    width: 32px;
    height: 32px;
    border-radius: 16px;
    color: #fff;
    padding: 4px 0 0 0;
    margin: 5px;
  }
  .ais-pagination__item--first, .ais-pagination__item--last {
    display: none;
  }
}
</style>
