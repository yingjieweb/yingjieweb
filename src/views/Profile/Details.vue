<template>
  <ul class="details-list">
    <li>前端小白一只，希望自己能不忘初心，踏踏实实学点前端 👻</li>
    <li>山东烟台人，东北大学软件工程硕士，目前在搜狐从事前端开发 🧱</li>
    <li>相比后端和算法，个人更喜欢前端，觉得做喜欢的事情是不会有错的 😁</li>
    <li>平时除了喜欢写点代码之外，还喜欢和小伙伴们打打篮球 🏀 ，健健身啥的...</li>
    <li>大学期间，参加过学校国旗护卫队，担任过新生军训教官，后悔没去当兵历练一下 😟</li>
    <li>小时候的梦想是当宇航员 👨‍🚀，当下这个年纪好像没什么大的梦想，而是一个个阶段性的小目标</li>
    <li>当下阶段的小目标：</li>
    <li class="tab">🚩 <span class="done">能秋招拿到大厂的 offer 💪，来年能够顺顺利利毕业 👨‍🎓 </span> 2021.07.14 ✅</li>
    <li class="tab">🚩 努力学习前端知识 📌，争取三到五年能够成为一名高级前端工程师！👷</li>
  </ul>
</template>

<script lang="ts">
  import Vue from 'vue'
  import {Component} from 'vue-property-decorator'

  @Component
  export default class Details extends Vue {}
</script>

<style scoped lang="scss">
.details-list {
  list-style: disc;
  .tab {
    list-style: circle;
    margin-left: 20px;
    .done {
      text-decoration: line-through;
    }
  }
}
</style>
