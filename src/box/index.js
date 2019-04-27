import styled from '@emotion/styled'

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
  ratio,
  themePath
} from 'pss'

import { createBase, blacklistOf } from '../utils'

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
  blacklist: blacklistOf(styles)
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
  ...styles.propTypes
}

export {
  Box
}
