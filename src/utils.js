import React, { useEffect, useState, useContext } from 'react'
import { isFn, isStr } from '@exah/utils'
import isPropValid from '@emotion/is-prop-valid'
import { ThemeContext } from '@emotion/core'
import { createBaseFactory } from 'react-styled-base'

export const createBase = createBaseFactory({ filter: isPropValid })
export const blacklistOf = (styles) => Object.keys(Object(styles.propTypes))

export const getDisplayName = (comp, fallback = 'Component') =>
  (isStr(comp) ? comp : (comp.displayName || comp.name || fallback))

export const mapProps = (fn) => (Comp) => {
  const HOC = (props) => (
    <Comp {...fn(props)} />
  )

  HOC.displayName = `mapProps(${getDisplayName(Comp)})`
  return HOC
}

export const defaultProps = (data) => mapProps((props) => ({
  ...isFn(data) ? data(props) : data,
  ...props
}))

export const withProps = (data) => mapProps((props) => ({
  ...props,
  ...isFn(data) ? data(props) : data
}))

export function useIsMounted () {
  const [ isMounted, setIsMounted ] = useState(false)

  useEffect(() => setIsMounted(true), [])

  return isMounted
}

export function useTheme () {
  return useContext(ThemeContext)
}
