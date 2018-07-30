import styled from 'react-emotion'

import {
  flexPropStyles,
  flexItemPropStyles
} from 'pss'

import { Box } from '../box'

const MediaObject = styled(Box)({
  display: 'flex',
  alignItems: 'flex-start'
}, flexPropStyles)

const MediaObjectSide = styled(Box)({
  flexGrow: 0,
  flexShrink: 0,
  '& img': {
    display: 'block'
  }
}, flexItemPropStyles)

const MediaObjectContent = styled(Box)({
  flexGrow: 1
}, flexItemPropStyles)

Object.assign(MediaObject, {
  Side: MediaObjectSide,
  Content: MediaObjectContent
})

export {
  MediaObject,
  MediaObjectSide,
  MediaObjectContent
}
