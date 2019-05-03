import React from 'react'
import { Box } from './box'

const Image = (props) => (
  <Box
    use='img'
    display='block'
    maxWidth='100%'
    height='auto'
    {...props}
  />
)

Image.displayName = 'Image'

export {
  Image
}
