import use from 'reuse'
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
import { base } from './base'
import { omitStyles } from './utils'

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

const GridBase = base({
  filter: omitStyles(styles)
})

const Grid = styled(use(GridBase, Box))(
  themePath('Grid'),
  styles
)

Grid.displayName = 'Grid'
Grid.propTypes = { ...styles.propTypes, ...Box.propTypes }
Grid.defaultProps = { display: 'grid' }

const GridItemBase = base({
  filter: omitStyles(gridItem)
})

const GridItem = styled(use(GridItemBase, Box))(
  gridItem
)

GridItem.displayName = 'Grid.Item'
GridItem.propTypes = { ...gridItem.propTypes, ...Box.propTypes }
Grid.Item = GridItem

export {
  Grid,
  GridItem
}
