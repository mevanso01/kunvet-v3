<style lang="scss" scoped>
.hire_monials{
  background-color: red;
}
</style>
<template>
  <div>
  <div class="searchBar">
    <div class="innerCol">
      <div class="search_find_near">
        <strong class="search_assist">Find</strong>
      </div>
      <div class="search_text_field">
        <v-text-field
          solo
          flat
          hide-details
          label="All jobs"
          clearable
          v-model="query"
        ></v-text-field>
      </div>
    </div>
    <div class="innerCol">
      <div class="search_find_near">
        <strong class="search_assist">Near</strong>
      </div>
      <!-- v-bind:class="{ 'active': openSelectField === 'city' }" -->
      <div class="search_select">
          <v-select
            label="School or City"
            item-text="name"
            item-value="name"
            v-bind:items="availableCities"
            v-model="selectedCity"
            solo
            flat
            hide-details
            content-class="fsSelect-menu"
            autocomplete
            >
          </v-select>
      </div>
    </div>
  </div>
  </div>
</template>

<script>
</script>