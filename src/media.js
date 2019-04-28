import React from 'react'
import { Flex } from './flex'
import { Box } from './box'

const Media = (props) => (
  <Flex {...props} />
)

const MediaSide = (props) => (
  <Box flex='0 0 auto' {...props} />
)

const MediaContent = (props) => (
  <Box flex='1 1 auto' {...props} />
)

Object.assign(Media, {
  Side: MediaSide,
  Content: MediaContent
})

export {
  Media,
  MediaSide,
  MediaContent
}
