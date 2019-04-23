import 'parse-prop-types'
import { createElement } from 'react'
import { ThemeProvider } from 'emotion-theming'
import { theme } from './theme'

export default ({ children }) =>
  createElement(ThemeProvider, { theme }, children)
