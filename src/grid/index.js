import {
  createGridContainer,
  createGridItem,
  boxContentAlignment,
  boxItemsAlignment,
  gap
} from 'pss'

import React from 'react'
import styled from '@emotion/styled'
import { Box } from '../box'

const gridContainer = createGridContainer()
const gridItem = createGridItem()

const StyledGrid = styled(Box)(
  gap,
  gridContainer,
  boxContentAlignment,
  boxItemsAlignment
)

const Grid = (props) => (
  <StyledGrid
    display='grid'
    {...props}
  />
)

Grid.propTypes = {
  ...gridContainer.propTypes,
  ...boxContentAlignment.propTypes,
  ...boxItemsAlignment.propTypes,
  ...gap.propTypes,
  ...Box.propTypes
}

const GridItem = styled(Box)(
  gridItem
)

Grid.Item = GridItem

Grid.Item.displayName = 'Grid.Item'

Grid.Item.propTypes = {
  ...gridItem.propTypes,
  ...Box.propTypes
}

export {
  Grid,
  GridItem
}
