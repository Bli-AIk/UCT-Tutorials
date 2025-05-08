outline: deep
title: 02-Install_Unity_And_Rider
sidebar: true

---

<img src="/02/Head.png" alt="Head" style="width:50%; border-radius:16px; display: block; margin-left: auto; margin-right: auto;" />

---
# 安裝 Unity 與 IDE
**UCT** 是一個基於 **Unity 國際版 2021.3.15f1** 開發的 Undertale 同人遊戲模板。

或者，簡單來說：**UCT** 是一個 **Unity 專案**，所以我們當然需要先 **安裝 Unity** 才能使用它。

要開發 Unity 專案，你需要安裝 **Unity Hub** 和 **Unity Editor**，並選擇一個合適的 **IDE**（程式碼編輯器）作為開發工具。

本章節將帶你一步步完成這些工具的安裝。

## 目錄
[[toc]]

## 教學概覽

本節將介紹：

- **Unity 中國版 與 Unity 國際版** 的區別  
- **Unity Hub，Unity Editor 與 Unity Engine** 的區別  
- 如何獲取 **國際版 Unity Hub** 安裝包  
- 介紹常用 **IDE** 的安裝與配置，並推薦使用 **Rider**。
- 如何匯入**專案相關設定**，統一開發環境

準備好了嗎？讓我們開始吧。

