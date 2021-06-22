<template>
  <ul class="social">
    <li v-for="item in social" :key="item.link">
      <svg class="icon" aria-hidden="true">
        <use :xlink:href="item.icon"></use>
      </svg>
      <a :href="item.link" target="_blank">{{item.text}}</a>
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
      {label: '邮箱', icon: '#icon-mail', text: '1184061078@qq.com', link: 'https://mail.qq.com/'},
      {label: 'CSDN', icon: '#icon-csdn', text: 'https://blog.csdn.net/marker__', link: 'https://blog.csdn.net/marker__'},
      {label: 'Github', icon: '#icon-github', text: 'https://github.com/yingjieweb', link: 'https://github.com/yingjieweb'}
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
