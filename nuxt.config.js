export default {
  loading: '~/components/Spinner.vue',
  // Target: https://go.nuxtjs.dev/config-target
  target: "static",

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "nuxt-social-ts",
    htmlAttrs: {
      lang: "en"
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" }
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      {
        rel: "stylesheet",
        type: "text/css",
        href:
          "https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/css/bootstrap.min.css"
      }
    ],
    script: [
      {
        src:
          "https://cdn.jsdelivr.net/npm/@popperjs/core@2.6.0/dist/umd/popper.min.js"
      },
      {
        src:
          "https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/js/bootstrap.min.js"
      }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    // <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-BmbxuPwQa2lc/FVzBcNJ7UAyJxM6wuqIj61tLrc4wSX0szH/Ev+nYRRuWlolflfl" crossorigin="anonymous"></link>
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~/plugins/firebase.js',
    {src: 'plugins/owl.js', ssr: false},
  ],
  // script: [
  //   {src: "https://cdn.jsdelivr.net/npm/@popperjs/core@2.6.0/dist/umd/popper.min.js" },
  //   {src: "https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/js/bootstrap.min.js"}
  // ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    "@nuxt/typescript-build"
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    [
      'nuxt-fontawesome', {
        imports: [
         {
           set: '@fortawesome/free-solid-svg-icons',
           icons: ['fas']
         },
         {
           set:'@fortawesome/free-brands-svg-icons',
           icons: ['fab']
         }
       ]
      }
    ],
    ['@nuxt/http']
    // [ '@nuxtjs/firebase'],
  ],
  // http: {
  //   proxy: true // Can be also an object with default options
  // },
  // proxy: {
  //   '/mountains/': 'https://api.nuxtjs.dev/mountains',
  // }
  // firebase: {
  //   config: {
  //     apiKey: "AIzaSyAyMdcooEH_uAqG4to31gRPRf1mlKwoAAQ",
  //     authDomain: "social-media-f09c2.firebaseapp.com",
  //     projectId: "social-media-f09c2",
  //     storageBucket: "social-media-f09c2.appspot.com",
  //     messagingSenderId: "373194734779",
  //     appId: "1:373194734779:web:94129fbd262740ebba3d9e",
  //     measurementId: "G-RFQXEQDXCL"
  //   },
  //   services: {
  //     auth: true, // Just as example. Can be any other service.
  //     firestore: true,
  //     // functions: true,
  //     storage: true,
  //   },
  //   env: {
  //     FIRE_ENV: process.env.FIRE_ENV
  //   }
  

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
};
