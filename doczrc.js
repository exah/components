export default {
  title: 'PSS Components',
  src: './src',
  dest: './dist',
  base: process.env.BASENAME || '/',
  hashRouter: true,
  propsParser: false,
  codeSandbox: false,
  wrapper: 'src/theme',
  themeConfig: { showPlaygroundEditor: true, mode: 'dark' }
}
