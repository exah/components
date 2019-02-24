import React from 'react'
import { FlexBox } from '../flex-box'
import { Box } from '../box'

const Layout = (props) => (
  <FlexBox
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
  <FlexBox
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
