import { defineConfigWithTheme } from 'vitepress'
import type { ThemeConfig } from 'vitepress-carbon'
import baseConfig from 'vitepress-carbon/config'

export default defineConfigWithTheme<ThemeConfig>({
  head: [
    ['link', { rel: 'icon', href: '/logo.png' }] 
  ],
  extends: baseConfig,
  title: "UCT Tutorials",
  description: "Undertale Changer Template Tutorials",
  srcDir: 'src',
  base: '/UCT-Tutorials/',

  themeConfig: {
    logo: '/logo.png',
    footer: {
      message: '© 2025 Bli_AIk. All rights reserved.'
    },
    nav: [
      {
        text: 'Languages',
        items: [
          { text: 'English', link: '/' },
          { text: '简体中文', link: '/zh_CN/' },
          { text: '繁體中文', link: '/zh_TW/' }
        ]
      }
    ],
    sidebar: {
      '/': [
        {
          text: 'Introduction and Preparation',
          items: [
            { text: '01-Foreword', link: '/01-Foreword' },
            { text: '02-Install Unity and IDE', link: '/02-Install_Unity_And_IDE' }
          ]
        }
      ],
      '/zh_CN/': [
        {
          text: '介绍与准备',
          items: [
            { text: '01-前言', link: '/zh_CN/01-Foreword' },
            { text: '02-安装 Unity 与 IDE', link: '/zh_CN/02-Install_Unity_And_IDE' }
          ]
        }
      ],
      '/zh_TW/': [
        {
          text: '介紹與準備',
          items: [
            { text: '01-前言', link: '/zh_TW/01-Foreword' },
            { text: '02-安裝 Unity 與 IDE', link: '/zh_TW/02-Install_Unity_And_IDE' }
          ]
        }
      ]
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/Bli-AIk/UCT-Tutorials' }
    ],
    search: { provider: 'local' }
  },

  // Add this to dynamically update the language in the UI
  transformHead({ assets, pageData }) {
    return [
      [
        'script',
        {},
        `
        window.addEventListener('load', function() {
          const path = window.location.pathname;
          let lang = 'en';
          if (path.includes('/zh_CN/')) {
            lang = 'zh_CN';
          } else if (path.includes('/zh_TW/')) {
            lang = 'zh_TW';
          }
          
          // Update nav language text
          const langNav = document.querySelector('.VPNavBarMenu .VPNavBarMenuLink');
          if (langNav) {
            langNav.textContent = lang === 'zh_CN' ? '语言' : lang === 'zh_TW' ? '語言' : 'Languages';
          }
        });
        `
      ]
    ]
  }
})
