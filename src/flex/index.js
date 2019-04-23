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

const flexPropTypes = {
  ...gap.propTypes,
  ...flexContainer.propTypes,
  ...boxContentAlignment.propTypes,
  ...boxItemsAlignment.propTypes,
  ...Box.propTypes
}

const Flex = (props) => (
  <FlexContainer display='flex' {...props} />
)

Flex.displayName = 'Flex'
Flex.propTypes = { ...flexPropTypes }

const InlineFlex = (props) => (
  <FlexContainer display='inline-flex' {...props} />
)

InlineFlex.displayName = 'InlineFlex'
InlineFlex.propTypes = { ...flexPropTypes }

export {
  Flex,
  InlineFlex
}
