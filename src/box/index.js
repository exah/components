import {
  box,
  boxStyle,
  combineStyles,
  cursor,
  hideOn,
  opacity,
  radius,
  ratio,
  transform,
  transition
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
  box,
  boxStyle,
  cursor,
  hideOn,
  opacity,
  radius,
  ratio,
  transform,
  transition
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
