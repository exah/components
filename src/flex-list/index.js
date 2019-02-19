import React from 'react'
import { Box } from '../box'
import { FlexBox } from '../flex-box'

const FlexList = (props) => (
  <FlexBox
    as='ul'
    mg={0}
    pd={0}
    flexDirection='column'
    css={{ listStyle: 'none' }}
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
