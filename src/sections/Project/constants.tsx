import { Image } from "antd";
import { ProjectItem } from "./Item";
import HighLight from "../../components/HighLight";

// links
import link from "../../assets/svgs/link.svg";
import github from "../../assets/svgs/github.svg";
import juejin from "../../assets/svgs/juejin.svg";

// technology stack
import css from "../../assets/icons/css.png";
import scss from "../../assets/icons/sass.png";
import js from "../../assets/icons/js.png";
import ts from "../../assets/icons/ts.png";
import jQuery from "../../assets/icons/jquery.png";
import vue from "../../assets/icons/vue.png";
import react from "../../assets/icons/react.png";
import styledComponents from "../../assets/icons/styled-components.png";
import npm from "../../assets/icons/npm.png";
import babel from "../../assets/icons/babel.png";
import webpack from "../../assets/icons/webpack.png";
import antd from "../../assets/icons/antd.png";
import element from "../../assets/icons/element.png";
import echarts from "../../assets/icons/echarts.png";
import karma from "../../assets/icons/karma.png";
import mocha from "../../assets/icons/mocha.png";
import sinon from "../../assets/icons/sinon.png";
import travis from "../../assets/icons/travis.webp";
// import jest from "../../assets/icons/jest.png";
// import hljs from "../../assets/icons/hljs.png";
// import python from "../../assets/icons/python.png";
// import eslint from "../../assets/icons/eslint.png";

// league-ui
import leagueoflegendsLogo from "../../assets/icons/lol-logo.png";
import leagueoflegendsUI from "../../assets/screenshots/lol-ui.jpg";

// campus
import campusUI from "../../assets/screenshots/campus.gif";

// navigator
import navigatorUI from "../../assets/screenshots/navigator.png";

// charge
import chargeUI from "../../assets/screenshots/charge.png";

// sunshine
import sunshineUI from "../../assets/screenshots/sunshine.gif";

// dombox
import domboxUI from "../../assets/screenshots/dombox.png";

// amap-optimization-demo
import amapOptimizationDemoUI from "../../assets/screenshots/amapOptimizationDemo.png";

// Dnd-draggable-tree-demo
import dndDraggableTreeDemoUI from "../../assets/screenshots/dndDraggableTreeDemo.gif";

// RBAC-checkbox-tree-demo
import rbacCheckboxTreeDemoUI from "../../assets/screenshots/rbacCheckboxTreeDemo.gif";