## Unity 版本差異 
> [!WARNING] ⚠️ 注意嗷！
> 此處的內容對於 **中國大陸用戶** 與 **中國港澳台地區用戶** 而言，應當 **著重注意**。<br>
> 如果你是 **海外** 用戶，可以跳過這部分內容，直接閱讀 [**準備安裝 Unity**](#準備安裝-unity) 小節。

> 所以，Unity 還分中國版和國際版麼？

答案是肯定的——Unity 分為 **中國版** 和 **國際版**，兩者在服務與功能支援上 **存在差異**，混用容易出現 **相容性問題**。

<img src="/02/Different.png" alt="Head" style="width:50%; border-radius:16px; display: block; margin-left: auto; margin-right: auto;" />


> [!WARNING] ⚠️ 警告！
> UCT 僅支援 **Unity 國際版 2021.3.15f1**，請務必使用該版本。

---

### 如何判斷你是否安裝了中國版 Unity？

**對於Unity Editor：**
- 查看你的 **Unity Editor** 版本號：如果版本號中包含  **「c1」、「c2」 等後綴**，那你很可能安裝了**中國版的 Unity Editor**。

**對於Unity Hub：**
- 如果 Unity Hub 只能安裝帶有 **「c1」 「c2」等後綴** 的版本，說明你使用的也是**中國版 Unity Hub**。

---

也許你認為你眼力很尖，也可能你動手能力很強，能直接去找**國際版官網**，但——
> [!CAUTION] ⛔ 勁爆尾殺（劃
> 在 **中國大陸網路環境** 直接訪問 Unity 官網時，可能預設跳轉至 **中國版** 頁面。<br>儘管你也可以在國際版官網下載unity，但在 **中國大陸/港澳台地區網路環境** 下，你下載到的 Unity Hub 和 Unity Editor 也可能是中國版。


**那麼，如何安裝Unity國際版呢？**
由於筆者對網路環境配置相關知識了解不多，此處的建議僅供參考：

- 請保證你全程處於 **國際互聯網環境** 或 **科學上網環境** ，並確保在下一小節的教學中，訪問的是 [Unity 國際版官網(unity.com)](https://unity.com/)（而非 unity.cn），並獲取的是不包含 **「c1」、「c2」 等後綴** 的國際版資源。

如果你沒有下載國際版資源的能力，推薦加入 [**UCT 官方 QQ 交流群**](http://qm.qq.com/cgi-bin/qm/qr?_wv=1027&k=wK7VVbI0VU8mPpG94nDLsHaLRbky5cMT&authKey=LQfQsHtXTqbrRdmhSgUtxesNz9UmiETjymrhJF%2BFT1pAiEy0HUxSfM%2Fx%2FsTdOUC%2F&noverify=0&group_code=289694657)，在 **群檔案** 獲取國際版 Unity Hub 安裝包，以確保版本一致。

::: details ❔ 對此還有任何疑問麼？
可以參考一下[這篇部落格](https://blog.csdn.net/Blueberry124/article/details/146460097)（侵權刪除）<br>
或者，可以在 UCT 的 [QQ群](http://qm.qq.com/cgi-bin/qm/qr?_wv=1027&k=wK7VVbI0VU8mPpG94nDLsHaLRbky5cMT&authKey=LQfQsHtXTqbrRdmhSgUtxesNz9UmiETjymrhJF%2BFT1pAiEy0HUxSfM%2Fx%2FsTdOUC%2F&noverify=0&group_code=289694657) / [Discord 伺服器](https://discord.gg/xvYKa2pSN6) 中禮貌地進行詢問。
:::

## 準備安裝 Unity
在這一小節，我們就要去安裝Unity了！<br>
讓我們打開瀏覽器，進入 [unity.com](https://unity.com/)！（**一定要注意不是 unity.cn ！**）

你會看到這樣的一個主頁：

<img src="/02/UnityWeb0.png" alt="Head" style="display: block; margin: 0 auto;"/>

我們直接點Download就可以——然後，會進入這個頁面：

<img src="/02/UnityWeb1.png" alt="Head" style="display: block; margin: 0 auto;"/>

哇塞，「全球最受歡迎的開發平台」（大噓）觸手可及啦——我們只要點一下這個下載鍵，然後！

<img src="/02/UnityWeb2.png" alt="Head" style="display: block; margin: 0 auto;"/>

我們得到了——Unity——Hub？

你可能會疑惑——Unity 我知道，但是——
- Unity **Hub** 是什麼呢？
- Unity **編輯器** 又和 Unity 有什麼區別呢？
- 你也許還看到過有人稱 Unity 為 Unity **引擎** ——對啊，Unity 不是個 **「遊戲引擎」** 嗎？

我們在這裡先簡單解釋一下這些概念。

---

### 「Unity」到底是什麼？
Unity 實際上由三個部分組成：**Unity Hub**、**Unity 編輯器** 和 **Unity 引擎**。

- **Unity Hub** 是一個用來管理 Unity 編輯器版本和專案的 **啟動器**，你可以通過它安裝、卸載不同版本的 **Unity 編輯器**，並管理你的專案。 **使用 Unity 開發，首先需要安裝的就是 Unity Hub。** 
- **Unity 編輯器（Unity Editor）** 是用於遊戲開發的 **編輯器軟體**，提供了可視化介面、場景編輯等功能。  
- **Unity 引擎（Unity Engine）** 是負責遊戲運行時功能的核心部分，它處理渲染、物理、動畫、音訊等系統。**它並不是一個軟體，且實際上內嵌在 Unity 編輯器中，並在建構後的遊戲中運作。**

> [!NOTE]🖊 簡單來說就是：
>- Unity Hub 是用來下載和管理不同版本的 Unity 編輯器、啟動開發環境的工具；
>- Unity 編輯器是你用來編輯遊戲場景的地方；
>- Unity 引擎是遊戲運行時背後的核心，負責處理遊戲的渲染、物理引擎，等等。

在開發過程中，我們通過 Unity Hub 來下載、管理本地不同版本的 Unity 編輯器，以及管理本地的所有專案。
<br>當你在 Unity Hub 啟動專案時，實際上是使用 Unity 編輯器打開了專案。

在遊戲建構（匯出）後，Unity 編輯器並不包含在內，只有 Unity 引擎的運行時 (Runtime) 部分被包含在內，確保遊戲能夠正常運行。

::: details ❔ 還搞不懂麼，那我打個比方...
我們以 Minecraft 舉例：
- Unity Hub 就像是 Minecraft 的啟動器，負責下載和啟動不同版本的遊戲；
- Unity 編輯器則像 Minecraft 的一個「地圖編輯器」軟體，它幫助你設計和編輯遊戲世界；
- 而 Unity 引擎就像 Minecraft 的核心運行時，它負責讓遊戲能夠運行、渲染和互動。

通過這三者的組合，才能讓你的遊戲真正運行起來。
:::

> [!TIP] 💡 所以捏——
> 我們要先安裝 Unity Hub，然後使用它安裝 Unity Editor。這樣，Unity 就裝好了！

---

### 安裝 Unity Hub

在剛剛，你應當已經下載好 **Unity Hub** 的安裝包了——雙擊它，然後安裝，就可以了！

*記住，你需要安裝國際版的Unity Hub！*

<img src="/02/UnityWeb3.png" alt="Head" style="display: block; margin: 0 auto;"/>

安裝唯一需要注意的點，就是 **最好安裝在純英文字元目錄**，此外沒什麼好說的。
<br>如果你安裝這塊都搞不明白，可以洗洗睡了。

安裝完後，打開 **Unity Hub**，你會看到這樣的介面。

<img src="/02/UnityHub0.png" alt="Head" style="display: block; margin: 0 auto;"/>

是的。我們需要一個 **Unity 帳號** 才能使用 Unity。

如果你之前有個帳號的話，點一下**登入** (Sign in) 即可；
<br>如果沒有帳號，那就 **建立帳號** (Create account)。

對於帳號這裡，自行註冊登入即可，本教學不再贅述。
<br>Unity 國際版 和 中國版 帳號可能可以互通——但我對此了解不多，所以各位自行斟酌吧。
<br>~~帳號版本這塊應該不會導致什麼大問題吧家人們~~

---

之後我們就能看到 Unity Hub 的主頁——就像這樣。

<img src="/02/UnityHub1.png" alt="Head" style="display: block; margin: 0 auto;"/>

Unity Hub 中，我們常用的也就三個頁面——

> [!TIP] 💡 我們仨
> - 專案 (Projects)：在這裡打開你的任一 **Unity 專案**。
> - 安裝量 (Installs)：在這裡安裝 **Unity Editor**。
> - 偏好設定 (Preferences)：在這裡 **申請授權證**，修改 **安裝路徑** 與 **快取目錄**，<br>以及修改 Unity Hub 的**語言**。

唉，這時候你就要問了，我偏好設定擱哪呢——

<img src="/02/UnityHub2.png" alt="Head" style="display: block; margin: 0 auto;"/>

在這裡，齒輪圖示。

我們趕緊把它打開吧！到偏好設定裡面改一下可是相當有必要的——**申請授權證**，修改 **安裝路徑** 與 **快取目錄**，都是很重要的事情——
<br>畢竟，沒有授權證就打不開專案；不改安裝路徑，那麼你的編輯器和專案就要狠狠地吃你的系統盤咯——對不對？

<img src="/02/UnityHub3.png" alt="Head" style="display: block; margin: 0 auto;"/>

在這裡修改 Unity Hub 使用的語言。

<img src="/02/UnityHub4.png" alt="Head" style="display: block; margin: 0 auto;"/>

在這裡設定授權證，免費的個人授權證完全就夠用了。

<img src="/02/UnityHub5.png" alt="Head" style="display: block; margin: 0 auto;"/>

這裡設定的是你從 Unity 新建專案的地址，建議改到系統盤之外。

<img src="/02/UnityHub6.png" alt="Head" style="display: block; margin: 0 auto;"/>

這裡設定的是 Unity Editor 的地址，以及一些下載檔案的地址——建議把它們也改到系統盤之外。

Unity Hub 的設定就完成了。接著——我們去安裝 Editor！

---
### 安裝Unity Editor

讓我們點進 **安裝量**，這裡會顯示本地安裝的所有的 Unity Editor 版本——
<br>正如下圖這樣。我已經安裝好了 **Unity Editor 2021.3.15f1**！

<img src="/02/UnityHub7.png" alt="Head" style="display: block; margin: 0 auto;"/>

哦，你那邊應該還啥也沒有呢。問題不大，你可以試試點一下這個 **「安裝編輯器」** 按鈕。
<br>然後問題就來了——

<img src="/02/UnityHub8.png" alt="Head" style="display: block; margin: 0 auto;"/>

這裡有好多版本啊，但 2021 版只有這個——2021.3.45f1...?

請注意，這個版本並不是 **2021.3.15f1**。別看只是小版本號上的差異，但是這也可能會導致一些問題——至少之前有群友跟我反映過。
<br>而更改大版本，如2022版、2023版，甚至是Unity6——那更不行！鬼知道你用那些版本會出什麼問題——並且我也不會去做適配。_我覺得沒什麼必要。_

> [!IMPORTANT] 📍 切記切記
> 必須使用 **Unity Editor 2021.3.15f1**，無論是大版本號還是小版本號，都必須完全一致。

那我們如何去下載這個版本呢？其實也很簡單——直接在你的瀏覽器裡面訪問這個地址：
```
unityhub://2021.3.15f1/e8e88683f834
```

<img src="/02/UnityHub9.png" alt="Head" style="display: block; margin: 0 auto;"/>

然後你就會看到類似這樣的視窗彈出來，提示你從瀏覽器打開 Unity Hub。

<img src="/02/UnityHub10.png" alt="Head" style="display: block; margin: 0 auto;"/>

打開 Unity Hub 後，就會看到這個視窗出現啦——嗯，我們快搞定了。
<br>*你那邊左上角顯示的應該就是 **安裝 Unity 2021.3.15f1**，
<br>~~只不過我裝過這個版本了——所以我截圖就先拿2021.3.45f1演示一下（~~*

這裡有幾個附加項可以選擇。我會逐個解釋。

---

#### Editor 附加項 - 開發工具 (IDE)

<img src="/02/UnityHub11.png" alt="Head" style="display: block; margin: 0 auto;"/>

在開發工具這一欄，標上了 **Visual Studio 2019**。
<br>倘若你勾選上它並安裝 Unity Editor，那麼 Unity Hub 會幫你捆綁安裝 **VS2019**。
<br>**VS2019**，就是我們後文要講到的 **IDE**—— 也就是你敲程式碼的東西——的眾多選擇**之一**。

我特別強調了：它是眾多選擇**之一**。並且，它不是我最推薦的 **IDE**。我在下文會解釋原因。
<br>所以，如果你想選其他的IDE，就不要勾選它。IDE只裝一個就可以。

#### Editor 附加項 - 平台

<img src="/02/UnityHub12.png" alt="Head" style="display: block; margin: 0 auto;"/>

如果你想匯出你的 Unity 專案到 Android, Mac, Linux... 你就需要安裝對應的平台附加項。
<br>在這裡，根據你的需要安裝就可以——但我得事先說明，UCT還沒有經過多平台適配。
<br>如果你想給自己的專案匯出多平台，理論上可以，但是你得做一些自己的適配調整。
<br>在這方面我無法提供幫助，_~~不過大夥要是能整可以來幫幫我~~_

> [!TIP] 💡 哦對了
> 你可以不安裝任何平台附加項。匯出exe檔案是預設的選擇，不需要任何附加項。
> <br>如果你想日後再安裝平台附加項，也很簡單——直接在 Unity Hub 中選擇 「新增模組」 就行了。
> <img src="/02/UnityHub15.png" alt="Head" style="display: block; margin: 0 auto;"/>
> 如圖所示。

#### Editor 附加項 - 語言包

<img src="/02/UnityHub13.png" alt="Head" style="display: block; margin: 0 auto;"/>

安裝對應的語言包後，才能更改Unity Editor的顯示語言。
<br>對於非英語母語者來說，這裡的選擇很有必要，對吧？
<br>根據你的需要來選擇安裝吧。

#### Editor 附加項 - 文件

<img src="/02/UnityHub14.png" alt="Head" style="display: block; margin: 0 auto;"/>

勾選這個選項後會安裝一份 Unity 本地文件。
<br>...但我覺得看在線文件就夠用了——這玩意兒佔七百MB的空間，我覺得也不合適。
<br>不管怎樣，還是根據你的需要來選擇安裝吧。

_哦，你問我在線文件網址擱哪？第一章不是寫了麼？(Unity 腳本 API, Unity 手冊)_

---
挑選完你需要的附加項後，你就可以直接安裝了。
<br>Unity Editor 這一步就算搞定啦——_至少安裝這塊兒搞定了。_

下載、安裝 Unity Editor 還是挺耗時間的...
<br>在這段時間裡，我們為何不想想，之後用什麼 **IDE** 敲程式碼呢？

---

### 選擇合適的 IDE

Unity 支援以下幾種主流的程式碼編輯器，你可以根據自己的需求進行選擇：

| 編輯器             | 特點說明                                       |
|------------------|--------------------------------------------|
| Visual Studio    | 功能強大、偵錯能力優秀，是官方推薦編輯器之一。<br>但啟動速度較慢，佔用資源相對較高 |
| Visual Studio Code | 輕量、靈活、跨平台，外掛生態豐富                           |
| **Rider（推薦）** | 啟動較快，程式碼補齊與重構功能強，Unity 支援良好，**非商業用途免費**       |

三者都可以正常配合 Unity 使用，但我個人一直在用 **Rider**，也 **非常推薦你使用 Rider**。
<br>本教學就是 **基於 Rider 編寫和講解的**，在下文中，我也會教你如何使用我為你準備的 Rider 專案設定檔案。
<br>如果你今後打算參與 UCT 的開發、或者提交程式碼貢獻，那最好也使用 Rider ——

**統一開發環境，能給大家省下很多溝通成本。**

---

### Rider 的安裝方式

我們有兩種方法來安裝 **Rider**。
<br>方法一是直接下載：訪問 [**JetBrains Rider 官網**](https://www.jetbrains.com/rider/)，直接下載安裝即可；
<br>方法二是使用 [**JetBrains Toolbox**](https://www.jetbrains.com/toolbox-app/)：這是一個用於管理 JetBrains 系列 IDE 和 工程檔案 的工具，功能上類似於 Unity Hub，但面向的是 JetBrains 的開發工具。

如果你還是不太清楚 Toolbox 有什麼用，看看下面這圖大概你就明白了。

<img src="/02/ToolBox0.png" alt="Head" style="display: block; margin: 0 auto;"/>

根據你的需要，選擇一種方式安裝 **Rider** 即可。

#### Rider 功能性外掛推薦

強烈建議你安裝以下全部外掛，都是非常實用的功能性外掛。
除此之外，可以按照你自己的喜好進行其他配置。

| 外掛名稱                    | 功能簡述                             |
| ----------------------- |----------------------------------|
| .ignore                 | 管理 `.gitignore` 忽略檔案，提升版本控制效率    |
| CodeGlance Pro          | 在編輯器右側顯示程式碼縮圖，便於快速定位和導航          |
| Heap Allocations Viewer | 查看 C# 程式碼中的堆分配情況，輔助效能分析和優化        |
| Key Promoter X          | 在使用選單操作時提示對應快捷鍵，幫助你養成快捷鍵使用習慣     |
| SonarQube for IDE       | 整合 SonarQube 靜態程式碼分析工具，提供程式碼品質報告和建議 |


#### 匯入專案設定

UCT 專案整體遵循 Rider 推薦的編碼風格和 SonarQube 的程式碼建議， 但在一些細節上可能有所不同。
<br>例如，我傾向於始終為 `if`、`for` 等控制結構添加花括號。
<br>你可以在 Rider 中選擇 「檔案 - 管理 IDE 設定 - 匯入設定」，然後載入 UCT 根目錄中的 `settings.zip` 檔案，以此匯入 UCT 的專案設定。
<br>這部分內容將在下一節教學中詳細講解。

---

## 結語

至此，**Unity 與 IDE 的安裝已完成**！我們已經做好一半的準備了。~~（大概吧~~

在下一章節中，我們將講解如何下載 **UCT 工程本體**、將 Unity Editor 和 Rider（或者其他IDE）**關聯**。
<br>你也可以學習到如何配置 **Git** 環境並進行基本的 **版本管理**。這將有助於在開發過程中追蹤更改記錄、快速回滾錯誤版本、甚至於多人協作開發。

稍後見咯。