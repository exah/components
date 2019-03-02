import React, { useEffect, useState } from 'react'
import isPropValid from '@emotion/is-prop-valid'
import { createBaseFactory } from 'react-styled-base'
import { isFn, initArr } from '@exah/utils'

export const createBase = createBaseFactory({ filter: isPropValid })
export const blacklistOf = (styles) => Object.keys(styles.propTypes || {})

export const mapProps = (fn) => (Comp) => (props) => (
  <Comp {...fn(props)} />
)

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
