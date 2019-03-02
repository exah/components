import {
  combineStyles,
  box,
  boxStyle,
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
import { createBase, blacklistOf } from '../utils'

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

const BoxBase = createBase('div', {
  blacklist: [ 'initialCSS', ...blacklistOf(styles) ]
})

const Box = styled(BoxBase)(
  { boxSizing: 'border-box' },
  (props) => props.initialCSS,
  styles
)

Box.displayName = 'Box'

Box.propTypes = {
  ...BoxBase.propTypes,
  ...styles.propTypes,
  initialCSS: PropTypes.object
}

export {
  Box
}
