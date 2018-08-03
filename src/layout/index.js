import React from 'react'
import styled from 'react-emotion'
import { flexItem } from 'pss'
import { Box } from '../box'
import { FlexBox, FlexBoxItem } from '../flex-box'

const LayoutContent = styled(Box)(
  { flexGrow: 1, flexShrink: 0, flexBasis: 'auto' },
  flexItem
)

const LayoutBody = styled(FlexBox)(
  { display: 'flex', flexGrow: 1, flexShrink: 0, flexBasis: 'auto' },
  flexItem
)

const Layout = (props) => (
  <FlexBox column minHt {...props} />
)

Object.assign(Layout, {
  Content: LayoutContent,
  Item: FlexBoxItem,
  Body: LayoutBody,
  Header: FlexBoxItem.withComponent('header'),
  Footer: FlexBoxItem.withComponent('footer'),
  Main: LayoutContent.withComponent('main')
})

export {
  Layout,
  FlexBoxItem as LayoutItem,
  LayoutContent,
  LayoutBody
}
