# Polish 官網

## Build Setup

```bash
# 安裝
$ npm install

# 開啟 dev-server localhost:3000
$ npm run dev

# 打包並開啟預覽 (server mode 專用，目前並無使用)
$ npm run build
$ npm run start

# 生成靜態頁面 （static mode 專用，目前使用）
$ npm run generate

# 部署靜態頁面到 gh-pages
$ npm run deploy
```

For detailed explanation on how things work, check out [Nuxt.js docs](https://nuxtjs.org).

## Folder Structure

- 基於 Nuxt 的官網前端資料夾結構

- 目前使用 Nuxt 的靜態生成模式(static mode, 可在 nuxt.config.js 裡切換)，並部署到 gh-pages

```
root
├── static                        // 不會經過編譯的靜態資源 (CNAME, favicon 等等)
├── assets                        // 會經過 webpack 編譯的資源
│   ├── images                    // 圖片
│   └── scss                      // 樣式
│       ├── _general.scss         // 通用
│       ├── _page-work.scss       // 作品內頁
│       └── _variable.scss        // 變數
├── pages                         // nuxt 路由頁面
│   ├── index.vue                 // 首頁
│   └── work                      // 作品
│       ├── index.vue             // 作品總覽
│       ├── legere.vue            // 作品內頁_里格
│       ├── rawnfresh.vue         // 作品內頁_沙西米
│       ├── real-estate.vue       // 作品內頁_租賃系統
│       ├── shiftstudioco.vue     // 作品內頁_轉轉
│       ├── trans.vue             // 作品內頁_trans
│       └── wassup.vue            // 作品內頁_貓砂
├── components                    // vue 元件
│   ├── Navbar.vue                // 導覽列
│   ├── Loader.vue                // 載入
│   ├── About.vue                 // 關於我們
│   ├── Service.vue               // 服務範圍
│   ├── Footer.vue                // 頁尾
│   ├── HeaderHome.vue            // 首頁_互動Header
│   ├── FeatureWork.vue           // 作品總覽_作品列表
│   ├── FeatureWorkCard.vue       // 作品總覽_作品列表_作品卡牌
│   ├── Members.vue               // 作品總覽_成員
│   ├── HeaderWork.vue            // 作品內頁_Header
│   ├── FullWidthImage.vue        // 作品內頁_全幅寬圖片
│   ├── Paragraph.vue             // 作品內頁_段落
│   ├── ParagraphImage.vue        // 作品內頁_段落圖片
│   ├── Quote.vue                 // 作品內頁_引述
│   ├── SeeMore.vue               // 作品內頁_了解更多
│   ├── Spacer.vue                // 作品內頁_空格元件
│   └── TechScope.vue             // 作品內頁_技術範圍
├── layouts
│   └── default.vue               // nuxt default layout
├── middleware                    // nuxt 中間件（目前無使用）
├── store                         // vuex store（目前無使用）
├── plugins                       // nuxt 插件
│   └── ga.js                     // GA 設定
├── nuxt.config.js                // nuxt 配置
├── package-lock.json
└── package.json
```
