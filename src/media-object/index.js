import {
  flex,
  flexItem
} from 'pss'

import styled from 'react-emotion'
import { Box } from '../box'

const MediaObject = styled(Box)({
  display: 'flex',
  alignItems: 'flex-start'
}, flex)

const MediaObjectSide = styled(Box)({
  flexGrow: 0,
  flexShrink: 0,
  '& img, & svg': {
    display: 'block'
  }
}, flexItem)

const MediaObjectContent = styled(Box)({
  flexGrow: 1
}, flexItem)

Object.assign(MediaObject, {
  Side: MediaObjectSide,
  Content: MediaObjectContent
})

export {
  MediaObject,
  MediaObjectSide,
  MediaObjectContent
}
