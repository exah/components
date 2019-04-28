import React from 'react'
import styled from '@emotion/styled'
import { Box } from './box'
import { Flex } from './flex'

const List = (props) => (
  <Flex
    as='ul'
    flexDirection='column'
    {...props}
  />
)

const ListItem = styled(Box)({
  listStyle: 'none'
})

ListItem.defaultProps = { as: 'li' }
List.Item = ListItem

export {
  List,
  ListItem
}
