const path = require('path')
const PrerenderSPAPlugin = require('prerender-spa-plugin')

module.exports = {
  css: {
    loaderOptions: {
      scss: {
        prependData: `
          @import "@/assets/styles/variables";
        `
      }
    }
  },
  pwa: {
    workboxPluginMode: 'InjectManifest',
    workboxOptions: {
      swSrc: 'src/service-worker.js',
      exclude: [/\.map$/, /_redirects/],
    }
  },
  configureWebpack: () => {
    if (process.env.NODE_ENV !== 'production') return;
    return {
      plugins: [
        new PrerenderSPAPlugin({
          staticDir: path.resolve(__dirname, 'dist'),
          routes: ['/', '/quiz']
        }),
      ]
    }
  }
};