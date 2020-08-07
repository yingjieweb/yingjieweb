const wishListDB: TWishListItem[] = [
  {
    name: '去参观一次阿里',
    status: 'done',
    imgs: [
      require('../assets/wishImages/visitAli.jpg')
    ],
    date: '2020-08-02'
  },
  {
    name: '开源项目 contributor',
    status: 'done',
    imgs: [
      require('../assets/wishImages/contributor.jpg')
    ],
    date: '2020-07-07'
  },
  {
    name: '玩一次蹦床',
    status: 'done',
    imgs: [
      require('../assets/wishImages/trampoline1.jpg'),
      require('../assets/wishImages/trampoline2.jpg')
    ],
    date: '2020-05-04'
  },
  {
    name: '策划学长/姐毕业聚餐',
    status: 'done',
    imgs: [
      require('../assets/wishImages/graduate1.jpg'),
      require('../assets/wishImages/graduate2.jpg'),
      require('../assets/wishImages/graduate3.jpg')
    ],
    date: '2020-01-05'
  },
  {
    name: '开始人生第一份实习',
    status: 'done',
    imgs: [
      require('../assets/wishImages/intern.jpg')
    ],
    date: '2019-12-24'
  },
  {
    name: '看济南的音乐喷泉',
    status: 'done',
    imgs: [
      require('../assets/wishImages/fountain1.jpg'),
      require('../assets/wishImages/fountain2.jpg'),
      require('../assets/wishImages/fountain3.jpg')
    ],
    date: '2019-08-11'
  },
  {
    name: '去吉林旅游',
    status: 'done',
    imgs: [
      require('../assets/wishImages/travelJilin1.jpg'),
      require('../assets/wishImages/travelJilin2.jpg'),
      require('../assets/wishImages/travelJilin3.jpg'),
      require('../assets/wishImages/travelJilin4.jpg')
    ],
    date: '2019-07-20'
  },
  {
    name: '徒手抓两个篮球',
    status: 'done',
    imgs: [
      require('../assets/wishImages/basketball.jpg')
    ],
    date: '2019-07-10'
  },
  {
    name: '去大连旅游',
    status: 'done',
    date: '2019-05-15'
  },
  {
    name: '出门不嗑药',
    status: 'done',
    date: '2019-06-14'
  },
  {
    name: '见大学的好伙伴',
    status: 'done',
    date: '2019-05-22'
  },
  {
    name: '走你来时的路',
    status: 'done',
    date: '2019-05-20'
  },
  {
    name: '成立小团伙',
    status: 'done',
    date: '2019-05-15'
  },
  {
    name: '参加运动会短跑项目',
    status: 'done',
    date: '2019-05-12'
  },
  {
    name: '去喂海鸥',
    status: 'done',
    date: '2019-01-27'
  },
  {
    name: '感受一下东北的雪',
    status: 'done',
    date: '2018-12-06'
  },
  {
    name: '一直都是自己入学',
    status: 'done',
    date: '2018-08-28'
  },
  {
    name: '去无锡旅游',
    status: 'done',
    date: '2018-07-27'
  },
  {
    name: '本科顺利毕业',
    status: 'done',
    date: '2018-06-24'
  },
  {
    name: '玩滑板',
    status: 'done',
    date: '2018-05-17'
  },
  {
    name: '去操场倒立',
    status: 'done',
    date: '2018-05-09'
  },
  {
    name: '2018 考研上岸',
    status: 'done',
    date: '2018-04-03'
  },
  {
    name: '坐一次飞机',
    status: 'done',
    date: '2018-03-31'
  },
  {
    name: '去看五月的风',
    status: 'done',
    date: '2018-02-25'
  },
  {
    name: '堆一次雪人',
    status: 'done',
    date: '2017-01-19'
  },
  {
    name: '两校区国护交流',
    status: 'done',
    date: '2016-10-24'
  },
  {
    name: '圆满完成战地救护表演项目',
    status: 'done',
    date: '2016-09-25'
  },
  {
    name: '第二次大学生新生军训连长',
    status: 'done',
    date: '2016-09-24'
  },
  {
    name: '高中新生军训连长',
    status: 'done',
    date: '2016-08-30'
  },
  {
    name: '整一个分头',
    status: 'done',
    date: '2016-06-14'
  },
  {
    name: '回老校区看看',
    status: 'done',
    date: '2016-04-03'
  },
  {
    name: '参加部队阅兵式训练',
    status: 'done',
    date: '2016-03-25'
  },
  {
    name: '宿舍旋转小火锅',
    status: 'done',
    date: '2015-10-10'
  },
  {
    name: '担任大学生新生军训连长',
    status: 'done',
    date: '2015-09-25'
  },
  {
    name: '快速习惯新校区环境',
    status: 'done',
    date: '2015-08-26'
  },
  {
    name: '圆满完成运动会升旗仪式',
    status: 'done',
    date: '2015-06-22'
  },
  {
    name: '和小伙伴去海边烧烤',
    status: 'done',
    date: '2015-06-02'
  },
  {
    name: '第一次军装升旗',
    status: 'done',
    date: '2014-11-24'
  },
  {
    name: '参加国护社团',
    status: 'done',
    date: '2014-11-08'
  },
  {
    name: '去天安门看阅兵',
    status: 'todo'
  },
  {
    name: '学会游泳',
    status: 'todo'
  },
  {
    name: '考雅思/托福',
    status: 'todo'
  },
  {
    name: '定期见老朋友',
    status: 'todo'
  },
  {
    name: '坚持写博客学习',
    status: 'todo'
  },
  {
    name: '专业前端开发',
    status: 'todo'
  },
  {
    name: '学习微信小程序',
    status: 'todo'
  },
  {
    name: '学一下平面设计, ps',
    status: 'todo'
  },
  {
    name: '打个保龄球',
    status: 'todo'
  },
  {
    name: '坚持早起锻炼',
    status: 'todo'
  },
  {
    name: '硕士顺利毕业',
    status: 'todo'
  },
  {
    name: '学习做饭',
    status: 'todo'
  },
  {
    name: '学习如何健身',
    status: 'todo'
  },
  {
    name: '学跳舞',
    status: 'todo'
  },
  {
    name: '去古巴旅游一次',
    status: 'todo'
  },
]

export default wishListDB
