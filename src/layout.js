import React from 'react'
import { Flex } from './flex'
import { Box } from './box'
import { extend } from './utils'

const Layout = extend(props => (
  <Flex
    flexDirection='column'
    minHeight='100%'
    {...props}
  />
))

const LayoutContent = extend(props => (
  <Box
    flex='1 1 auto'
    {...props}
  />
))

Layout.displayName = 'Layout'
LayoutContent.displayName = 'Layout.Content'

Layout.Content = LayoutContent

export {
  Layout,
  LayoutContent
}
