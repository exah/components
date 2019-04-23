import styled from '@emotion/styled'

import {
  combineStyles,
  gap,
  createGridContainer,
  createGridItem,
  boxContentAlignment,
  boxItemsAlignment,
  themePath
} from 'pss'

import { Box } from '../box'

const gridContainer = createGridContainer()
const gridItem = createGridItem()

const styles = combineStyles(
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
Grid.propTypes = { ...styles.propTypes }
Grid.defaultProps = { display: 'grid' }

const GridItem = styled(Box)(
  gridItem
)

GridItem.displayName = 'Grid.Item'
GridItem.propTypes = { ...gridItem.propTypes }
Grid.Item = GridItem

export {
  Grid,
  GridItem
}
