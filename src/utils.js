import React, { useEffect, useState } from 'react'
import { isFn, isStr, initArr } from '@exah/utils'
import isPropValid from '@emotion/is-prop-valid'
import { createBaseFactory } from 'react-styled-base'

export const createBase = createBaseFactory({ filter: isPropValid })
export const blacklistOf = (styles) => Object.keys(styles.propTypes || {})

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

export const groupArr = (items = [], length = 3) =>
  items.reduce((target, value, index) => {
    const key = Math.floor(index % length)

    if (target[key]) {
      target[key].push(value)
    }

    return target
  }, initArr(length, () => []))
