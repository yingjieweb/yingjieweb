<template>
  <div class="profile">
    <div class="item">
      <h1>我</h1>
      <p>
        一名前端小学生，本科毕业于<a href="https://www.qfnu.edu.cn/" target="_blank">曲阜师范大学</a>，
        目前正在<a href="https://www.neu.edu.cn/" target="_blank">东北大学</a>读研，都为软件工程专业。
      </p>
    </div>
  </div>
</template>

<script lange="ts">
  import Vue from 'vue'
  import {Component} from 'vue-property-decorator'

  @Component()
  export default class Profile extends Vue{

  }
</script>

<style lang="scss" scoped>
  .profile {
    .item {
      padding-bottom: 24px;
      margin-bottom: 32px;
      border-bottom: 1px dashed #DCDFE6;

      &:last-child {
        padding-bottom: 0;
        margin-bottom: 0;
        border-bottom: none;
      }
    }
  }
</style>
