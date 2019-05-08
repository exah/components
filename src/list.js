import use from 'reuse'
import styled from '@emotion/styled'
import { style } from 'pss'
import { Box } from './box'
import { base, omitStyles } from './utils'

const listStyle = style({
  cssProp: 'listStyle'
})

const ListBase = base({
  name: 'Base(List)',
  filter: omitStyles(listStyle)
})

const List = styled(use(ListBase, Box))(
  listStyle
)

List.propTypes = {
  ...listStyle.propTypes,
  ...Box.propTypes
}

List.defaultProps = {
  listStyle: 'none',
  baseElement: 'ul'
}

const ListItem = styled(use('li'))(
  listStyle
)

ListItem.propTypes = {
  ...listStyle.propTypes,
  ...Box.propTypes
}
List.Item = ListItem

export {
  List,
  ListItem
}
