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

List.displayName = 'List'
List.propTypes = { ...listStyle.propTypes, ...Box.propTypes }
List.defaultProps = { listStyle: 'none', element: 'ul' }

List.Item = styled(use(Box, 'li'))(
  listStyle
)

List.Item.displayName = 'List.Item'
List.Item.propTypes = { ...listStyle.propTypes, ...Box.propTypes }

export {
  List
}
