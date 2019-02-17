import { system, flex, flexItem } from 'pss'
import styled from '@emotion/styled'
import { BorderBox } from '../box'
import { gridItem, gridRow } from './styles'

const FlexGridContent = styled(BorderBox)( // COMPAT
  system
)

const FlexGridItem = styled(BorderBox)(
  { flexGrow: 0, flexShrink: 0, minHeight: 1, minWidth: 0 },
  system,
  flexItem,
  gridItem
)

const flexGridStyle = gridRow({
  rowSelector: () => `${FlexGrid} + &`,
  childSelector: (props) => props.spaceContent
    ? `& > ${FlexGridItem} > ${FlexGridContent}`
    : `& > ${FlexGridItem}`
})

const FlexGrid = styled(BorderBox)(
  { display: 'flex', flexWrap: 'wrap' },
  system,
  flex,
  flexGridStyle
)

FlexGrid.displayName = 'FlexGrid'

FlexGrid.propTypes = {
  ...BorderBox.propTypes,
  ...flexGridStyle.propTypes,
  ...flex.propTypes,
  ...system.propTypes
}

FlexGrid.Item = FlexGridItem
FlexGrid.Item.displayName = 'FlexGrid.Item'

FlexGrid.Item.propTypes = {
  ...BorderBox.propTypes,
  ...gridItem.propTypes,
  ...flexItem.propTypes,
  ...system.propTypes
}

FlexGrid.Content = FlexGridContent
FlexGrid.Content.displayName = 'FlexGrid.Content'

FlexGrid.Content.propTypes = {
  ...BorderBox.propTypes,
  ...system.propTypes
}

export {
  FlexGrid,
  FlexGridItem,
  FlexGridContent
}
