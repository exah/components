import { createElement } from 'react'
import { ThemeProvider } from 'emotion-theming'

const theme = {
  grid: 12,
  media: {
    M: '(max-width: 600px)',
    T: '(min-width: 601px) and (max-width: 1024px)',
    D: '(min-width: 1025px)'
  },
  space: {
    default: [ 0, 8, 16, 32, 64 ]
  },
  color: {
    black: '#000',
    gray: [ '#eee', '#ddd', '#ccc', '#bbb', '#aaa' ],
    white: '#fff'
  },
  palette: {
    default: {
      bg: '#fff',
      fg: '#000'
    },
    gray: {
      bg: '#eee',
      fg: '#000'
    },
    inverted: {
      bg: '#000',
      fg: '#fff'
    }
  },
  font: {
    default: 'Helvetica, system-ui, sans-serif',
    serif: 'Times New Roman, serif'
  },
  textStyle: {
    root: {
      fontFamily: 'Helvetica, system-ui, sans-serif',
      fontSize: 16,
      lineHeight: 1.2
    },
    default: {
      fontSize: '1rem'
    },
    heading: {
      fontSize: '1.5rem',
      fontWeight: 'bold'
    }
  }
}

export {
  theme
}

export default ({ children }) =>
  createElement(ThemeProvider, { theme }, children)
