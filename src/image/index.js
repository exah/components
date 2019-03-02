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

import styled from '@emotion/styled'
import { createBase, blacklistOf } from '../utils'

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

const ImageBase = createBase('img', {
  blacklist: blacklistOf(styles)
})

const Image = styled(ImageBase)(
  { display: 'block', maxWidth: '100%', height: 'auto' },
  styles
)

Image.displayName = 'Image'

Image.propTypes = {
  ...Image.propTypes,
  ...styles.propTypes
}

export {
  Image
}
