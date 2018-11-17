/* eslint-env jest */

import expect from 'expect'
import { ThemeProvider } from 'emotion-theming'
import React, { Fragment } from 'react'
import renderer from 'react-test-renderer'
import { theme } from '../src/theme'
import { Box, FlexBox, Layout, MediaObject, Grid } from '../src'

const renderJSON = (element) =>
  renderer.create(element).toJSON()

test('Box', () => {
  const result = renderJSON(
    <Box ht='300' mgx='auto' bg='#000' fg='#fff'>
      Box
    </Box>
  )

  expect(result).toMatchSnapshot()
})

test('FlexBox', () => {
  const result = renderJSON(
    <FlexBox tm wd={(1 / 2)} justify='space-between'>
      <FlexBox.Item>Item</FlexBox.Item>
      <FlexBox.Item mgx='auto'>Item</FlexBox.Item>
      <FlexBox.Item shrink>Item</FlexBox.Item>
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

const renderGridItems = (length, col) =>
  Array.from({ length })
    .fill(true)
    .map((_, index) => (
      <Grid.Item col={col} key={index}>
        <Grid.Content>
          {col}
        </Grid.Content>
      </Grid.Item>
    ))

test('Grid → Basic', () => {
  const result = renderJSON(
    <ThemeProvider theme={theme}>
      <Fragment>
        <Grid>
          {renderGridItems(12, 1)}
        </Grid>
      </Fragment>
    </ThemeProvider>
  )

  expect(result).toMatchSnapshot()
})

test('Grid → Vertical and Horizontal Space', () => {
  const result = renderJSON(
    <ThemeProvider theme={theme}>
      <Grid space={2}>
        {renderGridItems(12, 1)}
        {renderGridItems(6, 2)}
        {renderGridItems(4, 3)}
        {renderGridItems(3, 4)}
        {renderGridItems(2, 6)}
        {renderGridItems(1, 12)}
      </Grid>
    </ThemeProvider>
  )

  expect(result).toMatchSnapshot()
})
