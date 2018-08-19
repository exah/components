import { system, flex, flexItem } from 'pss'
import { createComp } from '../create-comp'
import { gridItem, gridRow } from './styles'

const GridContent = createComp('div')(system)

const GridItem = createComp('div', [ 'order', 'size' ])(
  { flexGrow: 0, flexShrink: 0, minHeight: 1 },
  system,
  flexItem,
  gridItem
)

const Grid = createComp('div')(
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
