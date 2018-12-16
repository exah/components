/* eslint-env jest */

import renderer from 'react-test-renderer'
import { ThemeProvider } from 'emotion-theming'
import React, { Fragment } from 'react'
import { theme } from '../src/theme'

import {
  Box,
  FlexBox,
  Layout,
  MediaObject,
  FlexGrid
} from '../src'

const renderJSON = (element) =>
  renderer.create(element).toJSON()

test('Box', () => {
  const result = renderJSON(
    <Box height='300px' mgx='auto' bg='#000' fg='#fff'>
      Box
    </Box>
  )

  expect(result).toMatchSnapshot()
})

test('FlexBox', () => {
  const result = renderJSON(
    <FlexBox tm width={(1 / 2)} justifyContent='space-between'>
      <FlexBox.Item>Item</FlexBox.Item>
      <FlexBox.Item mgx='auto'>Item</FlexBox.Item>
      <FlexBox.Item flex='0 1'>Item</FlexBox.Item>
    </FlexBox>
  )

  expect(result).toMatchSnapshot()
})

test('Layout', () => {
  const result = renderJSON(
    <Layout>
      <Layout.Item as='header'>
        Header
      </Layout.Item>
      <Layout.Content as='main'>
        Main
      </Layout.Content>
      <Layout.Item as='footer'>
        Footer
      </Layout.Item>
    </Layout>
  )

  expect(result).toMatchSnapshot()
})

test('MediaObject', () => {
  const result = renderJSON(
    <MediaObject>
      <MediaObject.Side>
        Side
      </MediaObject.Side>
      <MediaObject.Content>
        Content
      </MediaObject.Content>
    </MediaObject>
  )

  expect(result).toMatchSnapshot()
})

const renderFlexGridItems = (length, col) =>
  Array.from({ length })
    .fill(true)
    .map((_, index) => (
      <FlexGrid.Item col={col} key={index}>
        <FlexGrid.Content>
          {col}
        </FlexGrid.Content>
      </FlexGrid.Item>
    ))

test('FlexGrid / Basic', () => {
  const result = renderJSON(
    <ThemeProvider theme={theme}>
      <Fragment>
        <FlexGrid>
          {renderFlexGridItems(12, 1)}
        </FlexGrid>
      </Fragment>
    </ThemeProvider>
  )

  expect(result).toMatchSnapshot()
})

test('FlexGrid / Vertical and Horizontal Space', () => {
  const result = renderJSON(
    <ThemeProvider theme={theme}>
      <FlexGrid space={2}>
        {renderFlexGridItems(12, 1)}
        {renderFlexGridItems(6, 2)}
        {renderFlexGridItems(4, 3)}
        {renderFlexGridItems(3, 4)}
        {renderFlexGridItems(2, 6)}
        {renderFlexGridItems(1, 12)}
      </FlexGrid>
    </ThemeProvider>
  )

  expect(result).toMatchSnapshot()
})
