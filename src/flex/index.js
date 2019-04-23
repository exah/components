import {
  boxContentAlignment,
  boxItemsAlignment,
  flexContainer,
  gap
} from 'pss'

import React from 'react'
import styled from '@emotion/styled'
import { Box } from '../box'

const FlexContainer = styled(Box)(
  gap,
  flexContainer,
  boxContentAlignment,
  boxItemsAlignment
)

const Flex = (props) => (
  <FlexContainer
    display='flex'
    {...props}
  />
)

Flex.displayName = 'Flex'

Flex.propTypes = {
  ...gap.propTypes,
  ...flexContainer.propTypes,
  ...boxContentAlignment.propTypes,
  ...boxItemsAlignment.propTypes,
  ...Box.propTypes
}

export {
  Flex
}
