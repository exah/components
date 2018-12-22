import { compose } from '@exah/utils'
import { defaultProps, withDisplayName, withPropTypes } from '../utils'
import { FlexBox } from '../flex-box'
import { Box } from '../box'

const withLayoutProps = defaultProps({
  flexDirection: 'column',
  minHeight: '100%'
})

const withLayoutContentProps = defaultProps({
  flex: '1 1 100%'
})

const Layout = compose(
  withDisplayName('Layout'),
  withPropTypes(FlexBox),
  withLayoutProps
)(FlexBox)

const LayoutContent = compose(
  withDisplayName('Layout.Content'),
  withPropTypes(Box),
  withLayoutContentProps
)(Box)

const LayoutBody = compose(
  withDisplayName('Layout.Body'),
  withPropTypes(FlexBox),
  withLayoutContentProps
)(FlexBox)

Object.assign(Layout, {
  Content: LayoutContent,
  Item: Box,
  Body: LayoutBody
})

export {
  Layout,
  Box as LayoutItem,
  LayoutContent,
  LayoutBody
}
