import {
  flex,
  flexItem
} from 'pss'

import { createComp } from '../create-comp'
import { Box } from '../box'

const MediaObject = createComp(Box)({
  display: 'flex',
  alignItems: 'flex-start'
}, flex)

const MediaObjectSide = createComp(Box)({
  flexGrow: 0,
  flexShrink: 0,
  '& img, & svg': {
    display: 'block'
  }
}, flexItem)

const MediaObjectContent = createComp(Box)({
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
