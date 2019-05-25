import styled from '@emotion/styled'
import { combineStyles, box, boxStyle, themePath } from 'pss'
import { base, omitStyles } from './utils'

const styles = combineStyles(
  boxStyle,
  box
)

const boxDefaultStyles = {
  font: 'inherit',
  color: 'inherit',
  background: 'transparent',
  border: 0,
  margin: 0,
  padding: 0,
  minWidth: 0
}

const BaseBox = base({
  name: 'Box',
  filter: omitStyles(styles)
})

const Box = styled(BaseBox)(
  { boxSizing: 'border-box' },
  themePath('Box', boxDefaultStyles),
  styles
)

Box.displayName = 'Box'

Box.propTypes = {
  ...BaseBox.propTypes,
  ...boxStyle.propTypes,
  ...styles.propTypes
}

export {
  Box
}
