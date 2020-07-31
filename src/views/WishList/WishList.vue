<template>
  <div class="wish-list">
    <h1>
      <span>人生清单</span>

      <span>
        <el-radio v-model="type" label="done">已完成</el-radio>
        <el-radio v-model="type" label="todo">还在立Flag</el-radio>
      </span>
    </h1>

    <ul class="bucket-list-content">
      <wish-list-item v-for="item in filterWishList" :item="item" :key="item.title"></wish-list-item>
    </ul>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue'
  import {Component} from "vue-property-decorator";

  import WishListItem from "@/views/WishList/WishListItem.vue";
  import wishList from "@/database/wishListDB";

  @Component({
    components: {WishListItem}
  })
  export default class WishList extends Vue {
    type = 'done'

    get filterWishList() {
      return wishList.filter(item => item.status === this.type)
    }
  }
</script>

<style lang="scss" scoped>
  .wish-list {
    h1 {
      display: flex;
      justify-content: space-between;

      span {
        display: flex;
        align-items: center;
      }
    }

    &-image {
      text-align: center;
    }
  }
</style>
