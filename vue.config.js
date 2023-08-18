const { defineConfig } = require('@vue/cli-service');
module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: process.env.NODE_ENV === 'production' ? '/' : '/',
  css: {
    sourceMap: true,
  },
  pwa: {
    workboxPluginMode: 'InjectManifest',
    workboxOptions: {
      swSrc: './src/service-worker.js',
    },
    manifestOptions: {
      name: 'Figure Skating Calc',
      short_name: 'FSK8',
      background_color: '#a65cf0',
      themeColor: '#a65cf0',
      lang: 'ru-ru',
    },
  },
});
