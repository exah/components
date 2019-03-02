import {
  boxContentAlignment,
  boxItemsAlignment,
  flexBox,
  gap
} from 'pss'

import React from 'react'
import styled from '@emotion/styled'
import { Box } from '../box'

const StyledFlexBox = styled(Box)(
  gap,
  flexBox,
  boxContentAlignment,
  boxItemsAlignment
)

const FlexBox = (props) => (
  <StyledFlexBox
    display='flex'
    {...props}
  />
)

FlexBox.displayName = 'FlexBox'

FlexBox.propTypes = {
  ...gap.propTypes,
  ...flexBox.propTypes,
  ...boxContentAlignment.propTypes,
  ...boxItemsAlignment.propTypes,
  ...Box.propTypes
}

export {
  FlexBox
}
