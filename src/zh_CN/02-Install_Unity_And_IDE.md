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

## 教程概览

本节将介绍：

- **Unity 中国版 与 Unity 国际版** 的区别  
- **Unity Hub，Unity Editor 与 Unity Engine** 的区别  
- 如何获取 **国际版 Unity Hub** 安装包  
- 介绍常用 **IDE** 的安装与配置，并推荐使用 **Rider**。
- 如何导入**项目相关设置**，统一开发环境

准备好了吗？让我们开始吧。

## Unity 还分 中国版 和 国际版？
> [!WARNING] ⚠️ 注意嗷！
> 此处的内容对于 **中国大陆用户** 而言，应当 **着重注意**。<br>
> 如果你是 **港澳台/海外** 用户，可以跳过这部分内容，直接阅读 [**准备安装 Unity**](#准备安装-unity) 小节。

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
> 在 **中国大陆网络环境** 直接访问 Unity 官网时，可能默认跳转至 **中国版** 页面。<br>尽管你也可以在国际版官网下载unity，但在 **中国大陆网络环境** 下，你下载到的 Unity Hub 和 Unity Editor 也可能是中国版。


**那么，如何安装Unity国际版呢？**
- 如果你是 **港澳台/海外** 用户，或者全程使用 **科学上网环境** 的中国大陆用户，请确保在下一小节的教程中，访问的是 [Unity 国际版官网(unity.com)](https://unity.com/)（而非 unity.cn），以保证你获取的是国际版资源。
- 如果你没有下载国际版资源的能力，推荐加入 [**UCT 官方交流群**](http://qm.qq.com/cgi-bin/qm/qr?_wv=1027&k=wK7VVbI0VU8mPpG94nDLsHaLRbky5cMT&authKey=LQfQsHtXTqbrRdmhSgUtxesNz9UmiETjymrhJF%2BFT1pAiEy0HUxSfM%2Fx%2FsTdOUC%2F&noverify=0&group_code=289694657)，在 **群文件** 获取国际版 Unity Hub 安装包，以确保版本一致。

::: details ❔ 对此还有任何疑问么？
可以参考一下[这篇博客](https://blog.csdn.net/Blueberry124/article/details/146460097)（侵权删除）<br>
或者，可以在 UCT 的 QQ群 / Discord 服务器 中礼貌地进行询问。
:::

## 准备安装 Unity
在这一小节，我们就要去安装Unity了！<br>
让我们打开浏览器，进入 [unity.com](https://unity.com/)！（**一定要注意不是 unity.cn ！**）

你会看到这样的一个主页：

**IMAGE**


你可能会疑惑——Unity 我知道，但是——
- Unity Hub 是什么呢？
- Unity 编辑器又和 Unity 有什么区别呢？
- 你也许还看到过有人称 Unity 为 Unity **引擎**——对啊，Unity 不是个“游戏引擎”吗？

我们在这里先简单解释一下这些概念。

### “Unity”到底是什么？
Unity 实际上由三个部分组成：**Unity Hub**、**Unity 编辑器**和 **Unity 引擎**。

- **Unity Hub** 是一个用来管理 Unity 编辑器版本和项目的**启动器**，你可以通过它安装、卸载不同版本的 Unity 编辑器，并管理你的项目。 **使用 Unity 开发，首先需要安装的就是 Unity Hub。** 
- **Unity 编辑器（Unity Editor）** 是用于游戏开发的**编辑器软件**，提供了可视化界面、场景编辑等功能。  
- **Unity 引擎（Unity Engine）** 是负责游戏运行时功能的核心部分，它处理渲染、物理、动画、音频等系统。**它并不是一个软件，且实际上内嵌在 Unity 编辑器中，并在构建后的游戏中运作。**

简单来说：

- Unity Hub 是用来下载和管理不同版本的 Unity 编辑器、启动开发环境的工具；
- Unity 编辑器是你用来编辑游戏场景的地方；
- Unity 引擎是游戏运行时背后的核心，负责处理游戏的渲染、物理引擎，等等。

在开发过程中，我们通过 Unity Hub 下载并管理 Unity 编辑器，然后用编辑器进行游戏开发。当你启动项目时，Unity 编辑器会加载项目并进入编辑状态。

在游戏构建（导出）后，Unity 编辑器并不包含在内，只有 Unity 引擎的运行时部分被包含在内，确保游戏能够正常运行。

**举例说明：**  
我们以 Minecraft 举例：
- Unity Hub 就像是 Minecraft 的启动器，负责下载和启动不同版本的游戏；
- Unity 编辑器则像 Minecraft 的一个“地图编辑器”软件，它帮助你设计和编辑游戏世界；
- 而 Unity 引擎就像 Minecraft 的核心运行时，它负责让游戏能够运行、渲染和交互。

通过这三者的组合，才能让你的游戏真正运行起来。
### 安装Unity Hub 与 Unity Editor
安装步骤如下：

1. **下载安装国际版 Unity Hub**
2. 启动后登录 Unity 账号  
3. 申请个人许可证（Personal License）
4. 在设置中调整 **安装路径** 与 **缓存目录**，避免占用系统盘空间
5. 在“编辑器版本”页面中，下载并安装 **Unity Editor 2021.3.15f1**

### 安装时可选组件：

- **Android Build Support**：用于导出安卓包  
- **Documentation**：本地文档（可选）  
- **简体中文语言包**  
- 默认安装中可能包含 Visual Studio 2019，可选择不安装（如使用 Rider）


## 选择合适的 IDE：推荐使用 Rider

Unity 支持的主流代码编辑器有：

| 编辑器             | 特点说明                                       |
|------------------|----------------------------------------------|
| Visual Studio    | 功能强大但偏重，启动慢，占用资源高               |
| Visual Studio Code | 轻量灵活，但需要手动安装插件与配置               |
| **Rider（推荐）** | 启动快、补全强、集成度高，专为 Unity 优化，**非商业用途免费** |

### Rider 的安装方式：

1. 前往 [JetBrains 官网](https://www.jetbrains.com/rider/) 或使用 JetBrains Toolbox 安装  
2. 安装完成后，首次启动可选择导入设置  
3. 建议导入 **UCT 推荐的代码风格配置**  
4. 安装插件（如 Unity Support、C# Enhancements 等）提升开发效率


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