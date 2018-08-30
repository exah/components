import React from 'react'
import { flexItem } from 'pss'
import styled from 'react-emotion'
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
  Body: LayoutBody
})

export {
  Layout,
  FlexBoxItem as LayoutItem,
  LayoutContent,
  LayoutBody
}
