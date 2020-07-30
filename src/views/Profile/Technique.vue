<template>
  <ul class="tech-list">
    <li>熟练掌握 HTML、CSS、JavaScript 基础开发语言及相关概念，具备 <span class='highlight pixel'>像素级</span> 还原设计稿的能力</li>
    <li>具备封装思想，使用原生 JS 提供的 API 封装过 <span class='highlight jquery'>JS/jQuery 插件库</span> (目前维护了 24 个函数接口)</li>
    <li>熟练使用 <span class='highlight vue'>Vue 全家桶</span>，包括 Vue Router、Vuex、axios、Element UI 组件库及 Vue CLI 脚手架</li>
    <li>会使用 <span class='highlight ts'>TypeScript</span> 的常用语法，具有使用
      <span class='highlight vue'>Vue 类组件</span>、<span class='highlight vue'>装饰器</span> 结合 TypeScript 的项目开发经验
    </li>
    <li>熟悉 <span class='highlight react'>React</span> 框架，熟悉函数组件和类组件的使用，熟悉 React 函数组件的 <span class='highlight react'>hooks</span>
      的基本使用
    </li>
    <li>了解 Java 语言，熟悉数据结构相关概念及常见的 <span class='highlight'>排序算法</span>，了解 <span class='highlight'>HTTP 协议</span> 及浏览器渲染原理
    </li>
    <li>熟悉 <span class='highlight webpack'>webpack</span> 打包工具，<span class='highlight es6'>ES6</span> 的常见语法、
      <span class='highlight git'>Git</span> 版本管理工具、数据可视化 <span class='highlight echarts'>ECharts</span>
    </li>
    <li>正在学习：入门 <span class='highlight weixin'>微信小程序</span>，深入学习 <span class='highlight react'>React</span></li>
  </ul>
</template>

<script lang="ts">
  import Vue from 'vue'
  import {Component} from 'vue-property-decorator'

  @Component
  export default class Technique extends Vue {
  }
</script>

<style scoped lang="scss">
  .highlight {
    padding: 0 2px;
    background: #EEEEEE;
    border: 1px solid #cfd8dc;
    border-radius: 3px;
  }

  .pixel {
    color: #E6A23C;
  }

  .jquery {
    color: #0769AD;
  }

  .vue {
    color: #41B883;
  }

  .ts {
    color: #294E80;
  }

  .react {
    color: #61DAFB;
  }

  .webpack {
    color: #55A7DD;
  }

  .es6 {
    color: #F9D121;
  }

  .git {
    color: #FA4F2A;
  }

  .echarts {
    color: #AA314D;
  }

  .weixin {
    color: #07C160;
  }
</style>
