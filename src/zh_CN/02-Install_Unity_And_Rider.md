---
outline: deep
title: 02-Install_Unity_And_Rider
sidebar: true
---

# 安装 Unity 与 Rider

## 教程概览

本节将介绍：

- **Unity 中国版与国际版** 的区别
- **Unity Hub 与 Editor** 的关系
- 如何获取 **国际版 Unity Hub** 安装包
- 推荐使用 **Rider** 作为 IDE，并讲解其安装与配置方式
- 如何导入项目相关设置，统一开发环境

## Unity 的版本选择

在正式开始前，需要特别注意：

Unity 分为 **中国版** 和 **国际版**，两者在服务与功能支持上存在差异。

UCT 仅支持 **Unity 国际版 2021.3.15f1**，请务必使用该版本，避免出现兼容性问题。

在中国大陆环境直接访问 Unity 官网时，可能默认跳转至中国版页面。即使你确实是在国际版官网下载unity，下载到的 Hub 和 Editor 也可能是中国版。

因此：
- 如果你有科学上网的手段，建议全程使用科学上网环境访问 Unity 官网，以确保获取的是国际版资源。
- **推荐加入 UCT 官方交流群** 获取国际版 Hub 安装包，以确保版本一致。

在安装Unity Editor时，请注意版本号后是否包含“c1”“c2”等字样。如果有，则你很可能安装了**中国版**的 **Unity Hub** 和 **Unity Editor**。

## 安装 Unity Hub 与 Editor

要安装 Unity 编辑器，首先需要安装 **Unity Hub**。可以将 Unity Hub 理解为类似 Minecraft 的启动器，而 Unity Editor 则是具体的运行版本。

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
