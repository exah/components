import { flex, flexItem } from 'pss'
import styled from 'react-emotion'
import { Box } from '../box'

const FlexBox = styled(Box)({ display: 'flex' }, flex)
const FlexBoxItem = styled(Box)(flexItem)

FlexBox.Item = FlexBoxItem

export {
  FlexBox,
  FlexBoxItem
}
