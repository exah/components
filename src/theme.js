import PropTypes from 'prop-types'
import React, { useContext, useMemo } from 'react'
import { ThemeContext } from '@emotion/core'
import { useMatchMedia } from './use-match-media'

function useTheme () {
  return useContext(ThemeContext)
}

function ThemeProvider ({ theme, ...rest }) {
  const prev = useTheme()
  const next = useMemo(() => ({ ...prev, ...theme }), [prev, theme])

  return (
    <ThemeContext.Provider value={next} {...rest} />
  )
}

ThemeProvider.displayName = 'ThemeProvider'
ThemeProvider.propTypes = { theme: PropTypes.shape({}) }

function ThemeDefaults (props) {
  const { children, mediaQuery, ...rest } = props

  const prev = useTheme().default
  const next = useMemo(() => ({ default: { ...prev, ...rest } }), [prev, props])
  const isMediaQueryMatched = useMatchMedia(mediaQuery)

  if (mediaQuery == null || isMediaQueryMatched) {
    return (
      <ThemeProvider theme={next}>
        {props.children}
      </ThemeProvider>
    )
  }

  return props.children
}

ThemeDefaults.displayName = 'ThemeDefaults'

export {
  ThemeProvider,
  ThemeDefaults,
  useTheme
}
