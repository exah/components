import {
  combineStyles,
  border,
  boxSelfAlignment,
  boxStyle,
  clearFix,
  colors,
  cursor,
  display,
  flex,
  float,
  hideOn,
  opacity,
  order,
  outline,
  position,
  positionOffset,
  radius,
  ratio,
  sizes,
  space,
  transform,
  transition,
  zIndex
} from 'pss'

import PropTypes from 'prop-types'
import styled from '@emotion/styled'
import { Base } from '../base'

const BorderBox = styled(Base)(
  { boxSizing: 'border-box' },
  (props) => props.initialCSS
)

BorderBox.displayName = 'BorderBox'
BorderBox.propTypes = {
  ...Base.propTypes,
  initialCSS: PropTypes.object
}

const styles = combineStyles(
  border,
  boxSelfAlignment,
  boxStyle,
  clearFix,
  colors,
  cursor,
  display,
  flex,
  float,
  hideOn,
  opacity,
  order,
  outline,
  position,
  positionOffset,
  radius,
  ratio,
  sizes,
  space,
  transform,
  transition,
  zIndex
)

const Box = styled(BorderBox)(styles)

Box.propTypes = {
  ...BorderBox.propTypes,
  ...styles.propTypes
}

export {
  Box,
  BorderBox
}
