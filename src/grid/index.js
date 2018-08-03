import styled from 'react-emotion'
import { system, flex, flexItem } from 'pss'
import { gridItem, gridRow } from './styles'

const GridContent = styled('div')(system)

const GridItem = styled('div')(
  { flexGrow: 0, flexShrink: 0, minHeight: 1 },
  system,
  flexItem,
  gridItem
)

const Grid = styled('div')(
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
