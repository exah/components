import React from 'react'
import memoize from '@emotion/memoize'
import isPropValid from '@emotion/is-prop-valid'

const DEFAULT_BLACKLIST = [
  'order',
  'size',
  'opacity',
  'wrap',
  'letterSpacing',
  'transform',
  'cursor',
  'radius'
]

const shouldForwardProp = ({
  blacklist = DEFAULT_BLACKLIST,
  whitelist = []
}) => memoize((name) =>
  whitelist.includes(name) || (!blacklist.includes(name) && isPropValid(name))
)

const filterObj = (fn, props) => {
  const target = {}

  for (let key in props) {
    if (fn(key)) {
      target[key] = props[key]
    }
  }

  return target
}

const createBaseComponent = (defaultComp = 'div', filterOptions = {}) => {
  const filterFn = shouldForwardProp(filterOptions)

  return React.forwardRef(({ comp: Comp = defaultComp, ...rest }, ref) => (
    <Comp ref={ref} {...filterObj(filterFn, rest)} />
  ))
}

const Base = createBaseComponent('div')

export {
  Base,
  createBaseComponent
}
