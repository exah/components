import { flex, flexItem } from 'pss'
import { createComp } from '../create-comp'
import { Box } from '../box'

const FlexBox = createComp(Box)({ display: 'flex' }, flex)
const FlexBoxItem = createComp(Box)(flexItem)

FlexBox.Item = FlexBoxItem

export {
  FlexBox,
  FlexBoxItem
}
