import { defineConfigWithTheme } from 'vitepress'
import type { ThemeConfig } from 'vitepress-carbon'
import baseConfig from 'vitepress-carbon/config'

function getCurrentLang() {
  const path = typeof window !== 'undefined' ? window.location.pathname : ''
  let lang = 'en'

  // 确保路径判断能正确识别
  if (path.includes('/zh_CN/')) {
    lang = 'zh_CN'
  } else if (path.includes('/zh_TW/')) {
    lang = 'zh_TW'
  }

  return lang
}

function getLangNav(): ThemeConfig['nav'] {
  const currentLang = getCurrentLang()

  return [
    {
      text:
          currentLang === 'zh_CN'
              ? '语言'
              : currentLang === 'zh_TW'
                  ? '語言'
                  : 'Languages',
      items: [
        { text: 'English', link: '/' },
        { text: '简体中文', link: '/zh_CN/' },
        { text: '繁體中文', link: '/zh_TW/' }
      ]
    }
  ]
}

function getLangSidebar(): ThemeConfig['sidebar'] {
  const currentLang = getCurrentLang()

  if (currentLang === 'zh_CN') {
    return [
      {
        text: '介绍与准备',
        items: [
          { text: '序言', link: '/zh_CN/01-Foreword' },
          { text: '安装 Unity 和 Rider', link: '/zh_CN/02-Install_Unity_And_Rider' }
        ]
      }
    ]
  } else if (currentLang === 'zh_TW') {
    return [
      {
        text: '介紹與準備',
        items: [
          { text: '序言', link: '/zh_TW/01-Foreword' },
          { text: '安裝 Unity 與 Rider', link: '/zh_TW/02-Install_Unity_And_Rider' }
        ]
      }
    ]
  } else {
    return [
      {
        text: 'Introduction and Preparation',
        items: [
          { text: 'Foreword', link: '/01-Foreword' },
          { text: 'Install Unity and Rider', link: '/02-Install_Unity_And_Rider' }
        ]
      }
    ]
  }
}

export default defineConfigWithTheme<ThemeConfig>({
  extends: baseConfig,
  title: "UCT Tutorials",
  description: "Undertale Changer Template Tutorials",
  srcDir: 'src',
  base: '/UCT-Tutorials/',

  themeConfig: {
    nav: getLangNav(),
    sidebar: getLangSidebar(),
    socialLinks: [
      { icon: 'github', link: 'https://github.com/Bli-AIk/UCT-Tutorials' }
    ],
    search: { provider: 'local' }
  }
})
