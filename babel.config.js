module.exports = {
  env: {
    modules: {
      plugins: [
        '@babel/plugin-transform-modules-commonjs',
        [ 'emotion', { hoist: true } ]
      ]
    },
    production: {
      plugins: [
        [ 'emotion', { hoist: true } ]
      ]
    },
    development: {
      plugins: [
        [ 'emotion', { sourceMap: true } ]
      ]
    }
  },
  presets: [
    [
      '@babel/preset-env',
      {
        modules: false,
        loose: true
      }
    ]
  ],
  plugins: [
    '@babel/plugin-transform-react-jsx',
    '@babel/plugin-proposal-class-properties',
    [ '@babel/plugin-proposal-object-rest-spread', { 'useBuiltIns': true } ]
  ]
}
