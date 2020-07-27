<template>
  <div class="header">
    <Menu/>
    <div class="intro">
      <el-avatar class="avatar"
                 :src="avatar"
                 alt="avatar"
                 icon="el-icon-user-solid"
                 :size="120"/>

      <p class="name">yingjieweb</p>

      <p class="title">前端小白 / 踏踏实实学点前端</p>
    </div>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue'
  import {Component} from 'vue-property-decorator'

  import Menu from '@/components/Menu/Menu.vue'

  @Component({
    components: {Menu}
  })
  export default class Header extends Vue{
    avatar = require('../assets/images/avatar.jpg')
  }
</script>

<style lang="scss" scoped>
  .header {
    display: flex;
    flex-direction: column;
    height: 400px;
    background-image: url("../assets/images/yourname.jpg");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center center;

    .intro {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      flex-grow: 1;
      color: white;

      .avatar {
        box-shadow: 0 0 55px -6px rgba(255, 255, 255, 1);
      }

      .name {
        margin: 12px 0;
        font-size: 1.6em;
      }

      .title {
        font-size: 1.1em;
      }
    }
  }
</style>
