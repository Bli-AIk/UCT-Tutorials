import { defineConfigWithTheme } from 'vitepress'
import type { ThemeConfig } from 'vitepress-carbon'
import baseConfig from 'vitepress-carbon/config'

export default defineConfigWithTheme<ThemeConfig>({
    extends: baseConfig,
    title: "UCT 教程",
    description: "Undertale Changer Template 教学",

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
                text: '示例',
                items: [
                    { text: 'Markdown 示例', link: '/zh_CN/01-Foreword' },
                    { text: '运行时 API 示例', link: '/zh_CN/02-Install_Unity_And_Rider' }
                ]
            }
        ],
        socialLinks: [
            { icon: 'github', link: 'https://github.com/Bli-AIk/UCT-Tutorials' }
        ],
        search: { provider: 'local' }
    }
})
