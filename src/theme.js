import PropTypes from 'prop-types'
import React, { useContext, useMemo } from 'react'
import { ThemeContext } from '@emotion/core'

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
  const prev = useTheme().default
  const next = useMemo(() => {
    const { children, ...rest } = props
    return { default: { ...prev, ...rest } }
  }, [prev, props])

  return (
    <ThemeProvider theme={next}>
      {props.children}
    </ThemeProvider>
  )
}

ThemeDefaults.displayName = 'ThemeDefaults'

export {
  ThemeProvider,
  ThemeDefaults,
  useTheme
}
