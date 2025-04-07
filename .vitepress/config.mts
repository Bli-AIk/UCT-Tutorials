import { defineConfigWithTheme } from 'vitepress'
import type { ThemeConfig } from 'vitepress-carbon'
import baseConfig from 'vitepress-carbon/config'

export default defineConfigWithTheme<ThemeConfig>({
  extends: baseConfig,
  title: "UCT Tutorials",
  description: "Undertale Changer Template Tutorials",
  srcDir: 'src',
  base: '/UCT-Tutorials/',

  themeConfig: {
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
    sidebar: [
      {
        text: 'Introduction and Preparation',
        items: [
          { text: 'Foreword', link: '/01-Foreword' },
          { text: 'Install Unity and Rider', link: '/02-Install_Unity_And_Rider' }
        ]
      }
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/Bli-AIk/UCT-Tutorials' }
    ],
    search: { provider: 'local' }
  }
})
