import {
  boxContentAlignment,
  boxItemsAlignment,
  flexContainer,
  gap
} from 'pss'

import React from 'react'
import styled from '@emotion/styled'
import { Box } from '../box'

const StyledFlexBox = styled(Box)(
  gap,
  flexContainer,
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
  ...flexContainer.propTypes,
  ...boxContentAlignment.propTypes,
  ...boxItemsAlignment.propTypes,
  ...Box.propTypes
}

export {
  FlexBox
}
