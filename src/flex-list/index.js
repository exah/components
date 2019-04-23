import React from 'react'
import styled from '@emotion/styled'
import { Box } from '../box'
import { Flex } from '../flex'

const FlexList = (props) => (
  <Flex
    as='ul'
    flexDirection='column'
    {...props}
  />
)

const FlexListItem = styled(Box)({
  listStyle: 'none'
})

FlexListItem.defaultProps = { as: 'li' }
FlexList.Item = FlexListItem

export {
  FlexList,
  FlexListItem
}
