import type { ProjectConfig } from '@/types'

export const projects: ProjectConfig[] = [{
  name: 'HoyoGameFiles',
  status: 'production',
  description: '米哈游游戏文件在线列表',
  cover: 'https://icdn.amarea.cn/upload/2024/07/669baea23962f.png',
  link: {
    website: 'https://files.hk4e.com/',
    github: 'https://github.com/orilights/hoyo-game-files',
  },
}, {
  name: 'API Tracker',
  status: 'production',
  description: 'API 数据变化监控工具，2024/5/29 开始记录部分米哈游API',
  cover: 'https://icdn.amarea.cn/upload/2024/07/669ba6f1001e1.png',
  link: {
    website: 'https://api-tracker.hk4e.com/',
  },
}, {
  name: 'HoyoNews',
  status: 'production',
  description: '米哈游游戏官网新闻检索工具',
  cover: 'https://icdn.amarea.cn/upload/2024/07/669ba7d045f08.png',
  link: {
    website: 'https://news.hk4e.com/',
    github: 'https://github.com/orilights/hoyo-news-search',
  },
}, {
  name: 'PixivCollection',
  status: 'production',
  description: '在线 Pixiv 收藏夹，支持筛选图片并在线查看',
  cover: 'https://icdn.amarea.cn/upload/2024/07/669bb78c268e0.png',
  link: {
    website: 'https://pixiv.orilight.top/',
    github: 'https://github.com/orilights/PixivCollection',
  },
}, {
  name: 'ECharts Practice',
  status: 'experimental',
  description: 'ECharts 练习项目，存放一些收集的统计数据',
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
    github: 'https://github.com/orilights/ExchangeBoard',
  },
}, {
  name: 'ServerStatus-Theme-Light',
  status: 'experimental',
  description: '自制 ServerStatus 主题',
  cover: 'https://icdn.amarea.cn/upload/2024/07/669bafe91b5a8.png',
  link: {
    website: 'https://sstl-demo.orilight.top/',
    github: 'https://github.com/orilights/ServerStatus-Theme-Light',
  },
}]
