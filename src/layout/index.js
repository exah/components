import React from 'react'
import { Flex } from '../flex'
import { Box } from '../box'

const Layout = (props) => (
  <Flex
    flexDirection='column'
    minHeight='100%'
    {...props}
  />
)

const LayoutContent = (props) => (
  <Box
    flex='1 1 100%'
    {...props}
  />
)

const LayoutBody = (props) => (
  <Flex
    flexDirection='row'
    flex='1 1 100%'
    {...props}
  />
)

Object.assign(Layout, {
  Content: LayoutContent,
  Body: LayoutBody
})

export {
  Layout,
  LayoutContent,
  LayoutBody
}
