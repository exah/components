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

const GridContainer = styled(Box)(
  gap,
  gridContainer,
  boxContentAlignment,
  boxItemsAlignment
)

const gridPropTypes = {
  ...gap.propTypes,
  ...gridContainer.propTypes,
  ...boxContentAlignment.propTypes,
  ...boxItemsAlignment.propTypes,
  ...Box.propTypes
}

const GridItem = styled(Box)(
  gridItem
)

GridItem.displayName = 'Grid.Item'

GridItem.propTypes = {
  ...gridItem.propTypes,
  ...Box.propTypes
}

const Grid = (props) => (
  <GridContainer display='grid' {...props} />
)

Grid.displayName = 'Grid'
Grid.propTypes = { ...gridPropTypes }
Grid.Item = GridItem

const InlineGrid = (props) => (
  <GridContainer display='inline-grid' {...props} />
)

InlineGrid.displayName = 'InlineGrid'
InlineGrid.propTypes = { ...gridPropTypes }
InlineGrid.Item = GridItem

export {
  Grid,
  GridItem,
  InlineGrid
}
