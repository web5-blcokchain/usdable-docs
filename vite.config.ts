import { fileURLToPath, URL } from 'node:url'

import unocss from 'unocss/vite'
import autoImport from 'unplugin-auto-import/vite'
import components from 'unplugin-vue-components/vite'

import { defineConfig } from 'vite'

const r = (path: string) => fileURLToPath(new URL(path, import.meta.url))

export default defineConfig({
  plugins: [
    unocss(),
    autoImport({
      dts: r('.auto-import/auto-import.d.ts'),
      imports: [
        'vue'
      ],
      vueTemplate: true
    }),
    components({
      include: [/\.vue$/, /\.vue\?vue/, /\.md$/],
      dts: r('.auto-import/components.d.ts')
    })
  ]
})
