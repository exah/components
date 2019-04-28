import styled from '@emotion/styled'
import { style } from 'pss'
import { Box } from './box'
import { Flex } from './flex'

const listStyle = style({
  cssProp: 'listStyle'
})

const List = styled(Flex)(
  listStyle
)

List.propTypes = {
  ...listStyle.propTypes,
  ...Flex.propTypes
}

List.defaultProps = {
  as: 'ul',
  flexDirection: 'column',
  listStyle: 'none',
  ...Flex.defaultProps
}

const ListItem = styled(Box)(
  listStyle
)

ListItem.propTypes = { ...listStyle.propTypes, ...Box.propTypes }
ListItem.defaultProps = { as: 'li' }
List.Item = ListItem

export {
  List,
  ListItem
}
