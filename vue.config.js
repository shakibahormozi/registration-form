const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true
})
module.exports = {
  chainWebpack: config => {
    config.module.rules.delete("svg");
  },
  configureWebpack: {
    module: {
      rules: [
        {
         test: /\.svg$/,
         loader: 'vue-svg-loader', // `vue-svg` for webpack 1.x
        },
      ],
      //plugins: [new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/)]
    },
  }
};