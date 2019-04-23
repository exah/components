import React from 'react'
import { Box } from '../box'
import { Flex } from '../flex'

const FlexList = (props) => (
  <Flex
    as='ul'
    flexDirection='column'
    initialCSS={{ listStyle: 'none' }}
    {...props}
  />
)

const FlexListItem = (props) => (
  <Box
    as='li'
    {...props}
  />
)

FlexList.Item = FlexListItem

export {
  FlexList,
  FlexListItem
}
