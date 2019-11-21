<style lang="scss" scoped>

.selection-list {
  overflow: scroll;
  overflow-x: hidden;
  height: 200px;
  background-color: #efefef;
  cursor: pointer;
}

.list-item:hover {
  background-color: #dfdfdf;

}
.list-item {
  padding: 0px;
  margin: 0 16px;
}
.list-item-selected {
  padding: 0px;
  margin: 0 16px;
  color: lightgrey;
}
::-webkit-scrollbar {
  width: 6px;
}

/* Track */
::-webkit-scrollbar-track {
  background: #f1f1f1;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: #bbb;
  border-radius: 24px;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #999;
}
p {
  text-align: left;
  font-size: 16px;
  margin: 0 10px;
  padding-top: 8px;
  vertical-align: middle;
}
.chip{
    display: inline-flex;
    flex-direction: row;
    background-color: #e5e5e5;
    border: none;
    cursor: default;
    height: 36px;
    outline: none;
    padding: 0;
    font-size: 14px;
    font-color: #333333;
    font-family:"Open Sans", sans-serif;
    white-space: nowrap;
    align-items: center;
    border-radius: 16px;
    vertical-align: middle;
    text-decoration: none;
    justify-content: center;
}
.chip-content{
    cursor: inherit;
    display: flex;
    align-items: center;
    user-select: none;
    white-space: nowrap;
    padding-left: 12px;
    padding-right: 12px;
}
.chip-svg{
        color: #999999;
    cursor: pointer;
    height: auto;
    margin: 4px 4px 0 -8px;
  fill: currentColor;
    width: 1em;
    height: 1em;
    display: inline-block;
    font-size: 24px;
    transition: fill 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
    user-select: none;
    flex-shrink: 0;
}
.chip-svg:hover{
    color: #666666;
}
</style>
<template>
  <div
  class="k-dropdown">
  <v-layout style="background-color: #efefef; min-height:60px; text-align: center;">
    <v-flex xs10 sm11>
      <template v-if="selected_list.length > 0">
        <div style="text-align: left; padding-left: 10px;">
          <div class="chip" v-for="tags in selected_list" :key="tags" style="margin: 3px;">
            <div class="chip-content">{{tags}}</div>
            <div class="chip-close">
              <svg class="chip-svg" @click="changeList(tags)" focusable="false" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z"></path></svg>
            </div>
          </div>
        </div>
      </template>
      <p v-else><b>{{title}}</b></p>
    </v-flex>
    <v-flex sm1  @click="changeTagState()" style="cursor: pointer; vertical-align: middle;">
      <img v-if="!isEditing" :src="svgs.plus" style="margin-top:8px;width: 18px; margin-right: 10px;"/>
      <img v-else :src="svgs.minus" style="width: 18px; margin-right: 10px;"/>
    </v-flex>
  </v-layout>
  <div v-if="isEditing" height="200">
    <v-list class="selection-list">
      <v-list-tile :class="[selected_list.includes(item)?'list-item-selected' : 'list-item']" style="padding: 0 0px;" v-for="(item, i) in tag_list" :key="i" @click="changeList(item)">{{item}}</v-list-tile>
    </v-list>
  </div>
</div>
</template>
<script>
import Plus from '@/assets/plus.svg';
import Minus from '@/assets/minus.svg';

export default {
  name: 'k-dropdown',
  props: {
    title: {
      type: String,
      default: '',
    },
    tag_list: {
      type: Array,
      default: [],
    },
  },
  data() {
    return {
      selected_list: [],
      isEditing: false,
      svgs: {
        plus: Plus,
        minus: Minus,
      },
    };
  },
  mounted() {
    this.mounted = true;
    // register with <v-form>
    if (this.$parent.$options.name === 'v-form') {
      this.$parent.register(this.$refs.input);
    }
  },
  methods: {
    changeTagState() {
      this.isEditing = !this.isEditing;
      console.log(this.isEditing);
    },
    changeList(item) {
      for (var i = 0; i < this.selected_list.length; i++) {
        if (this.selected_list[i] === item) {
          this.selected_list.splice(i, 1);
          console.log(this.selected_list);
          this.$emit('list-changed', this.selected_list);
          return;
        }
      }
      this.selected_list.push(item);
      console.log(this.selected_list);
      this.$emit('list-changed', this.selected_list);
    },

  },
  computed: {
    buttonStyle() {
    },
  },
};
</script>
