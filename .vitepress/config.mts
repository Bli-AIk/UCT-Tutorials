import { defineConfig } from 'vitepress'

export default defineConfig({
  srcDir: 'src',
  locales: {
    root: {
      label: 'English',
      lang: 'en',
      link: '/',
      themeConfig: {
        nav: [
          { text: 'Home', link: '/' },
          { text: 'Examples', link: '/01-Foreword' }
        ],
        sidebar: [
          {
            text: 'Examples',
            items: [
              { text: 'Markdown Examples', link: '/01-Foreword' },
              { text: 'Runtime API Example', link: '/02-Install_Unity_And_Rider' }
            ]
          }
        ]
      }
    },
    'zh_CN': {
      label: '简体中文',
      lang: 'zh_CN',
      link: '/zh_CN/',
      themeConfig: {
        nav: [
          { text: '首页', link: '/zh_CN/' },
          { text: '示例', link: '/zh_CN/01-Foreword' }
        ],
        sidebar: [
          {
            text: '示例',
            items: [
              { text: 'Markdown 示例', link: '/zh_CN/01-Foreword' },
              { text: '运行时 API 示例', link: '/zh_CN/02-Install_Unity_And_Rider' }
            ]
          }
        ]
      }
    },
    'zh_TW': {
      label: '繁體中文',
      lang: 'zh_TW',
      link: '/zh_TW/',
      themeConfig: {
        nav: [
          { text: '首頁', link: '/zh_TW/' },
          { text: '範例', link: '/zh_TW/01-Foreword' }
        ],
        sidebar: [
          {
            text: '範例',
            items: [
              { text: 'Markdown 範例', link: '/zh_TW/01-Foreword' },
              { text: '執行階段 API 範例', link: '/zh_TW/02-Install_Unity_And_Rider' }
            ]
          }
        ]
      }
    }
  },
  themeConfig: {
    socialLinks: [
      { icon: 'github', link: 'https://github.com/Bli-AIk/UCT-Tutorials' }
    ],
    search: {
      provider: 'local'
    }
  }
})
