import React from 'react'
import PropTypes from 'prop-types'
import { filterObj, isStr, flatten, identity } from '@exah/utils'

export const omit = (blacklist = []) => filterObj((key) => !blacklist.includes(key))
export const omitStyles = (styles) => omit(Object.keys(Object(styles.propTypes)))
export const cx = (...args) => flatten(args).filter(isStr).join(' ')

export const withRef = (render) => React.forwardRef(
  (props, ref) => render({ ref, ...props })
)

const dedupe = (input = []) =>
  input.filter((item, index) => input.indexOf(item) === index)

const dedupeClassName = (input = '') =>
  dedupe(input.split(' ')).join(' ')

export function base ({
  name = 'Base',
  element = 'div',
  filter = identity
} = {}) {
  const Base = withRef(
    ({ baseElement = element, use: Comp = baseElement, className, ...rest }) => (
      <Comp
        className={dedupeClassName(className)}
        {...!isStr(Comp) && { baseElement }}
        {...filter(rest)}
      />
    )
  )

  return Object.assign(Base, {
    displayName: name,
    propTypes: {
      baseElement: PropTypes.elementType,
      use: PropTypes.oneOfType([
        PropTypes.elementType,
        PropTypes.arrayOf(PropTypes.elementType)
      ])
    }
  })
}

const generateClassName = ((id) => () => {
  id++
  return 'pss-' + id
})(-1)

export function extend (render) {
  const className = generateClassName()

  const Comp = withRef((props) =>
    render({ ...props, className: cx(props.className, className) })
  )

  return Object.defineProperties(Comp, {
    toString: {
      value: () => `.${className}`
    }
  })
}
