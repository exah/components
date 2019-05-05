import use from 'reuse'
import styled from '@emotion/styled'
import { style } from 'pss'
import { Box } from './box'
import { Flex } from './flex'
import { base, omitStyles } from './utils'

const listStyle = style({
  cssProp: 'listStyle'
})

const ListBase = base({
  filter: omitStyles(listStyle)
})

const List = styled(use(ListBase, Flex, 'ul'))(
  listStyle
)

List.propTypes = {
  ...listStyle.propTypes,
  ...Flex.propTypes
}

List.defaultProps = {
  flexDirection: 'column',
  listStyle: 'none',
  ...Flex.defaultProps
}

const ListItem = styled(use(ListBase, Box, 'li'))(
  listStyle
)

ListItem.propTypes = { ...listStyle.propTypes, ...Box.propTypes }
List.Item = ListItem

export {
  List,
  ListItem
}
