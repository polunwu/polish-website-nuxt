export default {
  meta: [
    {
      hid: 'description',
      name: 'description',
      content:
        '磨人設計 POLISH DESIGN 成立於2020年，作品橫跨品牌規劃、網頁設計、網站系統解決方案，我們喜歡有心意的設計、微互動、拉麵 🍜。' ||
        process.env.npm_package_description,
    },
    // og
    {
      hid: 'og:title',
      property: 'og:title',
      content: '磨人設計 | Polish Design',
    },
    {
      hid: 'og:description',
      property: 'og:description',
      content:
        'POLISH DESIGN 成立於2020年，作品橫跨品牌規劃、網頁設計、網站系統解決方案，我們喜歡有心意的設計、微互動、拉麵 🍜。',
    },
    {
      hid: 'og:image',
      property: 'og:image',
      content:
        'https://storage.googleapis.com/polish-design.com.tw/og-image.jpg',
    },
    {
      hid: 'og:image:width',
      property: 'og:image:width',
      content: '1200',
    },
    {
      hid: 'og:image:height',
      property: 'og:image:height',
      content: '630',
    },
    {
      hid: 'og:url',
      property: 'og:url',
      content: 'https://polish-design.com.tw/',
    },
    {
      property: 'og:video',
      content:
        'https://storage.googleapis.com/polish_shop_bucket/polish-man-compressed.mp4',
    },
    {
      property: 'og:video:secure_url',
      content:
        'https://storage.googleapis.com/polish_shop_bucket/polish-man-compressed.mp4',
    },
    {
      property: 'og:video:type',
      content: 'video/mp4',
    },
    {
      property: 'og:video:width',
      content: '480',
    },
    {
      property: 'og:video:height',
      content: '270',
    },
    { property: 'og:type', content: 'website' },
    { property: 'og:site_name', content: 'POLISHDESIGN' },
    { property: 'og:locale', content: 'zh_tw' },
    // twitter
    { property: 'twitter:card', content: 'summary_large_image' },
    {
      hid: 'twitter:title',
      property: 'twitter:title',
      content: '磨人設計 | Polish Design',
    },
    {
      hid: 'twitter:description',
      property: 'twitter:description',
      content:
        'POLISH DESIGN 成立於2020年，作品橫跨品牌規劃、網頁設計、網站系統解決方案，我們喜歡有心意的設計、微互動、拉麵 🍜。',
    },
    {
      hid: 'twitter:image',
      property: 'twitter:image',
      content:
        'https://storage.googleapis.com/polish-design.com.tw/og-image.jpg',
    },
    // fb
    {
      property: 'fb:admins',
      content: 'polishdesigntw',
    },
    // favicon
    {
      name: 'msapplication-TileColor',
      content: '#000000',
    },
    {
      name: 'theme-color',
      content: '#000000',
    },
  ],
  link: [
    { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '16x16',
      href: '/favicon-16x16.png',
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '32x32',
      href: '/favicon-32x32.png',
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '192x192',
      href: '/android-chrome-192x192.png',
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '512x512',
      href: '/android-chrome-512x512.png',
    },
    {
      rel: 'apple-touch-icon',
      sizes: '180x180',
      href: '/apple-touch-icon.png',
    },
    {
      rel: 'manifest',
      href: '/site.webmanifest',
    },
    {
      rel: 'mask-icon',
      href: '/safari-pinned-tab.svg',
      color: '#333333',
    },
  ],
}
