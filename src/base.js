import React from 'react'
import { identity } from '@exah/utils'

export function base ({
  use: defaultComp = 'div',
  filter = identity
} = {}) {
  const Base = React.forwardRef(({ as = defaultComp, use: Comp = as, ...rest }, ref) => (
    <Comp ref={ref} {...filter(rest, Comp)} />
  ))

  Base.displayName = 'Base'
  return Base
}
