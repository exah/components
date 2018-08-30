import { system, flex, flexItem } from 'pss'
import styled from 'react-emotion'
import { Base } from '../base'
import { gridItem, gridRow } from './styles'

const GridContent = styled(Base)(system)

const GridItem = styled(Base)(
  { flexGrow: 0, flexShrink: 0, minHeight: 1 },
  system,
  flexItem,
  gridItem
)

const Grid = styled(Base)(
  { display: 'flex', flexWrap: 'wrap' },
  gridRow({
    rowSelector: () => `${Grid} + &`,
    childSelector: (props) => props.spaceContent
      ? `& > ${GridItem} > ${GridContent}`
      : `& > ${GridItem}`
  }),
  system,
  flex
)

Object.assign(Grid, {
  Item: GridItem,
  Content: GridContent
})

export {
  Grid,
  GridItem,
  GridContent
}
