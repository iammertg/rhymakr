module.exports = {
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
