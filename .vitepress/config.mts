import { defineConfigWithTheme } from 'vitepress'
import type { ThemeConfig } from 'vitepress-carbon'
import baseConfig from 'vitepress-carbon/config'

export default defineConfigWithTheme<ThemeConfig>({
  extends: baseConfig,
  title: "Undertale Changer Template Tutorials",
  description: "A VitePress Site",
  srcDir: 'src',
  base: '/UCT-Tutorials/',

  locales: {
    root: {
      label: 'English',
      lang: 'en-US',
      link: '/',
    },
    zh_CN: {
      label: '简体中文',
      lang: 'zh-CN',
      link: '/zh_CN/',
    },
    zh_TW: {
      label: '繁體中文',
      lang: 'zh-TW',
      link: '/zh_TW/',
    }
  },

  themeConfig: {
    socialLinks: [
      { icon: 'github', link: 'https://github.com/Bli-AIk/UCT-Tutorials' }
    ],

    search: {
      provider: 'local'
    },

    locales: {
      root: {
        nav: [
          { text: 'Home', link: '/' },
          { text: 'Examples', link: '/markdown-examples' }
        ],
        sidebar: [
          {
            text: 'Examples',
            items: [
              { text: 'Markdown Examples', link: '/markdown-examples' },
              { text: 'Runtime API Examples', link: '/api-examples' }
            ]
          }
        ]
      },

      zh_CN: {
        nav: [
          { text: '首页', link: '/zh_CN/' },
          { text: '示例', link: '/zh_CN/markdown-examples' }
        ],
        sidebar: [
          {
            text: '示例',
            items: [
              { text: 'Markdown 示例', link: '/zh_CN/markdown-examples' },
              { text: '运行时 API 示例', link: '/zh_CN/api-examples' }
            ]
          }
        ]
      },

      zh_TW: {
        nav: [
          { text: '首頁', link: '/zh_TW/' },
          { text: '範例', link: '/zh_TW/markdown-examples' }
        ],
        sidebar: [
          {
            text: '範例',
            items: [
              { text: 'Markdown 範例', link: '/zh_TW/markdown-examples' },
              { text: '執行階段 API 範例', link: '/zh_TW/api-examples' }
            ]
          }
        ]
      }
    }
  }
})
