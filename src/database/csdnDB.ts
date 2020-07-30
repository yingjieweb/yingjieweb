const csdnDB: TBlogItem[] = [
  {
    title: 'Web 安全 — XSS 的原理和攻防',
    desc: 'XSS 是跨站脚本攻击 (Cross Site Scripting)，为不和层叠样式表 (Cascading Style Sheets, CSS)...',
    url: 'https://blog.csdn.net/Marker__/article/details/107653194',
    date: '2020-07-30'
  },
  {
    title: '关于 webpack 的几个知识点',
    desc: '最近几天备战秋招复习 webpack 的时候，发现一篇总结的比较好的博文，摘取几个相关的问题...',
    url: 'https://blog.csdn.net/Marker__/article/details/107619259',
    date: '2020-07-27'
  },
  {
    title: 'UDP 协议 vs TCP协议',
    desc: 'UDP 是一种无连接的，不可靠的传输层协议。它只提供了传输层需要实现的最低限度的功能...',
    url: 'https://blog.csdn.net/Marker__/article/details/107496777',
    date: '2020-07-21'
  },
  {
    title: 'HTTP1.0 vs HTTP1.1 vs HTTP2.0',
    desc: 'HTTP1.0 最早在网页中使用是在1996年，那个时候只是使用一些较为简单的网页上和网络请求...',
    url: 'https://blog.csdn.net/Marker__/article/details/107484574',
    date: '2020-07-21'
  },
  {
    title: 'HTTP 的基本优化策略',
    desc: '影响一个 HTTP 网络请求的因素主要有两个：带宽和延迟。如果说我们还停留在拨号上网的...',
    url: 'https://blog.csdn.net/Marker__/article/details/107484288',
    date: '2020-07-21'
  },
  {
    title: '了解一下几种 HTTP 浏览器缓存',
    desc: '浏览器缓存，又称 HTTP 缓存，指的是：当我们浏览网站的时候，器存储会在本地存储一个...',
    url: 'https://blog.csdn.net/Marker__/article/details/107460135',
    date: '2020-07-20'
  },
  {
    title: '用 mouse 事件写一个可拖拽的 div',
    desc: '今天刷题的过程中看到一个有意思的题目，用 mouse 事件写一个可拖拽的 div，个人以为...',
    url: 'https://blog.csdn.net/Marker__/article/details/107449165',
    date: '2020-07-19'
  },
  {
    title: 'Vue 3.0 + Vite 快速尝鲜！',
    desc: 'Vite 是由 Vue 作者尤雨溪开发的一套一种新的、更快地 web 开发工具，它具快速的冷...',
    url: 'https://blog.csdn.net/Marker__/article/details/107443212',
    date: '2020-07-19'
  },
  {
    title: '打包出来的 common.js/umd.js 是啥？',
    desc: 'Vue 使用 lib 模式 开发自己的组件库时，打包后的 dist 目录不仅有 lib.min.js...',
    url: 'https://blog.csdn.net/Marker__/article/details/107413807',
    date: '2020-07-17'
  },
  {
    title: '如果你觉得 GitHub Pages 太慢的话',
    desc: 'GitHub 的 Pages 功能，相当于是 GitHub 为用户提供的免费服务器（前一阵还有消息...',
    url: 'https://blog.csdn.net/Marker__/article/details/107173269',
    date: '2020-07-07'
  },
  {
    title: '如何将你的项目上传到 npm',
    desc: '编程爱好者如果想让自己的项目像 Vue、React 框架那样能为众人所用，可以尝试将项目上...',
    url: 'https://blog.csdn.net/Marker__/article/details/106874682',
    date: '2020-06-20'
  },
  {
    title: 'Vue 3.0 对数据双向绑定的改进',
    desc: '熟悉 Vue 的人都知道，在 Vue2.x 之前都是使用 Object.defineProperty() 来实现双向...',
    url: 'https://blog.csdn.net/Marker__/article/details/106784198',
    date: '2020-06-16'
  },
  {
    title: 'Vue 中使用 Karma 做自动化测试',
    desc: 'chai.js 断言库 ：这个玩意儿就是对你写的代码进行一个单元测试，能够使开发人员尽早的发现...',
    url: 'https://blog.csdn.net/Marker__/article/details/106781516',
    date: '2020-06-16'
  },
  {
    title: '使用 svg-sprite-loader 批量引入 icon',
    desc: '前端在做项目的过程中，都会频繁使用图标，记得几年前还是流行使用 CSS Sprite 雪碧图，它...',
    url: 'https://blog.csdn.net/Marker__/article/details/106446639',
    date: '2020-05-30'
  },
  {
    title: 'Vue - v-for 中为什么不能用 index 作为 key',
    desc: '这是一篇脱坑日记，在做项目的过程中，我使用了 v-for 渲染子组件时，并将 index 绑定给了 key...',
    url: 'https://blog.csdn.net/Marker__/article/details/105867759',
    date: '2020-05-01'
  },
  {
    title: 'Vue 的 class 组件介绍（vue-property-decorator）',
    desc: '在 Vue 的 V2.X 版本中使用 TypeScript 时，推荐使用 基于类的注解装饰器 进行开发。Vue...',
    url: 'https://blog.csdn.net/Marker__/article/details/105784520',
    date: '2020-04-27'
  },
  {
    title: 'git clone & git reset 补充',
    desc: 'git clone git@?/xxx.git 会在当前目录下创建一个xxx目录，xxx/.git是本地仓库，clone...',
    url: 'https://blog.csdn.net/Marker__/article/details/105710471',
    date: '2020-04-23'
  },
  {
    title: 'useState() hook 的原理解析',
    desc: '我们通过最简单 +1 操作来分析一下函数组件的 useState() 工作原理。该应用的具体代码如下，使用...',
    url: 'https://blog.csdn.net/Marker__/article/details/105593118',
    date: '2020-04-18'
  },
  {
    title: '封装 useUpdate 钩子',
    desc: '上一篇博客里面提到了，函数组件在模仿类组件的生命周期钩子时，需要使用 React 推出的 useEffect...',
    url: 'https://blog.csdn.net/Marker__/article/details/105587287',
    date: '2020-04-17'
  },
  {
    title: 'React 函数组件详解',
    desc: '相比类组件其实更提倡使用函数组件，因为它在很多操作上都是很便捷的，比如说没有 this。...',
    url: 'https://blog.csdn.net/Marker__/article/details/105584360',
    date: '2020-04-17'
  },
  {
    title: 'React 类组件的生命周期',
    desc: 'React 类组件的 constructor() 生命周期，主要用途是 初始化 props、初始化 state、绑定 this。...',
    url: 'https://blog.csdn.net/Marker__/article/details/105561007',
    date: '2020-04-17'
  },
  {
    title: '关于类组件事件绑定的 this 问题',
    desc: '在类组件中，绑定事件（onClick、onKeyPress等）的方式有以下几种，其中比较保险和推荐的还是使用...',
    url: 'https://blog.csdn.net/Marker__/article/details/105549771',
    date: '2020-04-16'
  },
  {
    title: 'React 和 Vue 的不同编程模型',
    desc: '接触 Vue 的开发者应该都知道，在 Vue 中一旦内部数据改变了，视图就会随之更新，这是因为 Vue ...',
    url: 'https://blog.csdn.net/Marker__/article/details/105540510',
    date: '2020-04-15'
  },
  {
    title: 'React 内部数据 state v.s. 外部数据 props',
    desc: '和 Vue 类似，React 的组件之间也需要进行传值。父组件需要在 子组件的占位符 上通过 赋值 的形式...',
    url: 'https://blog.csdn.net/Marker__/article/details/105537342',
    date: '2020-04-15'
  },
  {
    title: 'React 类组件和函数组件',
    desc: '元素（element） vs 组件（component）。和 Vue 一样，在 React 的开发中也是强调组件化的，...',
    url: 'https://blog.csdn.net/Marker__/article/details/105526958',
    date: '2020-04-15'
  },
  {
    title: 'JSX 的基本使用',
    desc: '通过上一篇博客的 +1 个小应用，我们能体会到，和 Vue 相比代，用 React 写一个这么小的应用比较麻烦...',
    url: 'https://blog.csdn.net/Marker__/article/details/105520697',
    date: '2020-04-14'
  },
  {
    title: 'React 入门笔记',
    desc: 'React 起源于 Facebook 的内部项目，因为该公司对市场上所有 JavaScript MVC 框架都不满意，...',
    url: 'https://blog.csdn.net/Marker__/article/details/105508310',
    date: '2020-04-14'
  },
  {
    title: 'Vue 指令及修饰符 & .sync 详解',
    desc: 'Vue 模板语法中的 v-text、v-html、v-pre 都是指令，它起到一种命令或指示的效果，语法 如下...',
    url: 'https://blog.csdn.net/Marker__/article/details/105481404',
    date: '2020-04-13'
  },
  {
    title: 'Vue 的 template 模板相关语法',
    desc: '我们把 HTML 模板叫做 template，我们所说的模板一般特指 HTML 的字符串，它的主要特点有：...',
    url: 'https://blog.csdn.net/Marker__/article/details/105475391',
    date: '2020-04-13'
  },
  {
    title: 'Vue 的三种 template 模板写法',
    desc: '由于 Vue 完整版的组成是由 运行时版 + 编译器，编译器可以解析 HTML 代码，所以支持将 HTML 写在...',
    url: 'https://blog.csdn.net/Marker__/article/details/105474740',
    date: '2020-04-12'
  },
  {
    title: 'Vue 中 computed 和 watch 的区别',
    desc: 'computed 是依赖 Vue 的 options 中的 data 内部属性，计算出一个新的值的，可以当作属性直接...',
    url: 'https://blog.csdn.net/Marker__/article/details/105470599',
    date: '2020-04-12'
  },
  {
    title: 'Vue 构造选型 options 进阶属性',
    desc: 'options 是创建 vue 实例时的参数，具体可以查看 选项官方文档，options 内含 五大类 属性：...',
    url: 'https://blog.csdn.net/Marker__/article/details/105454604',
    date: '2020-04-12'
  },
  {
    title: '深入 Vue 2.x 数据响应式原理 ★',
    desc: 'Vue 的数据响应式是它的一大特点，也是它的一大优势，Vue 中的 data 数据模型仅仅是普通的 JavaScript...',
    url: 'https://blog.csdn.net/Marker__/article/details/105435236',
    date: '2020-04-10'
  },
  {
    title: 'Vue 实例及构造选项 options',
    desc: 'const vm = new Vue( options )；这句话表示创建一个 Vue 的实例 vm，类似 jQuery 的封装思想...',
    url: 'https://blog.csdn.net/Marker__/article/details/105425507',
    date: '2020-04-10'
  },
  {
    title: 'Vue 中使用 base64 编码和解码',
    desc: '在项目根目录下安装 npm install --save js-base64...',
    url: 'https://blog.csdn.net/Marker__/article/details/105404633',
    date: '2020-04-09'
  },
  {
    title: '深入理解 Vue 不同构建版本的区别',
    desc: '首先你要了解如何创建一个 Vue 项目，如果你还不熟悉的话，可以移步到这里：传送门。创建...',
    url: 'https://blog.csdn.net/Marker__/article/details/105402455',
    date: '2020-04-09'
  },
  {
    title: '升级 Vue CLI4 的脱坑日记',
    desc: '之前就听说了 Vue CLI 更新到 4 了，今天心血来潮的想将之前安装的 Vue CLI3 更新一下，便...',
    url: 'https://blog.csdn.net/Marker__/article/details/105317848',
    date: '2020-04-04 '
  },
  {
    title: 'MVC 软件架构模式',
    desc: 'MVC 是一种软件架构模式，是模型 (model)－视图 (view)－控制器 (controller) 的缩写...',
    url: 'https://blog.csdn.net/Marker__/article/details/105300529',
    date: '2020-04-04'
  },
  {
    title: '使用 npm/yarn 引入插件',
    desc: '行 yarn init -y 会生成一个 package.json 文件运行 yarn add jQuery 会生成...',
    url: 'https://blog.csdn.net/Marker__/article/details/105266776',
    date: '2020-04-02'
  },
  {
    title: '灵魂拷问：说说你对前端的理解',
    desc: '大多数人对前端的认识可能是写点简单的 HTML，CSS 样式，制作点网页界面，其实不然。...',
    url: 'https://blog.csdn.net/Marker__/article/details/105252716',
    date: '2020-04-01'
  },
  {
    title: 'JavaScript DOM 事件委托 ★',
    desc: '在网上看到一个关于事件委托的例子，比如一个宿舍的同学快递同时到了，一种方法就是他们都傻傻...',
    url: 'https://blog.csdn.net/Marker__/article/details/105245651',
    date: '2020-04-01'
  },
  {
    title: 'JS 多种数组去重方法',
    desc: '无论是在实际开发还是工作面试，数组去重都是一个很常见的问题，今天就来总结一下，以...',
    url: 'https://blog.csdn.net/Marker__/article/details/105230882',
    date: '2020-04-01'
  },
  {
    title: '常见的 HTTP 状态码 + 猫图链接',
    desc: 'HTTP 状态码的英文为 HTTP Status Code。在前端开发的日常工作中，免不了向服务器发请求...',
    url: 'https://blog.csdn.net/Marker__/article/details/105224362',
    date: '2020-03-31'
  },
  {
    title: 'Vue - 给对象新增属性（使用Vue.$set()）',
    desc: '今天做项目的过程中遇到一个问题，百思不得其解，询问大佬后恍然大悟，踩坑的主要原因是...',
    url: 'https://blog.csdn.net/Marker__/article/details/105138132',
    date: '2020-03-27'
  },
  {
    title: '不推荐双击 .html 文件预览网页',
    desc: 'html 中的 <a> 标签可以跳转到指定网页，或者当前页面的指定锚点位置，但是设置 <a> 标签...',
    url: 'https://blog.csdn.net/Marker__/article/details/105068571',
    date: '2020-03-24'
  },
  {
    title: '构建一个跳转到百度的搜索页面',
    desc: '每次百度搜索关键字的时候，大家有没有注意到 url 的变化？比如：搜索 "erha" ，那地址...',
    url: 'https://blog.csdn.net/Marker__/article/details/105068507',
    date: '2020-03-24'
  },
  {
    title: '作为一个前端新人，还要不要学 jQuery',
    desc: 'what ？Are you kidding me？老弟，现在是 2020 年了，你还在学 jQuery？别是个傻子吧？...',
    url: 'https://blog.csdn.net/Marker__/article/details/105030183',
    date: '2020-03-22'
  },
  {
    title: '文本溢出显示省略号，鼠标浮动查看全部内容',
    desc: '今天做项目时遇到一种需求：文本溢出截断省略，上网查阅了一下，还是挺简单的，但是...',
    url: 'https://blog.csdn.net/Marker__/article/details/104991128',
    date: '2020-03-20'
  },
  {
    title: 'JavaScript dom 的跨线程操作',
    desc: '浏览器有两个重要功能，一个是渲染引擎，专门用来渲染 HTML 和 CSS 的，另一个是 JS 引擎，...',
    url: 'https://blog.csdn.net/Marker__/article/details/104941375',
    date: '2020-03-18'
  },
  {
    title: 'JavaScript dom 节点的增删改查',
    desc: 'DOM 1 级定义了 Node 接口，该接口为 DOM 的所有节点类型定义了原始类型。JavaScript 实现了...',
    url: 'https://blog.csdn.net/Marker__/article/details/104930118',
    date: '2020-03-17'
  },
  {
    title: '一只 div 对象的完整原型链',
    desc: 'JavaScript 中的继承是基于原型链机制来实现的，只要是对象就会有原型（ 对象原型的 __proto__ 为 null ）...',
    url: 'https://blog.csdn.net/Marker__/article/details/104907852',
    date: '2020-03-16'
  },
  {
    title: '相比 setInterval()，更推荐 setTimeout()',
    desc: '先看一个需求：打印：1，2，3，4，5，6，7，8，9。（要求每间隔一秒钟打印出一个数字）1、通过...',
    url: 'https://blog.csdn.net/Marker__/article/details/104798925',
    date: '2020-03-11'
  },
  {
    title: 'JavaScript 的诞生及浏览器革命',
    desc: '以铜为镜，可以正衣冠，以史为镜，可以知兴替，以人为镜，可以明得失，王朝兴替、个人得失...',
    url: 'https://blog.csdn.net/Marker__/article/details/104662086',
    date: '2020-03-04'
  },
  {
    title: '2020 — 只争朝夕，不负韶华',
    desc: '时间好像真的有加速度，不知不觉又是一年，今年我 24 岁了。回想 2019 年，印象深刻的瞬间并不多，...',
    url: 'https://blog.csdn.net/Marker__/article/details/103893859',
    date: '2020-03-03'
  },
  {
    title: '用 curl 命令构造请求',
    desc: '向服务器发送请求的主要方式有两种，（1）用浏览器（比如： Chrome ）的地址栏、（2）使用 curl 命令...',
    url: 'https://blog.csdn.net/Marker__/article/details/104632676',
    date: '2020-03-03'
  },
  {
    title: '计网专有名词解释',
    desc: 'IP：(Internet Protocol) 协议，又称网际协议，它负责 Internet 上网络之间的通信，并规定了将数据...',
    url: 'https://blog.csdn.net/Marker__/article/details/104605200',
    date: '2020-03-02'
  },
  {
    title: 'Element UI 中国省市区级联数据',
    desc: '看到简书上有一篇关于地区级联的文章，转载一下，希望能帮助到大家。文章出处：Element UI 省市区级联数据...',
    url: 'https://blog.csdn.net/Marker__/article/details/104613253',
    date: '2020-03-02'
  },
  {
    title: '动画属性：transition 和 animation',
    desc: 'css3 的 transition 过渡属性，可以让元素变化的有一个过渡过程而不至于突然出现或者改变样式。...',
    url: 'https://blog.csdn.net/Marker__/article/details/104599010',
    date: '2020-03-01'
  },
  {
    title: '浏览器渲染原理',
    desc: '浏览器在渲染页面前，会首先解析 HTML 和 CSS 代码，根据代码构建相应的 HTML 树（DOM） 和...',
    url: 'https://blog.csdn.net/Marker__/article/details/104587057',
    date: '2020-03-01'
  },
  {
    title: 'grid 布局',
    desc: 'grid 布局（网格布局） 和 flex 布局一样，都是 CSS3 的新布局模式，但 flex 布局是一维布局...',
    url: 'https://blog.csdn.net/Marker__/article/details/104573989',
    date: '2020-02-29'
  },
  {
    title: 'meta viewport 完美视口',
    desc: '快捷键：meta:vp 然后按Tab，可以自动生成视口，但是不够完整，完整如下：...',
    url: 'https://blog.csdn.net/Marker__/article/details/104558821',
    date: '2020-02-28'
  },
  {
    title: 'GitHub Pages 预览 HTML/项目',
    desc: '在 GitHub 上提交的代码，如果想在线预览页面，我们可以使用 GitHub 提供的 GitHub Pages...',
    url: 'https://blog.csdn.net/Marker__/article/details/104504589',
    date: '2020-02-25'
  },
  {
    title: 'GitHub 直接预览 Markdown',
    desc: 'Markdown 是一种轻量级标记语言，它以纯文本形式（易读、易写、易更改）编写文档，并最终以...',
    url: 'https://blog.csdn.net/Marker__/article/details/104486460',
    date: '2020-02-25'
  },
  {
    title: 'git 切换 ssh 和 https 协议',
    desc: '如果你采用的是 https 协议提交代码到 github 的话，会发现每次 push 代码时都需要验证你的...',
    url: 'https://blog.csdn.net/Marker__/article/details/104472081',
    date: '2020-02-24'
  },
  {
    title: '同时使用 GitHub 和 GitLab',
    desc: '先说一下写这篇博客的缘由，之前自己开发项目的时候都是用 gitHub 来托管代码，但是实习之后...',
    url: 'https://blog.csdn.net/Marker__/article/details/104286660',
    date: '2020-02-12'
  },
  {
    title: '其余博客在我的 CSDN 博客主页',
    desc: '点击跳转到 CSDN...',
    url: 'https://blog.csdn.net/marker__',
    date: '-------------'
  },
]

export default csdnDB
