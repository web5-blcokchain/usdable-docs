import { defineConfig } from 'vitepress'
import sidebar from './sidebar'

export default defineConfig({
  title: 'Usdable Docs',
  description: 'Usdable Docs',
  themeConfig: {
    nav: [
      { text: '主页', link: '/' },
      { text: '前端', link: '/frontend' },
      { text: '后端', link: '/backend' }
    ],

    sidebar,

    socialLinks: [
      { icon: 'github', link: 'https://github.com/web5-blcokchain/usdable-docs' }
    ]
  }
})
