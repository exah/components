import styled from '@emotion/styled'
import { combineStyles, box, boxStyle, themePath } from 'pss'
import { useBase, omitStyles } from './utils'

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

const BoxBase = useBase({
  name: 'Box',
  filter: omitStyles(styles)
})

const Box = styled(BoxBase)(
  { boxSizing: 'border-box' },
  themePath('Box', boxDefaultStyles),
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
