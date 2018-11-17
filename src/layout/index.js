import styled from 'react-emotion'
import { flexItem } from 'pss'
import { defaultProps, withDisplayName } from '../utils'
import { FlexBox, FlexBoxItem } from '../flex-box'

const withLayoutProps = defaultProps({
  column: true,
  minHt: true
})

const withLayoutContentProps = defaultProps({
  grow: 1,
  shrink: 1,
  basis: '100%'
})

const Layout = withDisplayName(
  withLayoutProps(FlexBox),
  'Layout'
)

const LayoutContent = withDisplayName(
  withLayoutContentProps(FlexBoxItem),
  'LayoutContent'
)

const LayoutBody = withDisplayName(
  withLayoutContentProps(styled(FlexBox)(flexItem)),
  'LayoutBody'
)

Object.assign(Layout, {
  Content: LayoutContent,
  Item: FlexBoxItem,
  Body: LayoutBody
})

export {
  Layout,
  FlexBoxItem as LayoutItem,
  LayoutContent,
  LayoutBody
}
