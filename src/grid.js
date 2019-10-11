import styled from '@emotion/styled'
import { getPropTypes } from 'pss/prop-type'

import {
  combineStyles,
  gap,
  createGridContainer,
  createGridItem,
  boxContentAlignment,
  boxItemsAlignment,
  themePath,
  variant
} from 'pss'

import { Box } from './box'
import { base } from './base'

const gridVariant = variant({ themeKey: 'gridStyle' })
const gridContainer = createGridContainer()
const gridItem = createGridItem()

const styles = combineStyles(
  gridVariant,
  gap,
  gridContainer,
  boxContentAlignment,
  boxItemsAlignment
)

const Grid = styled(Box)(
  themePath('Grid'),
  styles
)

Grid.displayName = 'Grid'
Grid.propTypes = { ...getPropTypes(styles), ...Box.propTypes }
Grid.defaultProps = { ...Box.defaultProps, display: 'grid' }

const BaseGridItem = base({
  use: Box,
  name: 'Grid.Item',
  blacklist: gridItem.props
})

const GridItem = styled(BaseGridItem)(
  gridItem
)

Grid.Item = GridItem
Grid.Item.displayName = 'Grid.Item'
Grid.Item.propTypes = { ...getPropTypes(gridItem), ...Box.propTypes }

export {
  Grid
}