// 可视项目
export const projects: ProjectItem[] = [
  {
    logo: leagueoflegendsLogo,
    title: "League of Legends UI",
    content: <Image src={leagueoflegendsUI} />,
    description: (
      <p>
        一个基于 <HighLight isDark>英雄联盟</HighLight> 样式的 UI 组件库，通过
        Vue.js 开发。
      </p>
    ),
    links: [
      {
        content: "http://yingjiesongi.gitee.io/league-ui-doc/#/intro",
        image: link,
      },
      {
        content: "https://github.com/yingjieweb/league-ui",
        image: github,
      },
    ],
    techUsed: [
      { content: "Vue.js", image: vue },
      { content: "Sass", image: scss },
      { content: "JavaScript", image: js },
      { content: "NPM", image: npm },
      { content: "Babel", image: babel },
      { content: "Webpack", image: webpack },
      { content: "Karma", image: karma },
      { content: "Sinon", image: sinon },
      { content: "Mocha", image: mocha },
      { content: "Travis CI", image: travis },
    ],
  },
  {
    logoFont: "🎓",
    title: "大学生就业推荐系统",
    content: <Image src={campusUI} />,
    description: (
      <p>
        读书时做的大学生 <HighLight isDark>就业推荐系统</HighLight>
        ，仅前端展示部分，通过{" "}
        <HighLight isDark>Vue.js + Element UI + ECharts</HighLight> 开发。
      </p>
    ),
    links: [
      {
        content: "https://yingjieweb.github.io/campus/#/campus-recruit",
        image: link,
      },
      {
        content: "https://github.com/yingjieweb/campus",
        image: github,
      },
    ],
    techUsed: [
      { content: "Vue.js", image: vue },
      { content: "Sass", image: scss },
      { content: "Element UI", image: element },
      { content: "Apache ECharts", image: echarts },
    ],
  },
  {
    logoFont: "📡",
    title: "小傻瓜导航站点",
    content: <Image src={navigatorUI} />,
    description: (
      <p>
        为女朋友量身定制的 <HighLight isDark>导航站点</HighLight>，通过{" "}
        <HighLight isDark>JQuery</HighLight> 开发。单身狗快撤 🤪
      </p>
    ),
    links: [
      {
        content: "http://yingjiesongi.gitee.io/navigator/",
        image: link,
      },
      {
        content: "https://github.com/yingjieweb/navigator",
        image: github,
      },
      {
        content: "https://juejin.cn/post/7246747232997474360",
        image: juejin,
      },
    ],
    techUsed: [
      { content: "jQuery", image: jQuery },
      { content: "CSS", image: css },
    ],
  },
  {
    logoFont: "📒",
    title: "小本本记账",
    content: <Image src={chargeUI} />,
    description: (
      <p>
        用 <HighLight isDark>React.js + TypeScript + ECharts</HighLight>{" "}
        开发的一款属于自己的极简记账应用。
      </p>
    ),
    links: [
      {
        content: "https://yingjiesongi.gitee.io/charge/#/money",
        image: link,
      },
      {
        content: "https://github.com/yingjieweb/charge2",
        image: github,
      },
    ],
    techUsed: [
      { content: "React.js", image: react },
      { content: "TypeScript", image: ts },
      { content: "Styled-Components", image: styledComponents },
      { content: "Apache ECharts", image: echarts },
      { content: "Babel", image: babel },
      { content: "Webpack", image: webpack },
    ],
  },
  {
    logoFont: "🌲",
    title: "dombox 工具库",
    content: <Image src={domboxUI} />,
    description: (
      <p>
        一个高效、精简、功能丰富的{" "}
        <HighLight isDark>JavaScript 工具库</HighLight>。它提供的 API
        易于使用，这让诸如 HTML 文档遍历和操作、事件处理操作更加简单。
      </p>
    ),
    links: [
      {
        content: "https://github.com/yingjieweb/dombox",
        image: github,
      },
    ],
    techUsed: [{ content: "JavaScript", image: js }],
  },
  {
    logoFont: "✨",
    title: "CSS 魔法世界",
    content: <Image src={sunshineUI} />,
    description: (
      <p>
        自己在学期前端初期搞的一些有趣的{" "}
        <HighLight isDark>CSS animation 效果</HighLight> 🤪
      </p>
    ),
    links: [
      {
        content: "https://yingjieweb.github.io/sunshine/#/hypnosis-circle",
        image: link,
      },
      {
        content: "https://github.com/yingjieweb/sunshine",
        image: github,
      },
    ],
    techUsed: [
      { content: "JavaScript", image: js },
      { content: "CSS", image: css },
    ],
  },
  {
    logoFont: "🌏",
    title: "高德地图「海量点标记 + 海量标注」卡顿问题 解决方案",
    content: <Image src={amapOptimizationDemoUI} />,
    description: (
      <p>
        针对数据量较大时 高德地图「海量点标记 + 海量标注」
        <HighLight isDark>卡顿问题</HighLight>{" "}
        提供了一整套优化方案。整体性能优化提升{" "}
        <HighLight isDark>300%</HighLight> 🎉
      </p>
    ),
    links: [
      {
        content: "https://yingjieweb.github.io/amap-optimization-demo/",
        image: link,
      },
      {
        content: "https://github.com/yingjieweb/amap-optimization-demo",
        image: github,
      },
      {
        content:
          "https://blog.csdn.net/Marker__/article/details/124321573?spm=1001.2014.3001.5501",
        image: juejin,
      },
    ],
    techUsed: [
      { content: "Vue.js", image: vue },
      { content: "Sass", image: scss },
    ],
  },
  {
    logoFont: "👆",
    title: "可拖拽的多层级树形组件",
    content: <Image src={dndDraggableTreeDemoUI} />,
    description: (
      <p>
        基于 React <HighLight isDark>dnd-kit</HighLight>{" "}
        的一款可拖拽的多层级树形排序组件
      </p>
    ),
    links: [
      {
        content: "https://yingjieweb.github.io/dnd-draggable-tree-demo/",
        image: link,
      },
      {
        content: "https://yingjieweb.github.io/dnd-draggable-tree-demo/",
        image: github,
      },
    ],
    techUsed: [
      { content: "React.js", image: react },
      { content: "Sass", image: scss },
      { content: "Ant Design", image: antd },
    ],
  },
  {
    logoFont: "🧷",
    title: "RBAC 树形选择组件",
    content: <Image src={rbacCheckboxTreeDemoUI} />,
    description: (
      <p>
        一款基于角色的访问控制 checkbox 树形组件， 涉及{" "}
        <HighLight isDark>多级权限联动选择</HighLight> 功能
      </p>
    ),
    links: [
      {
        content: "https://yingjieweb.github.io/RBAC-checkbox-tree-demo/",
        image: link,
      },
      {
        content: "https://github.com/yingjieweb/RBAC-checkbox-tree-demo",
        image: github,
      },
    ],
    techUsed: [
      { content: "React.js", image: react },
      { content: "Sass", image: scss },
      { content: "Ant Design", image: antd },
    ],
  },
];
