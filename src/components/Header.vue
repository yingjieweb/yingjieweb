<template>
  <div class="header">
    <PCMenu></PCMenu>
    <MobileMenu></MobileMenu>
    <p>header</p>
  </div>
</template>

<script lange="ts">
  import Vue from 'vue'
  import {Component} from 'vue-property-decorator'

  import PCMenu from '@/components/Menu/PCMenu.vue'
  import MobileMenu from '@/components/Menu/MobileMenu.vue'

  @Component({
    components: {PCMenu, MobileMenu}
  })
  export default class Header extends Vue{}
</script>

<style lang="scss" scoped>
  .header {
    height: 400px;
    background-color: darkgray;
  }
</style>
