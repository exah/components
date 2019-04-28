export default {
  dest: './dist',
  base: process.env.BASENAME || '/',
  hashRouter: true,
  propsParser: false,
  codeSandbox: false,
  wrapper: '.internal/wrapper',
  themeConfig: {
    mode: 'dark',
    linesToScrollEditor: 100,
    showPlaygroundEditor: true
  },
  title: 'PSS Components',
  menu: [ 'Getting Started', 'Primitives', 'Layout', 'Helpers' ]
}
