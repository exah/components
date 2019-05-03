import styled from '@emotion/styled'

import {
  combineStyles,
  box,
  boxStyle,
  position,
  positionOffsets,
  themePath
} from 'pss'

import { omitStyles } from './utils'
import { base } from './base'

const styles = combineStyles(
  boxStyle,
  box,
  position,
  positionOffsets
)

const BoxBase = base({
  filter: omitStyles(styles)
})

const Box = styled(BoxBase)(
  themePath('Box', {
    boxSizing: 'border-box',
    margin: 0,
    padding: 0,
    minWidth: 0
  }),
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
