import styled from '@emotion/styled'
import pss from 'pss'
import { Box } from './box'
import { base } from './utils'

const listStyle = pss({
  listStyle: true
})

const BaseList = base({
  use: Box,
  name: 'List'
})

const List = styled(BaseList)(
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
