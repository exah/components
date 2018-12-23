import styled from '@emotion/styled'
import { createBase } from '../base'

import {
  combineStyles,
  cursor,
  display,
  flexItem,
  float,
  margin,
  opacity,
  position,
  radius,
  sizes,
  transform
} from 'pss'

const image = combineStyles(
  cursor,
  display,
  flexItem,
  float,
  margin,
  opacity,
  position,
  radius,
  sizes,
  transform
)

const Image = styled(createBase('img', { blacklist: [ 'width', 'height' ] }))(
  { display: 'block', maxWidth: '100%', height: 'auto' },
  image
)

Image.displayName = 'Image'
Image.propTypes = { ...image.propTypes }

export {
  Image
}
