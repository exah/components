import { theme } from './src/theme'

export default {
  src: './src',
  dest: './dist',
  base: process.env.BASENAME || '/',
  hashRouter: true,
  propsParser: false,
  themeConfig: theme
}
