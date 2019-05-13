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
import { omitStyles, useBase } from './utils'

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

const UseGridItem = useBase({
  name: 'Grid.Item',
  filter: omitStyles(gridItem)
}, Box)

Grid.Item = styled(UseGridItem)(
  gridItem
)

Grid.Item.displayName = 'Grid.Item'
Grid.Item.propTypes = { ...gridItem.propTypes, ...Box.propTypes }

export {
  Grid
}
