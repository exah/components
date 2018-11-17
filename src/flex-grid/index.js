import { system, flex, flexItem } from 'pss'
import styled from 'react-emotion'
import { BaseBox } from '../box'
import { gridItem, gridRow } from './styles'

const FlexGridContent = styled(BaseBox)(system)

const FlexGridItem = styled(BaseBox)(
  { flexGrow: 0, flexShrink: 0, minHeight: 1 },
  system,
  flexItem,
  gridItem
)

const FlexGrid = styled(BaseBox)(
  { display: 'flex', flexWrap: 'wrap' },
  gridRow({
    rowSelector: () => `${FlexGrid} + &`,
    childSelector: (props) => props.spaceContent
      ? `& > ${FlexGridItem} > ${FlexGridContent}`
      : `& > ${FlexGridItem}`
  }),
  system,
  flex
)

Object.assign(FlexGrid, {
  Item: FlexGridItem,
  Content: FlexGridContent
})

export {
  FlexGrid,
  FlexGridItem,
  FlexGridContent
}
