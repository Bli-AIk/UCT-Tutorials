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
          text: '关于此教程',
          items: [
            { text: '00-写在正式开始前的话', link: '/zh_CN/00-Before_We_Officially_Begin' }
          ]
        },
        {
          text: '引言与准备',
          items: [
            { text: '01-前言', link: '/zh_CN/01-Foreword' },
            { text: '02-安装 Unity 与 IDE', link: '/zh_CN/02-Install_Unity_And_IDE' },
            { text: '03-配置 Git 与 下载 UCT', link: '/zh_CN/03-Configure_Git_And_Download_UCT' },
            { text: '04-解构原作', link: '/zh_CN/04-Deconstruct_Undertale' }
          ]
        },
        {
          text: 'Overworld 系统',
          items: [
            { text: '05-Overworld 概述', link: '/zh_CN/05-Overworld_Overview' },
            { text: '06-玩家状态机与玩家数据', link: '/zh_CN/06-Player_StateMachine_And_Data' },
            { text: '07-背包系统', link: '/zh_CN/07-Inventory_System' },
            { text: '08-新建场景', link: '/zh_CN/08-Create_New_Scene' },
            { text: '09-Overworld 事件系统', link: '/zh_CN/09-Overworld_Event_System' },
            { text: '10-语言包系统', link: '/zh_CN/10-Language_Pack_System' },
            { text: '11-UCT 的富文本系统', link: '/zh_CN/11-UCT_RichText_System' },
            { text: '12-追逐战', link: '/zh_CN/12-Chase' }
          ]
        },
        {
          text: 'Battle 系统',
          items: [
            { text: '13-Battle 概述', link: '/zh_CN/13-Battle_Overview' },
            { text: '14-配置敌人', link: '/zh_CN/14-Configure_Enemies' },
            { text: '15-编辑弹幕', link: '/zh_CN/15-Edit_Bullets' },
            { text: '16-编辑回合', link: '/zh_CN/16-Edit_Turns' },
            { text: '17-编辑魂心', link: '/zh_CN/17-Edit_Soul' }
          ]
        },
        {
          text: '杂项场景',
          items: [
            { text: '18-Settings 概述', link: '/zh_CN/18-Settings_Overview' },
            { text: '19-设置页面编写', link: '/zh_CN/19-Settings_Page_Creation' },
            { text: '20-其余简单场景概述', link: '/zh_CN/20-Other_Simple_Scenes_Overview' },
            { text: '21-Menu 场景', link: '/zh_CN/21-Menu_Scene' },
            { text: '22-Rename 场景', link: '/zh_CN/22-Rename_Scene' },
            { text: '23-Story 场景', link: '/zh_CN/23-Story_Scene' },
            { text: '24-Start 场景', link: '/zh_CN/24-Start_Scene' }
          ]
        },
        {
          text: '结语',
          items: [
            { text: '25-总结', link: '/zh_CN/25-Summary' }
          ]
        },
        {
          text: '贡献指南',
          items: [
            { text: '26-遇到问题可讨论', link: '/zh_CN/26-Discuss_Problems' },
            { text: '27-遇到BUG提Issue', link: '/zh_CN/27-Report_Bugs_Issue' },
            { text: '28-建议意见提Issue', link: '/zh_CN/28-Suggestions_Issue' },
            { text: '29-修复BUG提PR', link: '/zh_CN/29-Fix_Bugs_PR' },
            { text: '30-改进模板提PR', link: '/zh_CN/30-Improve_Template_PR' }
          ]
        }
      ],
      '/zh_TW/': [
        {
          text: '引言與準備',
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
