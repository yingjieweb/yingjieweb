<template>
  <div class="blog">
    <div style="display: flex; justify-content: space-between; align-items: center;">
      <h1>CSDN</h1>
      <a href="https://blog.csdn.net/marker__" target="_blank">⭕ CSDN 主页</a>
    </div>

    <ul>
      <li v-for="item in displayBlogs" :key="item.url">
        <span class="text-overflow">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-csdn"></use>
          </svg>
          <a class="title" :href="item.url" target="_blank" :title="item.desc">
            {{item.title}}
          </a>
        </span>
        <span class="date">{{item.date}}</span>
      </li>
    </ul>

    <footer>
      <el-pagination
         @current-change="onPageChange"
         hide-on-single-page
         background
         :page-size="10"
         :pager-count="5"
         :total="blogsTotal"
         layout="prev, pager, next"/>
    </footer>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue'
  import {Component} from "vue-property-decorator";

  import csdnDB from '@/database/csdnDB'

  @Component
  export default class Blog extends Vue{
    currentPage = 1
    db = csdnDB

    get displayBlogs() {
      const begin = (this.currentPage - 1) * 10
      const end = (begin + 10 > this.db.length) ? this.db.length : begin + 10
      return this.db.slice(begin, end)
    }

    get blogsTotal() {
      return this.db.length
    }

    onPageChange(page: number) {
      this.currentPage = page
    }
  }
</script>

<style lang="scss" scoped>
  .blog {
    li {
      display: flex;
      justify-content: space-between;

      .title {
        margin-left: 8px;
      }
      .date {
        min-width: 30%;
        text-align: right;
      }
    }

    footer {
      margin-top: 36px;
      text-align: center;
    }
  }
</style>
