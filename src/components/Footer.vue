<template>
  <div class="footer">
    © 2020 - 2021 ★ Made By yingjieweb
  </div>
</template>

<script lang="ts">
  import Vue from 'vue'
  import {Component} from 'vue-property-decorator'

  @Component
  export default class Footer extends Vue{}
</script>

<style lang="scss" scoped>
  .footer {
    padding: 16px 0;
    border-top: 1px solid #eee;
    color: #909399;
    text-align: center;
  }
</style>
