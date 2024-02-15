const { configure } = require('quasar/wrappers');


module.exports = configure(function (/* ctx */) {
  return {
    css: [
      'app.scss'
    ],
    extras: [
      'roboto-font', // optional, you are not bound to it
      'material-icons', // optional, you are not bound to it
    ],
    build: {
      target: {
        browser: [ 'es2019', 'edge88', 'firefox78', 'chrome87', 'safari13.1' ],
        node: 'node20'
      },
      vueRouterMode: 'history',
    },
    devServer: {
      // https: true
      open: true // opens browser window automatically
    },
    framework: {
      config: {},
      iconSet: 'material-icons',
      plugins: []
    },
    ssr: {
      pwa: false,
      prodPort: 3000, // The default port that the production server should use
                      // (gets superseded if process.env.PORT is specified at runtime)
      middlewares: [
        'render' // keep this as last one
      ]
    },
    pwa: {
      workboxMode: 'generateSW', // or 'injectManifest'
      injectPwaMetaTags: true,
      swFilename: 'sw.js',
      manifestFilename: 'manifest.json',
      useCredentialsForManifestTag: false,
    },
  }
});
