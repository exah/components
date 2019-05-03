import React from 'react'
import PropTypes from 'prop-types'

const BASE_COMPONENT_ID = Symbol('react-styled-base')

function isBase (Comp) {
  if (Comp == null) {
    return false
  }

  return Comp[BASE_COMPONENT_ID] || isBase(Comp.__emotion_base)
}

export function base (DefaultComp, { filter } = {}) {
  const shouldExtend = isBase(DefaultComp)

  function Base ({ as: Comp, ...rest }, ref) {
    const filteredPops = { ...filter(rest, Comp) }

    if (shouldExtend) {
      return (
        <DefaultComp ref={ref} as={Comp} {...filteredPops} />
      )
    }

    return (
      <Comp ref={ref} {...filteredPops} />
    )
  }

  return Object.assign(React.forwardRef(Base), {
    displayName: 'Base',
    defaultProps: { as: DefaultComp },
    propTypes: { as: PropTypes.elementType },
    [BASE_COMPONENT_ID]: true
  })
}
