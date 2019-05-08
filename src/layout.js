import React from 'react'
import { Flex } from './flex'
import { Box } from './box'
import { extend } from './utils'

const Layout = extend(props => (
  <Flex flex='1 1 auto' {...props} />
))

const LayoutSide = extend(props => (
  <Box flex='0 0 auto' {...props} />
))

const LayoutContent = extend(props => (
  <Box flex='1 1 auto' {...props} />
))

Layout.displayName = 'Layout'
LayoutSide.displayName = 'Layout.Side'
LayoutContent.displayName = 'Layout.Content'

Layout.Side = LayoutSide
Layout.Content = LayoutContent

export {
  Layout,
  LayoutSide,
  LayoutContent
}
