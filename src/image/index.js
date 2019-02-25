import styled from '@emotion/styled'
import { createBase } from '../base'

import {
  combineStyles,
  cursor,
  display,
  flex,
  boxSelfAlignment,
  order,
  margin,
  opacity,
  position,
  radius,
  sizes,
  transform
} from 'pss'

const styles = combineStyles(
  cursor,
  display,
  flex,
  boxSelfAlignment,
  order,
  margin,
  opacity,
  position,
  radius,
  sizes,
  transform
)

const Image = styled(createBase('img', { blacklist: [ 'width', 'height' ] }))(
  { display: 'block', maxWidth: '100%', height: 'auto' },
  styles
)

Image.displayName = 'Image'
Image.propTypes = { ...styles.propTypes }

export {
  Image
}
