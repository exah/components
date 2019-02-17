import styled from '@emotion/styled'

import {
  system,
  createStyles,
  spaceRule,
  createGridStyle,
  createGridItemStyle,
  boxContentAlignment,
  boxItemsAlignment,
  boxSelfAlignment,
  order
} from 'pss'

import { BorderBox } from '../box'

const gridGap = createStyles({
  gap: [ spaceRule('gridGap'), spaceRule('gap') ],
  gapx: [ spaceRule('gridColumnGap'), spaceRule('columnGap') ],
  gapy: [ spaceRule('gridRowGap'), spaceRule('rowGap') ]
})

const gridStyle = createGridStyle({ isShortPropNames: true })
const gridItemStyle = createGridItemStyle({ isShortPropNames: true })

const Grid = styled(BorderBox)(
  { display: 'grid' },
  system,
  gridGap,
  gridStyle,
  boxContentAlignment,
  boxItemsAlignment
)

const GridItem = styled(BorderBox)(
  system,
  gridItemStyle,
  boxSelfAlignment,
  order
)

Grid.displayName = 'Grid'

Grid.propTypes = {
  ...BorderBox.propTypes,
  ...gridStyle.propTypes,
  ...boxContentAlignment.propTypes,
  ...boxItemsAlignment.propTypes,
  ...system.propTypes
}

Grid.Item = GridItem
Grid.Item.displayName = 'Grid.Item'

Grid.Item.propTypes = {
  ...BorderBox.propTypes,
  ...gridItemStyle.propTypes,
  ...boxSelfAlignment.propTypes,
  ...system.propTypes
}

export {
  Grid,
  GridItem
}
