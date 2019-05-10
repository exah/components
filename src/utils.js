import React from 'react'
import PropTypes from 'prop-types'
import isPropValid from '@emotion/is-prop-valid'
import { filterObj, isStr, identity, pipe } from '@exah/utils'

export const omit = (blacklist = []) => filterObj((key) => !blacklist.includes(key))
export const omitStyles = (styles) => omit(Object.keys(Object(styles.propTypes)))

export const withRef = (render) => React.forwardRef(
  (props, ref) => render({ ref, ...props })
)

const dedupe = (input = []) =>
  input.filter((item, index) => input.indexOf(item) === index)

const dedupeClassName = (input = '') =>
  dedupe(input.split(' ')).join(' ')

export function base ({
  name = 'Base',
  element: defaultElement = 'div',
  filter = identity,
  attributes
} = {}) {
  const strictFilter = pipe(filter, filterObj(isPropValid))

  const Base = withRef(
    ({ element = defaultElement, use: Comp = element, className, ...rest }) => {
      if (isStr(Comp)) {
        return (
          <Comp
            className={dedupeClassName(className)}
            {...attributes}
            {...strictFilter(rest)}
          />
        )
      }

      return (
        <Comp
          className={className}
          element={element}
          {...attributes}
          {...filter(rest)}
        />
      )
    }
  )

  return Object.assign(Base, {
    displayName: name,
    propTypes: {
      element: PropTypes.elementType,
      use: PropTypes.oneOfType([
        PropTypes.elementType,
        PropTypes.arrayOf(PropTypes.elementType)
      ])
    }
  })
}
