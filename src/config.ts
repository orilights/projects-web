import type { ProjectConfig } from '@/types'

export const navs = [{
  title: '主页',
  link: 'https://orilight.top/',
}, {
  title: '博客',
  link: 'https://blog.amarea.cn/',
}]

export const projects = ref<ProjectConfig[]>([{
  name: '游戏文件列表',
  status: 'production',
  description: '在线列出游戏版本、游戏包、更新包列表与游戏文件列表',
  cover: 'https://icdn.amarea.cn/upload/2024/07/669baea23962f.png',
  link: {
    website: 'https://files.hk4e.com/',
    github: 'orilights/hoyo-game-files',
  },
}, {
  name: 'API Tracker',
  status: 'production',
  description: 'API 数据变化监控工具，2024/5/29 开始监控部分米哈游API',
  cover: 'https://icdn.amarea.cn/upload/2024/07/669ba6f1001e1.png',
  link: {
    website: 'https://api-tracker.hk4e.com/',
    github: 'orilights/api-tracker',
  },
}, {
  name: '米哈游官网新闻检索',
  status: 'production',
  description: '一个用于检索米哈游旗下游戏官网新闻的小工具，支持搜索和分类检索',
  cover: 'https://icdn.amarea.cn/upload/2024/07/669ba7d045f08.png',
  link: {
    website: 'https://news.hk4e.com/',
    github: 'orilights/hoyo-news-search',
  },
}, {
  name: 'PixivCollection',
  status: 'production',
  description: '在线 Pixiv 收藏夹，支持筛选图片并在线查看',
  cover: 'https://icdn.amarea.cn/upload/2024/07/669bb78c268e0.png',
  link: {
    website: 'https://pixiv.orilight.top/',
    github: 'orilights/PixivCollection',
  },
}, {
  name: 'ECharts 练习',
  status: 'experimental',
  description: '一些个人收集数据的可视化，顺带练习 ECharts',
  cover: 'https://icdn.amarea.cn/upload/2024/07/669ba5ef85286.png',
  link: {
    website: 'https://chart.hk4e.com/',
  },
}, {
  name: '汇率看板',
  status: 'experimental',
  description: '自用汇率看板，数据来自 ExchangeRate-API',
  cover: 'https://icdn.amarea.cn/upload/2024/07/669bada68b3fa.png',
  link: {
    website: 'https://exchange-board-dev.vercel.app/',
    github: 'orilights/ExchangeBoard',
  },
}, {
  name: 'ServerStatus-Theme-Light',
  status: 'experimental',
  description: '自制 ServerStatus 主题',
  cover: 'https://icdn.amarea.cn/upload/2024/07/669bafe91b5a8.png',
  link: {
    website: 'https://sstl-demo.orilight.top/',
    github: 'orilights/ServerStatus-Theme-Light',
  },
}])
