import React from 'react'
import { Flex } from './flex'
import { Box } from './box'
import { extend } from './utils'

const Media = extend(props => (
  <Flex flex='1 1 auto' {...props} />
))

const MediaSide = extend(props => (
  <Box flex='0 0 auto' {...props} />
))

const MediaContent = extend(props => (
  <Box flex='1 1 auto' {...props} />
))

Media.displayName = 'Media'
MediaSide.displayName = 'Media.Side'
MediaContent.displayName = 'Media.Content'

Media.Side = MediaSide
Media.Content = MediaContent

export {
  Media,
  MediaSide,
  MediaContent
}
