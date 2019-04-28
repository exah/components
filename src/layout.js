import React from 'react'
import { Flex } from './flex'
import { Box } from './box'

const Layout = (props) => (
  <Flex
    flexDirection='column'
    minHeight='100%'
    {...props}
  />
)

const LayoutContent = (props) => (
  <Box
    flex='1 1 auto'
    {...props}
  />
)

Layout.Content = LayoutContent

export {
  Layout,
  LayoutContent
}
