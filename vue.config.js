module.exports = {
  publicPath: '/rhymakr/',
  css: {
    loaderOptions: {
      scss: {
        prependData: `
        @import "@/styles/global.scss";
        `,
      },
    },
  },
};
