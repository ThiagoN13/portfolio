import axios from 'axios'

export default {
  server: {
    // host: '0.0.0.0',
    // port: process.env.PORT || 3000
  },
  /*
  ** Nuxt rendering mode
  ** See https://nuxtjs.org/api/configuration-mode
  */
  mode: 'universal',
  /*
  ** Nuxt target
  ** See https://nuxtjs.org/api/configuration-target
  */
  target: 'server',
  /*
  ** Headers of the page
  ** See https://nuxtjs.org/api/configuration-head
  */
  head: {
    title: 'Thiago Nogueira',
    htmlAttrs: {
      lang: 'pt-br'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ],
    script: []
  },

  /*
  ** Plugins to load before mounting the App
  ** https://nuxtjs.org/guide/plugins
  */
  plugins: [
  ],
  /*
  ** Auto import components
  ** See https://nuxtjs.org/api/configuration-components
  */
  components: true,
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxtjs/gtm',
    '@nuxtjs/axios',
    // '@nuxtjs/sitemap',
    '@nuxtjs/robots'
  ],

  // axios: {
  //   baseURL: process.env.DOMAIN_URL
  // },

  // sitemap: {
  //   cacheTime: 1000 * 60 * 60 * 24,
  //   gzip: true,
  //   hostname: process.env.DOMAIN_URL,
  //   routes: async () => {
  //     const { data = [] } = await axios.get(`${process.env.DOMAIN_URL}/api/posts`)

  //     return data.map(post => '/blog/article/' + post.fields.slug)
  //   }
  // },

  gtm: {
    id: 'GTM-KMB22HR'
  },

  /*
  ** Global CSS
  */
  css: [
    'bootstrap/dist/css/bootstrap.min.css',
    '@fortawesome/fontawesome-free/css/all.min.css'
  ],

  plugins: [
    { src: '~plugins/bootstrap.js', mode: 'client' }
  ],

  serverMiddleware: ["~api/index.js"]
}
