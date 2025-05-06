---
outline: deep
title: 01-Foreword
sidebar: true
---

<img src="/01/Head.png" alt="Head" style="width:50%; border-radius:16px; display: block; margin-left: auto; margin-right: auto;" />

---
# 前言

歡迎！這裡是 UCT 官方教學檔案的第一章。

本檔案是以 **UCT v1.0.7** 為基礎編寫。

![FullLogo](/01/FullLogo.png)

## 目錄
[[toc]]

## 教學大綱

本教學旨在詳細介紹 **Undertale Changer Template**（以下簡稱為 UCT） 的基本概念、優勢，以及如何快速上手。

**UCT** 是一款基於 **Unity 引擎**，採用 **通用渲染管線**（URP） 的，針對 **Undertale 同人遊戲** 所設計，面向 **完整流程開發** 或 **風格化製作** 的 **二次創作模板**。其設計目的在於滿足專案中對 **全流程遊戲製作**、**3D 效果**、**Live2D 支援** 等進階功能的需求。

其主要特色包括：

- **基於 Unity 引擎**
- **支援 2D 光影與 3D 模型**
- **完全開源**（遵循 **GNU GPLv3** 授權條款，詳見[**使用授權、商業用途與著作權聲明**](https://github.com/Bli-AIk/Undertale-Changer-Template/blob/main/LICENSE_MONETIZATION_AND_COPYRIGHT_NOTICE_zh-CN.md)）
- **支援社群擴充**
- **完善的在地化功能**

> [!WARNING] ⚠️ 但請先好好想想……
> 若您僅打算製作 **單一戰鬥或簡單場景**，那麼 UCT 可能並非最佳選擇——此情況下，您或許更適合使用 [**Undertale Engine**](https://github.com/TML233/UndertaleEngine) 或 [**Create Your Frisk**](https://github.com/RhenaudTheLukark/CreateYourFrisk) 這類專案。

但如果您希望突破傳統框架，體驗 **完整流程製作** 或 **風格化開發**，那麼 UCT 無疑能為您帶來更具吸引力的解決方案。

## 使用需求

在使用 UCT 之前，建議您具備以下基礎知識：

- **C# 程式語言基礎**
- **Unity 引擎基本操作**
- **遊戲設計模式**（非必要，但有幫助）
- **Git 基礎操作**（可選）

本教學在必要時，將對部分 C# 與 Unity 的核心概念（如介面、協程等）進行簡要說明，或提供參考資料連結。  
但我仍然強烈建議您在開始本教學之前，先建立對 C# 和 Unity 的基本理解，才能更順利掌握後續內容。

至於 UCT 中使用到的遊戲設計模式，相關說明將根據教學進度適時補充，或提供外部參考資料。  
Git 的基本操作將在後續章節中單獨講解。

## 基礎學習資源推薦

若您尚未具備 **C# 或 Unity 的基礎知識**，可參考以下網路資源：

> [!TIP] 💡 對了
> 以下資源來自網路，如有侵權請告知刪除。

- [C# 教學 | 菜鳥教學](https://www.runoob.com/csharp/csharp-tutorial.html)
- [C# 基礎 + WinForms 入門 | 哔哩哔哩](https://b23.tv/rpI6nBe)
- [Unity2D 官方入門教學 Ruby 的冒險 完整版 | 哔哩哔哩](https://b23.tv/fjuYzLz)
- [Git 教學 | 菜鳥教學](https://www.runoob.com/git/git-tutorial.html)

## 常用網站推薦

在 Unity 相關開發過程中，若遇到問題可參考以下網站：

- [Unity 腳本 API](https://docs.unity.cn/cn/2021.3/ScriptReference/index.html)
- [Unity 手冊](https://docs.unity.cn/cn/2021.3/Manual/index.html)
- [URP 通用渲染管線文件](https://docs.unity3d.com/cn/Packages/com.unity.render-pipelines.universal@12.1/manual/index.html)

## 教學目標與內容

本系列教學的主要目標是引導您了解 **UCT** 的 **創作理念** 與 **使用方式**，為未來的開發建立穩固基礎。

主要內容包括：

- **原作解析**：分析 Undertale 的核心元素，說明 UCT 如何支援完整流程的開發思路。
- **場景模組說明**：包含 Overworld、Battle、設定畫面等多種模組的詳細介紹。
- **開發實作與擴充**：示範如何使用模板內建功能進行開發——從解謎場景、劇情對話，到怪物與 Boss 戰鬥。

您可依照需求選擇完整學習或只選擇部分章節進行參考。

## 學習建議

- **若您傾向開發小型專案**：請考慮使用 [**Undertale Engine**](https://github.com/TML233/UndertaleEngine) 或 [**Create Your Frisk**](https://github.com/RhenaudTheLukark/CreateYourFrisk) 等框架，而非 UCT。
- **若您是初學者**：建議先學習基礎知識再深入研究本教學。
- **若您已有程式基礎**：本教學將會更容易理解與實作。

> [!NOTE] 🖊 思考一下
> 請您認真思考：**您準備好打破常規、迎接挑戰了嗎？**

如果答案是肯定的，那就讓我們一起深入學習，探索如何運用 UCT 創作出嶄新且富有藝術性的作品。

期待在接下來的章節與您共同進步。
