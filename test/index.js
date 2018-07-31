import test from 'ava'
import React from 'react'
import { Box, FlexBox, Layout, MediaObject } from '../src'
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
      <Layout.Header>
        Header
      </Layout.Header>
      <Layout.Main>
        Main
      </Layout.Main>
      <Layout.Footer>
        Footer
      </Layout.Footer>
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
