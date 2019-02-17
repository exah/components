import React, { useEffect, useState } from 'react'
import { isFn, initArr } from '@exah/utils'

const mapProps = (fn) => (Comp) => (props) => (
  <Comp {...fn(props)} />
)

const defaultProps = (data) => mapProps((props) => ({
  ...isFn(data) ? data(props) : data,
  ...props
}))

const withProps = (data) => mapProps((props) => ({
  ...props,
  ...isFn(data) ? data(props) : data
}))

const withDisplayName = (name) => (Comp) => Object.assign(Comp, {
  displayName: name
})

const withPropTypes = (Base) => (Comp) => Object.assign(Comp, {
  propTypes: { ...Base.propTypes }
})

function useIsMounted () {
  const [ isMounted, setIsMounted ] = useState(false)

  useEffect(() => setIsMounted(true), [])

  return isMounted
}

const groupArr = (items = [], length = 3) =>
  items.reduce((target, value, index) => {
    const key = Math.floor(index % length)

    if (target[key]) {
      target[key].push(value)
    }

    return target
  }, initArr(length, () => []))

export {
  mapProps,
  defaultProps,
  withProps,
  withPropTypes,
  withDisplayName,
  useIsMounted,
  groupArr
}
