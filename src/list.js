import styled from '@emotion/styled'
import { style } from 'pss'
import { Box } from './box'

const listStyle = style({
  cssProp: 'listStyle'
})

const List = styled(Box)(
  listStyle
)

List.displayName = 'List'
List.propTypes = { ...listStyle.propTypes, ...Box.propTypes }
List.defaultProps = { listStyle: 'none', as: 'ul' }

List.Item = styled(Box)(
  listStyle
)

List.Item.displayName = 'List.Item'
List.Item.propTypes = { ...listStyle.propTypes, ...Box.propTypes }
List.Item.defaultProps = { as: 'li' }

export {
  List
}
