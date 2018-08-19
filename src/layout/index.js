import React from 'react'
import { flexItem } from 'pss'
import { createComp } from '../create-comp'
import { Box } from '../box'
import { FlexBox, FlexBoxItem } from '../flex-box'

const LayoutContent = createComp(Box)(
  { flexGrow: 1, flexShrink: 0, flexBasis: 'auto' },
  flexItem
)

const LayoutBody = createComp(FlexBox)(
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
