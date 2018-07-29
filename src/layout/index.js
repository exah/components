import React from 'react'
import Macro from 'macro-components'
import styled from 'react-emotion'
import { flexItemPropStyles } from 'pss'

import { Box } from '../box'
import { FlexBox, FlexBoxItem } from '../flex-box'

const LayoutContent = styled(Box)(
  { flexGrow: 1, flexShrink: 0, flexBasis: 'auto' },
  flexItemPropStyles
)

const createLayout = Macro({
  Header: FlexBoxItem.withComponent('header'),
  Content: LayoutContent.withComponent('main'),
  Footer: FlexBoxItem.withComponent('footer')
})

const Layout = createLayout(({
  Header,
  Content,
  Footer
}, { children, ...rest }) => (
  <FlexBox column minHt {...rest}>
    {Header}
    {Content}
    {Footer}
  </FlexBox>
))

export {
  Layout,
  FlexBoxItem as LayoutItem,
  LayoutContent
}
