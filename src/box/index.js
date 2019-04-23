import {
  combineStyles,
  box,
  boxStyle,
  display,
  hide,
  transition,
  transform,
  opacity,
  cursor,
  ratio
} from 'pss'

import PropTypes from 'prop-types'
import styled from '@emotion/styled'
import { css } from '@emotion/core'
import { createBase, blacklistOf } from '../utils'

const reset = css`
  box-sizing: border-box;
  min-width: 0;
  margin: 0;
  padding: 0;
  border: 0;
`

const initialCSS = (props) => props.initialCSS

const styles = combineStyles(
  box,
  boxStyle,
  display,
  hide,
  transition,
  transform,
  opacity,
  cursor,
  ratio
)

const BoxBase = createBase('div', {
  blacklist: [ 'initialCSS', ...blacklistOf(styles) ]
})

const Box = styled(BoxBase)(
  reset,
  initialCSS,
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
