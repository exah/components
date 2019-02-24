import styled from '@emotion/styled'
import { createBase } from '../base'

import {
  combineStyles,
  cursor,
  display,
  flex,
  boxSelfAlignment,
  order,
  float,
  margin,
  opacity,
  position,
  radius,
  sizes,
  transform
} from 'pss'

const imageStyle = combineStyles(
  cursor,
  display,
  flex,
  boxSelfAlignment,
  order,
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
  imageStyle
)

Image.displayName = 'Image'
Image.propTypes = { ...imageStyle.propTypes }

export {
  Image
}
