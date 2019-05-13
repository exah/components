import styled from '@emotion/styled'
import { themePath } from 'pss'
import { Box } from './box'

const Image = styled(Box)(
  themePath('Image')
)

Image.displayName = 'Image'

Image.propTypes = {
  ...Box.propTypes
}

Image.defaultProps = {
  element: 'img',
  display: 'block',
  maxWidth: '100%',
  minWidth: 'auto',
  height: 'auto'
}

export {
  Image
}
