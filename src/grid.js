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

const GridItem = styled(Box)(
  gridItem
)

GridItem.displayName = 'Grid.Item'
GridItem.propTypes = { ...gridItem.propTypes, ...Box.propTypes }
Grid.Item = GridItem

export {
  Grid,
  GridItem
}
