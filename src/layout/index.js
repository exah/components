import React from 'react'
import styled from 'react-emotion'
import { flexItemPropStyles } from 'pss'

import { Box } from '../box'
import { FlexBox, FlexBoxItem } from '../flex-box'

const LayoutContent = styled(Box)(
  { flexGrow: 1, flexShrink: 0, flexBasis: 'auto' },
  flexItemPropStyles
)

const LayoutBody = styled(FlexBox)(
  { display: 'flex', flexGrow: 1, flexShrink: 0, flexBasis: 'auto' },
  flexItemPropStyles
)

const Layout = (props) => (
  <FlexBox column minHt {...props} />
)

Object.assign(Layout, {
  Header: FlexBoxItem.withComponent('header'),
  Content: LayoutContent.withComponent('main'),
  Footer: FlexBoxItem.withComponent('footer'),
  Item: FlexBoxItem,
  Body: LayoutBody
})

export {
  Layout,
  FlexBoxItem as LayoutItem,
  LayoutContent,
  LayoutBody
}
