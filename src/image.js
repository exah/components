import use from 'reuse'
import styled from '@emotion/styled'
import { themePath } from 'pss'
import { Box } from './box'

const Image = styled(use(Box, 'img'))(
  themePath('image')
)

Image.displayName = 'Image'
Image.propTypes = { ...Box.propTypes }

Image.defaultProps = {
  display: 'block',
  maxWidth: '100%',
  height: 'auto'
}

export {
  Image
}
