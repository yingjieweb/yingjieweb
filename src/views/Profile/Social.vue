<template>
  <ul class="social">
    <li v-for="item in social" :key="item.link">
      <svg class="icon" aria-hidden="true">
        <use :xlink:href="item.icon"></use>
      </svg>
      <a :href="item.link" target="_blank">{{item.link}}</a>
    </li>
  </ul>
</template>

<script lang="ts">
  import Vue from 'vue'
  import '@/assets/icons/index'
  import {Component} from 'vue-property-decorator'

  @Component
  export default class Social extends Vue {
    social = [
      {label: '邮箱', icon: '#icon-mail', link: 'https://mail.qq.com/'},
      {label: 'CSDN', icon: '#icon-csdn', link: 'https://blog.csdn.net/marker__'},
      {label: 'Github', icon: '#icon-github', link: 'https://github.com/yingjieweb'}
    ]
  }
</script>

<style scoped lang="scss">
  .social {
    a {
      margin-left: 8px;
      color: #409EFF;
    }
  }
</style>
