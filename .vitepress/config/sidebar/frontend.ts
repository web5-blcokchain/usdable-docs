import type { DefaultTheme } from 'vitepress'

export default [
  {
    text: '标题',
    items: [
      { text: '链接1', link: '/frontend/link1' },
      { text: '链接2', link: '/frontend/link2' }
    ]
  }
] satisfies DefaultTheme.Sidebar
