import type { DefaultTheme } from 'vitepress'

import backend from './backend'
import frontend from './frontend'

export default {
  '/frontend': frontend,
  '/backend': backend
} satisfies DefaultTheme.Sidebar
