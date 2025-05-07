---
outline: deep
title: 02-Install_Unity_And_Rider
sidebar: true
---

> [!WARNING] ⚠️ 你先别急
> **本页面正在施工，目前的内容为草稿，可能进行修改。**

<img src="/02/Head.png" alt="Head" style="width:50%; border-radius:16px; display: block; margin-left: auto; margin-right: auto;" />

---
# 安装 Unity 与 IDE
**UCT** 是一个基于 **Unity 国际版 2021.3.15f1** 开发的 Undertale 同人游戏模板。

或者，简单来说：**UCT** 是一个 **Unity 项目**，所以我们当然需要先 **安装 Unity** 才能使用它。

要开发 Unity 项目，你需要安装 **Unity Hub** 和 **Unity Editor**，并选择一个合适的 **IDE**（代码编辑器）作为开发工具。

本章节将带你一步步完成这些工具的安装。

## 目录
[[toc]]

## 教程概览

本节将介绍：

- **Unity 中国版 与 Unity 国际版** 的区别  
- **Unity Hub，Unity Editor 与 Unity Engine** 的区别  
- 如何获取 **国际版 Unity Hub** 安装包  
- 介绍常用 **IDE** 的安装与配置，并推荐使用 **Rider**。
- 如何导入**项目相关设置**，统一开发环境

准备好了吗？让我们开始吧。

