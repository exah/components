import { system, flex, flexItem } from 'pss'
import styled from 'react-emotion'
import { BorderBox } from '../box'
import { gridItem, gridRow } from './styles'

const FlexGridContent = styled(BorderBox)(
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
  ...system.propTypes,
  ...flex.propTypes,
  ...flexGridStyle.propTypes
}

FlexGrid.Item = FlexGridItem
FlexGrid.Item.displayName = 'FlexGrid.Item'

FlexGrid.Item.propTypes = {
  ...system.propTypes,
  ...flexItem.propTypes,
  ...gridItem.propTypes
}

FlexGrid.Item.propTypes = {
  ...system.propTypes,
  ...flexItem.propTypes,
  ...gridItem.propTypes
}

FlexGrid.Content = FlexGridContent
FlexGrid.Content.displayName = 'FlexGrid.Content'

FlexGrid.Content.propTypes = {
  ...system.propTypes
}

export {
  FlexGrid,
  FlexGridItem,
  FlexGridContent
}
