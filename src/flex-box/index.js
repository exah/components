import {
  flexPropStyles,
  flexItemPropStyles
} from 'pss'

import styled from 'react-emotion'
import { Box } from '../box'

const FlexBox = styled(Box)({ display: 'flex' }, flexPropStyles)
const FlexBoxItem = styled(Box)(flexItemPropStyles)

FlexBox.Item = FlexBoxItem

export {
  FlexBox,
  FlexBoxItem
}
