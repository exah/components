import test from 'ava'
import { ThemeProvider } from 'emotion-theming'
import React, { Fragment } from 'react'
import { theme } from '../src/theme'
import { Box, FlexBox, Layout, MediaObject, Grid } from '../src'
import { renderJSON } from './_helpers.js'

test('Box', (t) => {
  const result = renderJSON(
    <Box ht='300' mgx='auto' bg='#000' fg='#fff'>
      Box
    </Box>
  )

  t.snapshot(result)
})

test('FlexBox', (t) => {
  const result = renderJSON(
    <FlexBox tm wd={(1 / 2)} justify='space-between'>
      <FlexBox.Item>Item</FlexBox.Item>
      <FlexBox.Item mgx='auto'>Item</FlexBox.Item>
      <FlexBox.Item shrink>Item</FlexBox.Item>
    </FlexBox>
  )

  t.snapshot(result)
})

test('Layout', (t) => {
  const result = renderJSON(
    <Layout>
      <Layout.Item comp='header'>
        Header
      </Layout.Item>
      <Layout.Content comp='main'>
        Main
      </Layout.Content>
      <Layout.Item comp='footer'>
        Footer
      </Layout.Item>
    </Layout>
  )

  t.snapshot(result)
})

test('MediaObject', (t) => {
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

  t.snapshot(result)
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

test('Grid → Basic', (t) => {
  const result = renderJSON(
    <ThemeProvider theme={theme}>
      <Fragment>
        <Grid>
          {renderGridItems(12, 1)}
        </Grid>
      </Fragment>
    </ThemeProvider>
  )

  t.snapshot(result)
})

test('Grid → Vertical and Horizontal Space', (t) => {
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

  t.snapshot(result)
})
