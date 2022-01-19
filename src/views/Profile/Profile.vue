<template>
  <div class="profile">
    <div class="item">
      <h1>我</h1>
      <p>
        一名前端小学生，<a href="https://www.neu.edu.cn/" target="_blank">东北大学</a> 软件工程硕士，
        目前正在 <a href="https://www.sohu.com/" target="_blank">搜狐</a> 从事前端开发工作。
      </p>
      <p style="margin-top: 12px">
        现阶段的打算是：努力学习前端知识 📌，争取三到五年能够成为一名高级前端工程师！👷
      </p>

      <el-button @click="showMore = !showMore" type="text">
        {{showMoreText}}<i :class="showMore ? 'el-icon-caret-top' : 'el-icon-caret-bottom'"/>
      </el-button>
    </div>

    <div v-show="showMore" class="item">
      <h2>更多</h2>
      <Details></Details>
    </div>

    <div v-show="showMore" class="item">
      <h2>技能</h2>
      <Technique></Technique>
    </div>

    <div class="item">
      <h2>找我</h2>
      <Social></Social>
    </div>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue'
  import {Component} from 'vue-property-decorator'

  import Details from '@/views/Profile/Details.vue'
  import Social from  '@/views/Profile/Social.vue'
  import Technique from  '@/views/Profile/Technique.vue'

  @Component({
    components: {Details, Social, Technique}
  })
  export default class Profile extends Vue{
    showMore = false

    get showMoreText() {
      return this.showMore ? '收起' : '了解更多'
    }
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
