import { createTheme } from 'pss'
import { createElement } from 'react'
import { ThemeProvider } from 'emotion-theming'

const theme = createTheme({
  grid: 12,
  media: {
    M: '(max-width: 600px)'
  },
  space: {
    default: [ 0, 8, 16, 32, 64 ]
  },
  color: {
    black: '#000',
    gray: [ '#eee', '#ddd', '#ccc', '#bbb', '#aaa' ],
    white: '#fff'
  }
})

export {
  theme
}

export default ({ children }) =>
  createElement(ThemeProvider, { theme }, children)
