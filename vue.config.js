const marked = require("marked")
const renderer = new marked.Renderer()

module.exports = {
    chainWebpack: config => {
      config.module
        .rule('vue')
        .use('vue-loader')
        .loader('vue-loader')
        .tap(options => {
          options['transformAssetUrls'] = {
            img: 'src',
            image: 'xlink:href',
            'b-img': 'src',
            'b-img-lazy': ['src', 'blank-src'],
            'b-card': 'img-src',
            'b-card-img': 'src',
            'b-card-img-lazy': ['src', 'blank-src'],
            'b-carousel-slide': 'img-src',
            'b-embed': 'src'
          }
  
          return options
        }),
      config.module
        .rule('md')
        .test(/\.md$/)
        .use('markdown-loader')
        .loader('markdown-loader')
        .loader('html-loader')
        .options({
          pedantic: true,
          renderer
        })
    }
  }