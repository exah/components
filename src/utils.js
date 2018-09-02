import React from 'react'

const isFn = (val) => typeof val === 'function'

const identity = (val) => val

const compose = (...fns) =>
  fns.reduce((a, b) => (...args) => a(b(...args)), identity)

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

export {
  identity,
  compose,
  mapProps,
  defaultProps,
  withProps
}
