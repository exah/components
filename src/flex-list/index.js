import React from 'react'
import { Box } from '../box'
import { FlexBox } from '../flex-box'

const FlexList = (props) => (
  <FlexBox
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