## Unity 版本差异 
> [!WARNING] ⚠️ 注意嗷！
> 此处的内容对于 **中国大陆用户** 与 **中国港澳台地区用户** 而言，应当 **着重注意**。<br>
> 如果你是 **海外** 用户，可以跳过这部分内容，直接阅读 [**准备安装 Unity**](#准备安装-unity) 小节。

> 所以，Unity 还分中国版和国际版么？

答案是肯定的——Unity 分为 **中国版** 和 **国际版**，两者在服务与功能支持上 **存在差异**，混用容易出现 **兼容性问题**。

<img src="/02/Different.png" alt="Head" style="width:50%; border-radius:16px; display: block; margin-left: auto; margin-right: auto;" />


> [!WARNING] ⚠️ 警告！
> UCT 仅支持 **Unity 国际版 2021.3.15f1**，请务必使用该版本。

---

### 如何判断你是否安装了中国版 Unity？

**对于Unity Editor：**
- 查看你的 **Unity Editor** 版本号：如果版本号中包含  **“c1”、“c2” 等后缀**，那你很可能安装了**中国版的 Unity Editor**。

**对于Unity Hub：**
- 如果 Unity Hub 只能安装带有 **“c1” “c2”等后缀** 的版本，说明你使用的也是**中国版 Unity Hub**。

---

也许你认为你眼力很尖，也可能你动手能力很强，能直接去找**国际版官网**，但——
> [!CAUTION] ⛔ 劲爆尾杀（划
> 在 **中国大陆网络环境** 直接访问 Unity 官网时，可能默认跳转至 **中国版** 页面。<br>尽管你也可以在国际版官网下载unity，但在 **中国大陆/港澳台地区网络环境** 下，你下载到的 Unity Hub 和 Unity Editor 也可能是中国版。


**那么，如何安装Unity国际版呢？**
由于笔者对网络环境配置相关知识了解不多，此处的建议仅供参考：

- 请保证你全程处于 **国际互联网环境** 或 **科学上网环境** ，并确保在下一小节的教程中，访问的是 [Unity 国际版官网(unity.com)](https://unity.com/)（而非 unity.cn），并获取的是不包含 **“c1”、“c2” 等后缀** 的国际版资源。

如果你没有下载国际版资源的能力，推荐加入 [**UCT 官方 QQ 交流群**](http://qm.qq.com/cgi-bin/qm/qr?_wv=1027&k=wK7VVbI0VU8mPpG94nDLsHaLRbky5cMT&authKey=LQfQsHtXTqbrRdmhSgUtxesNz9UmiETjymrhJF%2BFT1pAiEy0HUxSfM%2Fx%2FsTdOUC%2F&noverify=0&group_code=289694657)，在 **群文件** 获取国际版 Unity Hub 安装包，以确保版本一致。

::: details ❔ 对此还有任何疑问么？
可以参考一下[这篇博客](https://blog.csdn.net/Blueberry124/article/details/146460097)（侵权删除）<br>
或者，可以在 UCT 的 [QQ群](http://qm.qq.com/cgi-bin/qm/qr?_wv=1027&k=wK7VVbI0VU8mPpG94nDLsHaLRbky5cMT&authKey=LQfQsHtXTqbrRdmhSgUtxesNz9UmiETjymrhJF%2BFT1pAiEy0HUxSfM%2Fx%2FsTdOUC%2F&noverify=0&group_code=289694657) / [Discord 服务器](https://discord.gg/xvYKa2pSN6) 中礼貌地进行询问。
:::

## 准备安装 Unity
在这一小节，我们就要去安装Unity了！<br>
让我们打开浏览器，进入 [unity.com](https://unity.com/)！（**一定要注意不是 unity.cn ！**）

你会看到这样的一个主页：

<img src="/02/UnityWeb0.png" alt="Head" style="display: block; margin: 0 auto;"/>

我们直接点Download就可以——然后，会进入这个页面：

<img src="/02/UnityWeb1.png" alt="Head" style="display: block; margin: 0 auto;"/>

哇塞，“全球最受欢迎的开发平台”（大嘘）触手可及啦——我们只要点一下这个下载键，然后！

<img src="/02/UnityWeb2.png" alt="Head" style="display: block; margin: 0 auto;"/>

我们得到了——Unity——Hub？

你可能会疑惑——Unity 我知道，但是——
- Unity **Hub** 是什么呢？
- Unity **编辑器** 又和 Unity 有什么区别呢？
- 你也许还看到过有人称 Unity 为 Unity **引擎** ——对啊，Unity 不是个 **“游戏引擎”** 吗？

我们在这里先简单解释一下这些概念。

---

### “Unity”到底是什么？
Unity 实际上由三个部分组成：**Unity Hub**、**Unity 编辑器** 和 **Unity 引擎**。

- **Unity Hub** 是一个用来管理 Unity 编辑器版本和项目的 **启动器**，你可以通过它安装、卸载不同版本的 **Unity 编辑器**，并管理你的项目。 **使用 Unity 开发，首先需要安装的就是 Unity Hub。** 
- **Unity 编辑器（Unity Editor）** 是用于游戏开发的 **编辑器软件**，提供了可视化界面、场景编辑等功能。  
- **Unity 引擎（Unity Engine）** 是负责游戏运行时功能的核心部分，它处理渲染、物理、动画、音频等系统。**它并不是一个软件，且实际上内嵌在 Unity 编辑器中，并在构建后的游戏中运作。**

> [!NOTE]🖊 简单来说就是：
>- Unity Hub 是用来下载和管理不同版本的 Unity 编辑器、启动开发环境的工具；
>- Unity 编辑器是你用来编辑游戏场景的地方；
>- Unity 引擎是游戏运行时背后的核心，负责处理游戏的渲染、物理引擎，等等。

在开发过程中，我们通过 Unity Hub 来下载、管理本地不同版本的 Unity 编辑器，以及管理本地的所有项目。
<br>当你在 Unity Hub 启动项目时，实际上是使用 Unity 编辑器打开了项目。

在游戏构建（导出）后，Unity 编辑器并不包含在内，只有 Unity 引擎的运行时 (Runtime) 部分被包含在内，确保游戏能够正常运行。

::: details ❔ 还搞不懂么，那我打个比方...
我们以 Minecraft 举例：
- Unity Hub 就像是 Minecraft 的启动器，负责下载和启动不同版本的游戏；
- Unity 编辑器则像 Minecraft 的一个“地图编辑器”软件，它帮助你设计和编辑游戏世界；
- 而 Unity 引擎就像 Minecraft 的核心运行时，它负责让游戏能够运行、渲染和交互。

通过这三者的组合，才能让你的游戏真正运行起来。
:::

> [!TIP] 💡 所以捏——
> 我们要先安装 Unity Hub，然后使用它安装 Unity Editor。这样，Unity 就装好了！

---

### 安装 Unity Hub

在刚刚，你应当已经下载好 **Unity Hub** 的安装包了——双击它，然后安装，就可以了！

*记住，你需要安装国际版的Unity Hub！*

<img src="/02/UnityWeb3.png" alt="Head" style="display: block; margin: 0 auto;"/>

安装唯一需要注意的点，就是 **最好安装在纯英文字符目录**，此外没什么好说的。
<br>如果你安装这块都搞不明白，可以洗洗睡了。

安装完后，打开 **Unity Hub**，你会看到这样的界面。

<img src="/02/UnityHub0.png" alt="Head" style="display: block; margin: 0 auto;"/>

是的。我们需要一个 **Unity 账号** 才能使用 Unity。

如果你之前有个账号的话，点一下**登录** (Sign in) 即可；
<br>如果没有账号，那就 **创建账号** (Create account)。

对于账号这里，自行注册登录即可，本教程不再赘述。
<br>Unity 国际版 和 中国版 账号可能可以互通——但我对此了解不多，所以各位自行斟酌吧。
<br>~~账号版本这块应该不会导致什么大问题吧家人们~~

---

之后我们就能看到 Unity Hub 的主页——就像这样。

<img src="/02/UnityHub1.png" alt="Head" style="display: block; margin: 0 auto;"/>

Unity Hub 中，我们常用的也就三个页面——

> [!TIP] 💡 我们仨
> - 项目 (Projects)：在这里打开你的任一 **Unity 项目**。
> - 安装量 (Installs)：在这里安装 **Unity Editor**。
> - 偏好设置 (Preferences)：在这里 **申请许可证**，修改 **安装路径** 与 **缓存目录**，<br>以及修改 Unity Hub 的**语言**。

唉，这时候你就要问了，我偏好设置搁哪呢——

<img src="/02/UnityHub2.png" alt="Head" style="display: block; margin: 0 auto;"/>

在这里，齿轮图标。

我们赶紧把它打开吧！到偏好设置里面改一下可是相当有必要的——**申请许可证**，修改 **安装路径** 与 **缓存目录**，都是很重要的事情——
<br>毕竟，没有许可证就打不开项目；不改安装路径，那么你的编辑器和项目就要狠狠地吃你的系统盘咯——对不对？

<img src="/02/UnityHub3.png" alt="Head" style="display: block; margin: 0 auto;"/>

在这里修改 Unity Hub 使用的语言。

<img src="/02/UnityHub4.png" alt="Head" style="display: block; margin: 0 auto;"/>

在这里设置许可证，免费的个人许可证完全就够用了。

<img src="/02/UnityHub5.png" alt="Head" style="display: block; margin: 0 auto;"/>

这里设置的是你从 Unity 新建项目的地址，建议改到系统盘之外。

<img src="/02/UnityHub6.png" alt="Head" style="display: block; margin: 0 auto;"/>

这里设置的是 Unity Editor 的地址，以及一些下载文件的地址——建议把它们也改到系统盘之外。

Unity Hub 的设置就完成了。接着——我们去安装 Editor！

---
### 安装Unity Editor

让我们点进 **安装量**，这里会显示本地安装的所有的 Unity Editor 版本——
<br>正如下图这样。我已经安装好了 **Unity Editor 2021.3.15f1**！

<img src="/02/UnityHub7.png" alt="Head" style="display: block; margin: 0 auto;"/>

哦，你那边应该还啥也没有呢。问题不大，你可以试试点一下这个 **“安装编辑器”** 按钮。
<br>然后问题就来了——

<img src="/02/UnityHub8.png" alt="Head" style="display: block; margin: 0 auto;"/>

这里有好多版本啊，但 2021 版只有这个——2021.3.45f1...?

请注意，这个版本并不是 **2021.3.15f1**。别看只是小版本号上的差异，但是这也可能会导致一些问题——至少之前有群友跟我反映过。
<br>而更改大版本，如2022版、2023版，甚至是Unity6——那更不行！鬼知道你用那些版本会出什么问题——并且我也不会去做适配。_我觉得没什么必要。_

> [!IMPORTANT] 📍 切记切记
> 必须使用 **Unity Editor 2021.3.15f1**，无论是大版本号还是小版本号，都必须完全一致。

那我们如何去下载这个版本呢？其实也很简单——直接在你的浏览器里面访问这个地址：
```
unityhub://2021.3.15f1/e8e88683f834
```

<img src="/02/UnityHub9.png" alt="Head" style="display: block; margin: 0 auto;"/>

然后你就会看到类似这样的窗口弹出来，提示你从浏览器打开 Unity Hub。

<img src="/02/UnityHub10.png" alt="Head" style="display: block; margin: 0 auto;"/>

打开 Unity Hub 后，就会看到这个窗口出现啦——嗯，我们快搞定了。
<br>*你那边左上角显示的应该就是 **安装 Unity 2021.3.15f1**，
<br>~~只不过我装过这个版本了——所以我截图就先拿2021.3.45f1演示一下（~~*

这里有几个附加项可以选择。我会逐个解释。

---

#### Editor 附加项 - 开发工具 (IDE)

<img src="/02/UnityHub11.png" alt="Head" style="display: block; margin: 0 auto;"/>

在开发工具这一栏，标上了 **Visual Studio 2019**。
<br>倘若你勾选上它并安装 Unity Editor，那么 Unity Hub 会帮你捆绑安装 **VS2019**。
<br>**VS2019**，就是我们后文要讲到的 **IDE**—— 也就是你敲代码的东西——的众多选择**之一**。

我特别强调了：它是众多选择**之一**。并且，它不是我最推荐的 **IDE**。我在下文会解释原因。
<br>所以，如果你想选其他的IDE，就不要勾选它。IDE只装一个就可以。

#### Editor 附加项 - 平台

<img src="/02/UnityHub12.png" alt="Head" style="display: block; margin: 0 auto;"/>

如果你想导出你的 Unity 项目到 Android, Mac, Linux... 你就需要安装对应的平台附加项。
<br>在这里，根据你的需要安装就可以——但我得事先说明，UCT还没有经过多平台适配。
<br>如果你想给自己的项目导出多平台，理论上可以，但是你得做一些自己的适配调整。
<br>在这方面我无法提供帮助，_~~不过大伙要是能整可以来帮帮我~~_

> [!TIP] 💡 哦对了
> 你可以不安装任何平台附加项。导出exe文件是默认的选择，不需要任何附加项。
> <br>如果你想日后再安装平台附加项，也很简单——直接在 Unity Hub 中选择 “添加模块” 就行了。
> <img src="/02/UnityHub15.png" alt="Head" style="display: block; margin: 0 auto;"/>
> 如图所示。

#### Editor 附加项 - 语言包

<img src="/02/UnityHub13.png" alt="Head" style="display: block; margin: 0 auto;"/>

安装对应的语言包后，才能更改Unity Editor的显示语言。
<br>对于非英语母语者来说，这里的选择很有必要，对吧？
<br>根据你的需要来选择安装吧。

#### Editor 附加项 - 文档

<img src="/02/UnityHub14.png" alt="Head" style="display: block; margin: 0 auto;"/>

勾选这个选项后会安装一份 Unity 本地文档。
<br>...但我觉得看在线文档就够用了——这玩意儿占七百MB的空间，我觉得也不合适。
<br>不管怎样，还是根据你的需要来选择安装吧。

_哦，你问我在线文档网址搁哪？第一章不是写了么？(Unity 脚本 API, Unity 手册)_

---
挑选完你需要的附加项后，你就可以直接安装了。
<br>Unity Editor 这一步就算搞定啦——_至少安装这块儿搞定了。_

下载、安装 Unity Editor 还是挺耗时间的...
<br>在这段时间里，我们为何不想想，之后用什么 **IDE** 敲代码呢？

---

### 选择合适的 IDE

Unity 支持以下几种主流的代码编辑器，你可以根据自己的需求进行选择：

| 编辑器             | 特点说明                                        |
|------------------|---------------------------------------------|
| Visual Studio    | 功能强大、调试能力优秀，是官方推荐编辑器之一。<br>但启动速度较慢，占用资源相对较高 |
| Visual Studio Code | 轻量、灵活、跨平台，插件生态丰富。                           |
| **Rider（推荐）** | 启动较快，代码补全与重构功能强，Unity 支持良好，**非商业用途免费**        |

三者都可以正常配合 Unity 使用，但我个人一直在用 **Rider**，也 **非常推荐你使用 Rider**。
<br>本教程就是 **基于 Rider 编写和讲解的**，在下文中，我也会教你如何使用我为你准备的 Rider 项目设置文件。
<br>如果你今后打算参与 UCT 的开发、或者提交代码贡献，那最好也使用 Rider ——

**统一开发环境，能给大家省下很多沟通成本。**

---

### Rider 的安装方式

> [!WARNING] ⚠️ 你先别急
> **以下内容尚未撰写完成。**

1. 前往 [JetBrains 官网](https://www.jetbrains.com/rider/) 或使用 JetBrains Toolbox 安装  
2. 安装完成后，首次启动可选择导入设置  
3. 建议导入 **UCT 推荐的代码风格配置**  
4. 安装插件

---

### Rider 功能性插件推荐
| 插件名称                    | 功能简述                             |
| ----------------------- |----------------------------------|
| .ignore                 | 管理 `.gitignore` 忽略文件，提升版本控制效率    |
| CodeGlance Pro          | 在编辑器右侧显示代码缩略图，便于快速定位和导航          |
| Heap Allocations Viewer | 查看 C# 代码中的堆分配情况，辅助性能分析和优化        |
| Key Promoter X          | 在使用菜单操作时提示对应快捷键，帮助你养成快捷键使用习惯     |
| SonarQube for IDE       | 集成 SonarQube 静态代码分析工具，提供代码质量报告和建议 |

强烈建议你安装以上全部插件。

## 配置完成后

至此，**Unity 与 Rider 的安装与基础配置已完成**。  
建议确认：

- 是否成功打开 Unity Editor 并加载空项目  
- Rider 是否正确识别 Unity 项目并提供语法补全、跳转等功能  
- 编辑器路径是否指向国际版 Unity 2021.3.15f1


## 下一步

在下一章节中，我们将讲解如何下载 UCT 模板、配置 Git 环境，以及如何进行基本的版本管理。这将有助于在开发过程中：

- **追踪更改记录**  
- **快速回滚错误版本**  
- **多人协作开发**

敬请期待。