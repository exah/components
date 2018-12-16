import { flex, flexItem } from 'pss'
import styled from '@emotion/styled'
import { Box } from '../box'

const FlexBox = styled(Box)({ display: 'flex' }, flex, flexItem)
const FlexBoxItem = styled(Box)(flexItem)

FlexBox.displayName = 'FlexBox'

FlexBox.propTypes = {
  ...Box.propTypes,
  ...flex.propTypes
}

FlexBox.Item = FlexBoxItem
FlexBox.Item.displayName = 'FlexGrid.Item'

FlexBox.Item.propTypes = {
  ...Box.propTypes,
  ...flexItem.propTypes
}

export {
  FlexBox,
  FlexBoxItem
}
