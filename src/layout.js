import React from 'react'
import { Flex } from './flex'
import { Box } from './box'
import { withRef } from './utils'

const Layout = withRef((props) => (
  <Flex flex='1 1 auto' {...props} />
))

Layout.Side = withRef((props) => (
  <Box flex='0 0 auto' {...props} />
))

Layout.Content = withRef((props) => (
  <Box flex='1 1 auto' {...props} />
))

Layout.displayName = 'Layout'
Layout.Side.displayName = 'Layout.Side'
Layout.Content.displayName = 'Layout.Content'

export {
  Layout
}
