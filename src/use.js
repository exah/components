import * as React from 'react'
import { toArr } from '@exah/utils'

const Use = React.forwardRef(({ useNext, ...rest }, ref) =>
  render({ ...rest, ref, use: useNext })
)

function render ({ use: useProp, useNext: useNextProp, ...rest }) {
  // filter Use and string components in the middle
  const [Component, ...useNext] = toArr(useProp).filter(
    (x, i, arr) => x !== Use && (typeof x !== 'string' || i === arr.length - 1)
  )

  if (!Component) {
    return null
  }

  if (useNext.length === 0 || typeof Component === 'string') {
    return <Component {...rest} />
  }

  if (useNext.length === 1) {
    return <Component {...rest} use={useNext[0]} />
  }

  return <Component {...rest} use={Use} useNext={useNext} />
}

export function use (...uses) {
  const Component = React.forwardRef(
    ({ use: useProp, useNext: useNextProp, ...rest }, ref) =>
      render(
        {
          ...rest,
          ref,
          use: [ ...uses, ...toArr(useProp), ...toArr(useNextProp) ]
        }
      )
  )

  Component.uses = uses
  return Component
}
