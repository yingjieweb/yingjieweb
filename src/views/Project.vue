<template>
  <div class="project">
    <h1>个人项目</h1>
    <ul>
      <li v-for="item in projectDB" :key="item.github">
        <div>
          <a class="title" :href="item.url" target="_blank">{{item.title}}</a>
          <p class="desc">{{item.desc}}</p>
        </div>
        <div class="buttons">
          <el-button type="success" size="mini" @click="goto(item.github)">源码</el-button>
          <el-button type="warning" size="mini" @click="goto(item.document)">
            {{item.document.indexOf('dombox') <= -1 ? '预览' : '文档'}}
          </el-button>
        </div>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue'
  import {Component} from "vue-property-decorator";

  import projectDB from "@/database/project";

  @Component
  export default class Project extends Vue{
    projectDB = projectDB

    goto(website: string) {
      window.open(website, '_blank');
    }
  }
</script>

<style lang="scss" scoped>
  .project {
    li {
      display: flex;
      justify-content: space-between;
      margin-bottom: 32px;
      min-height: 86px;

      &:last-child {
        margin-bottom: 0;
      }

      a.title {
        font-size: 1.2em;
        color: #409EFF;
      }
      .buttons {
        min-width: 20%;
        text-align: right;
      }
    }

    .desc {
      margin-top: 4px;
    }
  }
</style>
