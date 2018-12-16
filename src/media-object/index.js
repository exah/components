import { compose } from '@exah/utils'
import { defaultProps, withDisplayName, withPropTypes } from '../utils'
import { FlexBox, FlexBoxItem } from '../flex-box'

const MediaObject = compose(
  withDisplayName('MediaObject'),
  withPropTypes(FlexBox),
  defaultProps({ alignItems: 'flex-start' })
)(FlexBox)

const MediaObjectSide = compose(
  withDisplayName('MediaObject.Side'),
  withPropTypes(FlexBoxItem),
  defaultProps({ flex: '0 0' })
)(FlexBoxItem)

const MediaObjectContent = compose(
  withDisplayName('MediaObject.Content'),
  withPropTypes(FlexBoxItem),
  defaultProps({ flex: '1', minWidth: 0 })
)(FlexBoxItem)

Object.assign(MediaObject, {
  Side: MediaObjectSide,
  Content: MediaObjectContent
})

export {
  MediaObject,
  MediaObjectSide,
  MediaObjectContent
}
