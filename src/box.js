import use from 'reuse'
import styled from '@emotion/styled'

import {
  combineStyles,
  box,
  boxStyle,
  position,
  positionOffsets,
  themePath
} from 'pss'

import { base, omitStyles } from './utils'

const styles = combineStyles(
  boxStyle,
  box,
  position,
  positionOffsets
)

const BoxBase = base({
  name: 'Base(Box)',
  filter: omitStyles(styles)
})

const Box = styled(use(BoxBase))(
  {
    boxSizing: 'border-box',
    border: 0,
    margin: 0,
    padding: 0,
    minWidth: 0
  },
  themePath('Box'),
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
