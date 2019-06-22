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
  as: 'img',
  display: 'block',
  maxWidth: '100%',
  height: 'auto'
}

export {
  Image
}
