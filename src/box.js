import styled from '@emotion/styled'

import {
  combineStyles,
  box,
  boxStyle,
  position,
  positionOffsets,
  themePath
} from 'pss'

import { ommitStyles } from './utils'
import { base } from './base'

const styles = combineStyles(
  box,
  position,
  positionOffsets
)

const BoxBase = base('div', {
  filter: ommitStyles(styles)
})

const Box = styled(BoxBase)(
  themePath('Box', {
    boxSizing: 'border-box',
    margin: 0,
    padding: 0,
    minWidth: 0
  }),
  boxStyle,
  styles
)

Box.displayName = 'Box'

Box.propTypes = {
  ...BoxBase.propTypes,
  ...boxStyle.propTypes,
  ...styles.propTypes
}

export {
  Box
}
