import { createTheme } from 'pss'

export default {
  src: './src',
  dest: './dist',
  base: process.env.BASENAME || '/',
  hashRouter: true,
  propsParser: false,
  themeConfig: createTheme()
}
