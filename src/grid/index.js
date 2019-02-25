import {
  createGridStyle,
  createGridItemStyle,
  boxContentAlignment,
  boxItemsAlignment,
  gap
} from 'pss'

import React from 'react'
import styled from '@emotion/styled'
import { Box } from '../box'

const gridStyle = createGridStyle()
const gridItemStyle = createGridItemStyle()

const StyledGrid = styled(Box)(
  gap,
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
  ...gap.propTypes,
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
