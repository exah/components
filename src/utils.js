import use from 'reuse'
import React from 'react'
import PropTypes from 'prop-types'
import isPropValid from '@emotion/is-prop-valid'
import { filterObj, isStr, identity, pipe } from '@exah/utils'

export const omit = (blacklist = []) => filterObj((key) => !blacklist.includes(key))
export const omitStyles = (styles) => omit(Object.keys(Object(styles.propTypes)))

const dedupe = (input = []) =>
  input.filter((item, index) => input.indexOf(item) === index)

const dedupeClassName = (input = '') =>
  dedupe(input.split(' ')).join(' ')

export function base ({
  element: defaultElement = 'div',
  filter = identity
} = {}) {
  const strictFilter = pipe(filter, filterObj(isPropValid))

  const Base = React.forwardRef(
    ({ element = defaultElement, use: Comp = element, className, ...rest }, ref) => {
      if (isStr(Comp)) {
        return (
          <Comp
            ref={ref}
            className={dedupeClassName(className)}
            {...strictFilter(rest)}
          />
        )
      }

      return (
        <Comp
          ref={ref}
          className={className}
          element={element}
          {...filter(rest)}
        />
      )
    }
  )

  Base.displayName = 'Base'
  Base.propTypes = {
    className: PropTypes.string,
    element: PropTypes.elementType,
    use: PropTypes.oneOfType([
      PropTypes.elementType,
      PropTypes.arrayOf(PropTypes.elementType)
    ])
  }

  return Base
}

const getDisplayName = (comp) =>
  (isStr(comp) ? comp : (comp.displayName || comp.name || 'Component'))

export function useBase ({ name, ...options }, ...uses) {
  const BaseComp = base(options)
  const UseComp = use(BaseComp, ...uses)

  BaseComp.displayName = `Base(${name})`
  UseComp.displayName = `Use(${[ BaseComp, ...uses ].map(getDisplayName).join(', ')})`
  UseComp.propTypes = { ...BaseComp.propTypes }

  return UseComp
}
