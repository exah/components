import React from 'react'
import styled from 'react-emotion'
import isPropValid from '@emotion/is-prop-valid'

const whitelist = [ 'comp', 'ref' ]

const componentFromProps = (defaultComp = 'div') => React.forwardRef(({
  comp: Comp = defaultComp,
  ...rest
}, ref) => (
  <Comp ref={ref} {...rest} />
))

const createComp = (type, blacklist = [ 'order' ]) => (...styles) =>
  styled(typeof type === 'string' ? componentFromProps(type) : type, {
    shouldForwardProp: (name) =>
      whitelist.includes(name) || (isPropValid(name) && !blacklist.includes(name))
  })(...styles)

export {
  createComp
}
