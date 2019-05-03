import { useContext } from 'react'
import { ThemeContext } from '@emotion/core'
import { ThemeProvider, withTheme } from 'emotion-theming'

function useTheme () {
  return useContext(ThemeContext)
}

export {
  ThemeContext,
  ThemeProvider,
  useTheme,
  withTheme
}
