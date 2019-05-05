import React from 'react'
import PropTypes from 'prop-types'
import { filterObj, isStr, flatten, identity } from '@exah/utils'

export const omit = (blacklist = []) => filterObj((key) => !blacklist.includes(key))
export const omitStyles = (styles) => omit(Object.keys(Object(styles.propTypes)))
export const cx = (...args) => flatten(args).filter(isStr).join(' ')

export const withRef = (render) => React.forwardRef(
  (props, ref) => render({ ref, ...props })
)

export function base ({
  use: defaultComp = 'div',
  filter = identity
} = {}) {
  const Base = withRef(({ use: Comp = defaultComp, ...rest }) => (
    <Comp {...filter(rest)} />
  ))

  Base.displayName = 'Base'
  Base.propTypes = {
    use: PropTypes.oneOfType([
      PropTypes.elementType,
      PropTypes.arrayOf(PropTypes.elementType)
    ])
  }

  return Base
}

export const extend = ((id = 0) => (render) => {
  const targetClassName = 'pss-' + id

  const Comp = withRef((props) =>
    render({ ...props, className: cx(props.className, targetClassName) })
  )

  Object.defineProperty(Comp, 'toString', {
    value () {
      return `.${targetClassName}`
    }
  })

  id++
  return Comp
})()
