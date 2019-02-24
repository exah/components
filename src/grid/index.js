import {
  createStyles,
  spaceRule,
  createGridStyle,
  createGridItemStyle,
  boxContentAlignment,
  boxItemsAlignment
} from 'pss'

import React from 'react'
import styled from '@emotion/styled'
import { Box } from '../box'

const gridGap = createStyles({
  gap: [ spaceRule('gridGap'), spaceRule('gap') ],
  gapx: [ spaceRule('gridColumnGap'), spaceRule('columnGap') ],
  gapy: [ spaceRule('gridRowGap'), spaceRule('rowGap') ]
})

const gridStyle = createGridStyle({ isShortPropNames: true })
const gridItemStyle = createGridItemStyle({ isShortPropNames: true })

const StyledGrid = styled(Box)(
  gridGap,
  gridStyle,
  boxContentAlignment,
  boxItemsAlignment
)

const Grid = (props) => (
  <StyledGrid
    display='grid'
    {...props}
  />
)

const GridItem = styled(Box)(
  gridItemStyle
)

Grid.propTypes = {
  ...gridStyle.propTypes,
  ...boxContentAlignment.propTypes,
  ...boxItemsAlignment.propTypes,
  ...gridGap.propTypes,
  ...Box.propTypes
}

Grid.Item = GridItem

Grid.Item.propTypes = {
  ...gridItemStyle.propTypes,
  ...Box.propTypes
}

export {
  Grid,
  GridItem
}
