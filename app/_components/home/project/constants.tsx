import { ProjectItem } from "./item";
import Highlight from "@/app/_components/common/highlight";
import Image from "next/image";

// links
import link from "@/public/assets/svgs/link.svg";
import github from "@/public/assets/svgs/github.svg";
import juejin from "@/public/assets/svgs/juejin.svg";

// technology stack
import css from "@/public/assets/icons/css.png";
import scss from "@/public/assets/icons/sass.png";
import js from "@/public/assets/icons/js.png";
import ts from "@/public/assets/icons/ts.png";
import jQuery from "@/public/assets/icons/jquery.png";
import vue from "@/public/assets/icons/vue.png";
import react from "@/public/assets/icons/react.png";
import styledComponents from "@/public/assets/icons/styled-components.png";
import npm from "@/public/assets/icons/npm.png";
import babel from "@/public/assets/icons/babel.png";
import webpack from "@/public/assets/icons/webpack.png";
import antd from "@/public/assets/icons/antd.png";
import element from "@/public/assets/icons/element.png";
import echarts from "@/public/assets/icons/echarts.png";
import karma from "@/public/assets/icons/karma.png";
import mocha from "@/public/assets/icons/mocha.png";
import sinon from "@/public/assets/icons/sinon.png";
import travis from "@/public/assets/icons/travis.webp";
// import jest from "@/public/assets/icons/jest.png";
// import hljs from "@/public/assets/icons/hljs.png";
// import python from "@/public/assets/icons/python.png";
// import eslint from "@/public/assets/icons/eslint.png";

// league-ui
import leagueoflegendsLogo from "@/public/assets/icons/lol-logo.png";
import leagueoflegendsUI from "@/public/assets/screenshots/lol-ui.jpg";

// campus
import campusUI from "@/public/assets/screenshots/campus.gif";

// navigator
import navigatorUI from "@/public/assets/screenshots/navigator.png";

// charge
import chargeUI from "@/public/assets/screenshots/charge.png";

// sunshine
import sunshineUI from "@/public/assets/screenshots/sunshine.gif";

// dombox
import domboxUI from "@/public/assets/screenshots/dombox.png";

// amap-optimization-demo
import amapOptimizationDemoUI from "@/public/assets/screenshots/amapOptimizationDemo.png";

// Dnd-draggable-tree-demo
import dndDraggableTreeDemoUI from "@/public/assets/screenshots/dndDraggableTreeDemo.gif";

// RBAC-checkbox-tree-demo
import rbacCheckboxTreeDemoUI from "@/public/assets/screenshots/rbacCheckboxTreeDemo.gif";

// 可视项目
export const projects: ProjectItem[] = [
  {
    logo: leagueoflegendsLogo,
    title: "League of Legends UI",
    content: <Image src={leagueoflegendsUI} alt="英雄联盟UI" />,
    description: (
      <p>
        一个基于 <Highlight>英雄联盟</Highlight> 样式的 UI 组件库，通过 Vue.js
        开发。
      </p>
    ),
    links: [
      {
        content: "https://yingjieweb.github.io/league-ui-doc/#/intro",
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
    content: <Image src={campusUI} alt="大学生就业推荐系统" />,
    description: (
      <p>
        读书时做的大学生 <Highlight>就业推荐系统</Highlight>
        ，仅前端展示部分，通过{" "}
        <Highlight>Vue.js + Element UI + ECharts</Highlight> 开发。
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
    content: <Image src={navigatorUI} alt="小傻瓜导航站点" />,
    description: (
      <p>
        为女朋友量身定制的 <Highlight>导航站点</Highlight>，通过{" "}
        <Highlight>JQuery</Highlight> 开发。单身狗快撤 🤪
      </p>
    ),
    links: [
      {
        content: "https://yingjieweb.github.io/navigator/",
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
    content: <Image src={chargeUI} alt="小本本记账" />,
    description: (
      <p>
        用 <Highlight>React.js + TypeScript + ECharts</Highlight>{" "}
        开发的一款属于自己的极简记账应用。
      </p>
    ),
    links: [
      {
        content: "https://yingjieweb.github.io/charge/#/money",
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
    content: <Image src={domboxUI} alt="dombox 工具库" />,
    description: (
      <p>
        一个高效、精简、功能丰富的 <Highlight>JavaScript 工具库</Highlight>
        。它提供的 API 易于使用，这让诸如 HTML
        文档遍历和操作、事件处理操作更加简单。
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
    content: <Image src={sunshineUI} alt="CSS 魔法世界" />,
    description: (
      <p>
        自己在学期前端初期搞的一些有趣的{" "}
        <Highlight>CSS animation 效果</Highlight> 🤪
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
    content: <Image src={amapOptimizationDemoUI} alt="高德地图优化方案" />,
    description: (
      <p>
        针对数据量较大时 高德地图「海量点标记 + 海量标注」
        <Highlight>
          卡顿问题
        </Highlight> 提供了一整套优化方案。整体性能优化提升{" "}
        <Highlight>300%</Highlight> 🎉
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
    content: (
      <Image src={dndDraggableTreeDemoUI} alt="可拖拽的多层级树形组件" />
    ),
    description: (
      <p>
        基于 React <Highlight>dnd-kit</Highlight>{" "}
        的一款可拖拽的多层级树形排序组件
      </p>
    ),
    links: [
      {
        content: "https://yingjieweb.github.io/dnd-draggable-tree-demo/",
        image: link,
      },
      {
        content: "https://github.com/yingjieweb/dnd-draggable-tree-demo",
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
    content: <Image src={rbacCheckboxTreeDemoUI} alt="RBAC 树形选择组件" />,
    description: (
      <p>
        一款基于角色的访问控制 checkbox 树形组件， 涉及{" "}
        <Highlight>多级权限联动选择</Highlight> 功能
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
