import { Image } from "antd";
import type { TFunction } from "i18next";
// types
import type { ProjectItem } from "./item";
// links
import csdn from "@/public/assets/icons/csdn.png";
import github from "@/public/assets/svgs/github.svg";
import juejin from "@/public/assets/svgs/juejin.svg";
import link from "@/public/assets/svgs/link.svg";
// technology stack
import antd from "@/public/assets/icons/antd.png";
import babel from "@/public/assets/icons/babel.png";
import css from "@/public/assets/icons/css.png";
import echarts from "@/public/assets/icons/echarts.png";
import element from "@/public/assets/icons/element.png";
import jQuery from "@/public/assets/icons/jquery.png";
import js from "@/public/assets/icons/js.png";
import karma from "@/public/assets/icons/karma.png";
import mocha from "@/public/assets/icons/mocha.png";
import npm from "@/public/assets/icons/npm.png";
import react from "@/public/assets/icons/react.png";
import scss from "@/public/assets/icons/sass.png";
import sinon from "@/public/assets/icons/sinon.png";
import styledComponents from "@/public/assets/icons/styled-components.png";
import travis from "@/public/assets/icons/travis.webp";
import ts from "@/public/assets/icons/ts.png";
import vue from "@/public/assets/icons/vue.png";
import webpack from "@/public/assets/icons/webpack.png";
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

export const getProjects = (t: TFunction): ProjectItem[] => [
  {
    id: "amap",
    logoFont: "🌏",
    title: t("projects.items.amap.title"),
    content: (
      <Image
        src={amapOptimizationDemoUI.src}
        alt={t("projects.items.amap.title")}
      />
    ),
    description: <p>{t("projects.items.amap.description")}</p>,
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
        content: "https://yingjieweb.blog.csdn.net/article/details/124321573",
        image: csdn,
      },
    ],
    techUsed: [
      { content: "Vue.js", image: vue },
      { content: "Sass", image: scss },
    ],
  },
  {
    id: "league",
    logo: leagueoflegendsLogo,
    title: t("projects.items.league.title"),
    content: (
      <Image
        src={leagueoflegendsUI.src}
        alt={t("projects.items.league.title")}
      />
    ),
    description: <p>{t("projects.items.league.description")}</p>,
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
    id: "campus",
    logoFont: "🎓",
    title: t("projects.items.campus.title"),
    content: (
      <Image src={campusUI.src} alt={t("projects.items.campus.title")} />
    ),
    description: <p>{t("projects.items.campus.description")}</p>,
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
    id: "navigator",
    logoFont: "📡",
    title: t("projects.items.navigator.title"),
    content: (
      <Image src={navigatorUI.src} alt={t("projects.items.navigator.title")} />
    ),
    description: <p>{t("projects.items.navigator.description")}</p>,
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
    id: "charge",
    logoFont: "📒",
    title: t("projects.items.charge.title"),
    content: (
      <Image src={chargeUI.src} alt={t("projects.items.charge.title")} />
    ),
    description: <p>{t("projects.items.charge.description")}</p>,
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
    id: "dnd",
    logoFont: "👆",
    title: t("projects.items.dnd.title"),
    content: (
      <Image
        src={dndDraggableTreeDemoUI.src}
        alt={t("projects.items.dnd.title")}
      />
    ),
    description: <p>{t("projects.items.dnd.description")}</p>,
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
    id: "rbac",
    logoFont: "🧷",
    title: t("projects.items.rbac.title"),
    content: (
      <Image
        src={rbacCheckboxTreeDemoUI.src}
        alt={t("projects.items.rbac.title")}
      />
    ),
    description: <p>{t("projects.items.rbac.description")}</p>,
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
  {
    id: "dombox",
    logoFont: "🌲",
    title: t("projects.items.dombox.title"),
    content: (
      <Image src={domboxUI.src} alt={t("projects.items.dombox.title")} />
    ),
    description: <p>{t("projects.items.dombox.description")}</p>,
    links: [
      {
        content: "https://github.com/yingjieweb/dombox",
        image: github,
      },
    ],
    techUsed: [{ content: "JavaScript", image: js }],
  },
  {
    id: "sunshine",
    logoFont: "✨",
    title: t("projects.items.sunshine.title"),
    content: (
      <Image src={sunshineUI.src} alt={t("projects.items.sunshine.title")} />
    ),
    description: <p>{t("projects.items.sunshine.description")}</p>,
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
];
