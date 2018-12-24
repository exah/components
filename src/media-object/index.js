import { compose } from '@exah/utils'
import { defaultProps, withDisplayName, withPropTypes } from '../utils'
import { FlexBox } from '../flex-box'
import { Box } from '../box'

const MediaObject = compose(
  withDisplayName('MediaObject'),
  withPropTypes(FlexBox),
  defaultProps({ alignItems: 'flex-start' })
)(FlexBox)

const MediaObjectSide = compose(
  withDisplayName('MediaObject.Side'),
  withPropTypes(Box),
  defaultProps({ flex: '0 0 auto' })
)(Box)

const MediaObjectContent = compose(
  withDisplayName('MediaObject.Content'),
  withPropTypes(Box),
  defaultProps({ flex: '1', minWidth: 0 })
)(Box)

Object.assign(MediaObject, {
  Side: MediaObjectSide,
  Content: MediaObjectContent
})

export {
  MediaObject,
  MediaObjectSide,
  MediaObjectContent
}
