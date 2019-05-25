import styled from '@emotion/styled'

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
import { omitStyles, base } from './utils'

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
Grid.propTypes = { ...styles.propTypes, ...Box.propTypes }
Grid.defaultProps = { display: 'grid' }

const BaseGridItem = base({
  use: Box,
  name: 'Grid.Item',
  filter: omitStyles(gridItem)
})

const GridItem = styled(BaseGridItem)(
  gridItem
)

Grid.Item = GridItem
Grid.Item.displayName = 'Grid.Item'
Grid.Item.propTypes = { ...gridItem.propTypes, ...Box.propTypes }

export {
  Grid
}
