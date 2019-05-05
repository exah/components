import React from 'react'
import { ThemeProvider } from 'emotion-theming'
import { useTheme } from './theme'

export function ThemeDefaults ({ children, ...rest }) {
  const prev = useTheme()
  const next = { default: { ...prev.default, ...rest } }

  return (
    <ThemeProvider theme={next}>
      {children}
    </ThemeProvider>
  )
}

ThemeDefaults.displayName = 'ThemeDefaults'
