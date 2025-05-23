---
outline: deep
title: 03-Configure_Git_And_Download_UCT
sidebar: true
---

> [!WARNING] ⚠️ 你先别急
> **本页面正在施工，目前的内容为草稿，可能进行修改。**

<img src="/03/Head.png" alt="Head" style="width:50%; border-radius:16px; display: block; margin-left: auto; margin-right: auto;" />

> [!WARNING] ⚠️ 你先别急
> **以下内容尚未撰写完成。**

---

# 配置 Git 与下载 UCT
在使用 UCT 进行开发之前，配置好 Git 版本管理工具是非常重要的一步。

Git 不仅能帮助你像给游戏读存档一样方便地管理项目版本，还能让你轻松获取最新更新。

如果你想，你还可以对UCT进行贡献——提交/修复Bug，甚至是参与到UCT本体的开发中。

如果你不熟悉 Git 或 GitHub，不用担心，接下来的内容会一步一步教你如何安装和使用这些工具。

## 目录
[[toc]]

## 教程概览

本章节将介绍：

- **Git 在版本管理中的作用**
- 为什么 UCT 推荐使用 Git，而非直接下载压缩包
- **Git 与 GitHub Desktop 的安装与使用**
- 如何克隆 UCT 仓库（包括命令行与图形界面方式）
- **UCT 仓库结构与关键文档说明**
- 如何参与开发与获取社区支持

## 为什么要使用 Git？

你可能会疑惑：**“为什么不直接下载 ZIP 包？”**  
虽然下载压缩包看起来更简单，但它有一些明显的缺点：

- **无法自动获取最新更新**，每次都需要手动重新下载最新版本
- **无法切换不同版本**（比如稳定版 `main` 和开发版 `develop`）
- **不支持版本回滚**，如果误删文件，也难以恢复
- **无法参与代码贡献**，没有版本管理的支持

相比之下，使用 **Git** 可以带来许多优势：

- 实时同步项目的最新更新
- 轻松切换到旧版本或不同的开发分支
- 快速回滚错误操作
- 支持多人协作和提交 Pull Request 进行代码贡献

因此，**UCT 强烈推荐使用 Git 来管理项目**，这样你不仅能更高效地获取更新，还能方便地与其他开发者协作。

## Git 与 GitHub Desktop 的安装

### 安装 Git

1. 前往 [Git 官网](https://git-scm.com) 下载并安装 Git
2. 如果遇到网络问题，也可以通过 **UCT 官方交流群** 获取 Git 安装包
3. 安装完成后，在命令行中输入 `git --version` 检查是否安装成功

### 安装 GitHub Desktop（推荐可视化操作）

1. 前往 [GitHub Desktop 官网](https://desktop.github.com) 下载并安装
2. 虽然没有官方中文版，但可以通过 **UCT 群文件**获取社区汉化版
3. 安装后，首次使用需要登录 GitHub 账号

## 克隆 UCT 项目

### 注册与 Fork（用于贡献代码）

如果你希望参与开发或提交代码贡献，可以按以下步骤操作：

1. 注册一个 GitHub 账号
2. 前往 [UCT 仓库](https://github.com/用户名/UCT)
3. 点击 **Fork** 按钮，将仓库复制到你的 GitHub 账号下
4. 后续操作建议基于 fork 后的仓库进行，以便提交自己的修改和改进

### 使用 GitHub Desktop 克隆项目

1. 在 GitHub 仓库页面点击 **Code > Open with GitHub Desktop**
2. 选择保存项目的本地路径
3. 克隆完成后，可以在本地打开项目并开始开发

### 使用命令行克隆项目（进阶）

```bash
git clone https://github.com/Bli-AIk/Undertale-Changer-Template.git
```

如需切换至开发分支：

```bash
git checkout develop
```


## 分支说明与文件结构

### 分支区别

- `main`：**主分支**，适合初学者和正式项目开发
- `develop`：**开发分支**，包含最新的实验性功能，可能不太稳定

根据你的需求，选择适合的分支：

- 初学者：建议使用 `main` 分支
- 希望参与测试或贡献代码的开发者：可以选择 `develop` 分支

### 重要文档文件

请务必阅读以下文件，了解项目结构和开发背景：

- **`README.md`**：项目介绍，包含依赖项（如 DOTween、高级协程）等信息
- **`changelog.md`**：记录每个版本的更新日志，帮助你了解修复和新增的内容
- **`plan.md`**：展示未来的开发规划与待实现功能，供贡献者参考

## 克隆完成后检查

- 确保项目文件完整，无丢失或错误
- 检查 Unity 是否能正确识别并打开项目
- 如遇到 Git 安装异常或文件缺失，建议重新操作或查看 FAQ
- 如遇到问题，可随时加入 **UCT 官方交流群** 获取帮助

## 下一步

至此，UCT 已成功下载并完成版本管理配置。  
下一章节将介绍项目的结构与如何首次运行项目，帮助你顺利开始实际开发工作。
