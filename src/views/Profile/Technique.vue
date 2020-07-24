<template>
  <ul class="tech-list">
    <li>Web 前端（TypeScript、Vue.ts、React.ts、Sass 等）</li>
    <li>测试（Chai、Mocha、Sinon、Karma、Travis CI 等）</li>
    <li>正在学习 Vue 3.0、微信小程序</li>
  </ul>
</template>

<script lang="ts">
  import Vue from 'vue'
  import {Component} from 'vue-property-decorator'

  @Component
  export default class Technique extends Vue {}
</script>

<style scoped lang="scss">

</style>
