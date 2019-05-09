import React, { useContext } from 'react'
import { ThemeContext } from '@emotion/core'
import { ThemeProvider, withTheme } from 'emotion-theming'

function useTheme () {
  return useContext(ThemeContext)
}

function ThemeDefaults ({ children, ...rest }) {
  const prev = useTheme()
  const next = { default: { ...prev.default, ...rest } }

  return (
    <ThemeProvider theme={next}>
      {children}
    </ThemeProvider>
  )
}

ThemeDefaults.displayName = 'ThemeDefaults'

export {
  ThemeContext,
  ThemeProvider,
  ThemeDefaults,
  useTheme,
  withTheme
}
