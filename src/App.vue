<template>
  <div id="app">
    <Header></Header>

    <div class="views">
      <router-view/>
    </div>

    <Footer></Footer>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue'
  import {Component} from "vue-property-decorator";

  import Header from '@/components/Header.vue'
  import Footer from '@/components/Footer.vue'

  @Component({
    components: {
      Header,
      Footer
    }
  })

  export default class App extends Vue {}
</script>

<style lang="scss">
  @import "~@/assets/styles/reset.scss";
  @import "~@/assets/styles/helper.scss";

  #app {
    color: #2c3e50;

    .views {
      max-width: 780px;
      margin: 0 auto;
      padding: 50px 30px;
      background: white;
    }
  }
</style>
