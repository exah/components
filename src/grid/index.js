import styled from 'react-emotion'

import {
  space,
  sizes,
  colors,
  utilityPropStyles,
  flexPropStyles,
  flexItemPropStyles
} from 'pss'

import {
  gridItemPropStyles,
  gridRowPropStyles
} from './styles'

const GridContent = styled('div')(
  space,
  sizes,
  colors,
  utilityPropStyles
)

const GridItem = styled('div')(
  { flexGrow: 0, flexShrink: 0, minHeight: 1 },
  gridItemPropStyles,
  space,
  sizes,
  colors,
  utilityPropStyles,
  flexItemPropStyles
)

const Grid = styled('div')(
  { display: 'flex', flexWrap: 'wrap' },
  gridRowPropStyles({
    rowSelector: () => `${Grid} + &`,
    childSelector: (props) => props.spaceContent
      ? `& > ${GridItem} > ${GridContent}`
      : `& > ${GridItem}`
  }),
  space,
  sizes,
  colors,
  utilityPropStyles,
  flexPropStyles
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
