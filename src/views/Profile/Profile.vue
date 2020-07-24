<template>
  <div class="profile">
    <div class="item">
      <h1>我</h1>
      <p>
        一名前端小学生，本科毕业于 <a href="https://www.qfnu.edu.cn/" target="_blank">曲阜师范大学</a>，
        目前正在 <a href="https://www.neu.edu.cn/" target="_blank">东北大学</a> 读研，都为软件工程专业。
      </p>

      <el-button @click="showMore = !showMore" type="text">
        {{showMoreText}}<i :class="showMore ? 'el-icon-caret-top' : 'el-icon-caret-bottom'"/>
      </el-button>

      <div v-show="showMore" class="item">
        <h2>更多</h2>
        <Details></Details>
      </div>

      <div class="item">
        <h2>找我</h2>
        <Social></Social>
      </div>
    </div>
  </div>
</template>

<script lange="ts">
  import Vue from 'vue'
  import {Component} from 'vue-property-decorator'

  import Details from '@/views/Profile/Details'
  import Social from  '@/views/Profile/Social'

  @Component({
    components: {Details, Social}
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
