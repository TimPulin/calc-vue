const { defineConfig } = require('@vue/cli-service');
module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: process.env.NODE_ENV === 'production' ? 'cacl-vue-1' : '/',
  css: {
    loaderOptions: {
      sass: {
        additionalData: `@import '@/assets/styles/utils/_vars.scss';`,
      },
    },
  },
});
