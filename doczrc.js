export default {
  title: 'Components',
  src: './src',
  dest: './dist',
  base: process.env.BASENAME || '/',
  hashRouter: true,
  propsParser: true,
  wrapper: 'src/theme',
  themeConfig: { showPlaygroundEditor: true }
}
