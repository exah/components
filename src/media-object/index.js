import React from 'react'
import { FlexBox } from '../flex-box'
import { Box } from '../box'

const MediaObject = (props) => (
  <FlexBox {...props} />
)

const MediaObjectSide = (props) => (
  <Box flex='0 0 auto' {...props} />
)

const MediaObjectContent = (props) => (
  <Box flex='1 1 auto' {...props} />
)

Object.assign(MediaObject, {
  Side: MediaObjectSide,
  Content: MediaObjectContent
})

export {
  MediaObject,
  MediaObjectSide,
  MediaObjectContent
}
