/* eslint-env jest */

import renderer from 'react-test-renderer'
import { ThemeProvider } from 'emotion-theming'
import React, { Fragment } from 'react'
import { initArr } from '@exah/utils'
import { theme, themeWithRems } from '../src/theme'

import {
  Box,
  FlexBox,
  Layout,
  CurrentMediaProvider,
  MediaObject,
  FlexGrid,
  Feed,
  Text,
  Image
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

describe('FlexGrid', () => {
  const renderFlexGridItems = (length, col) => initArr(length, (index) => (
    <FlexGrid.Item col={col} key={index}>
      <FlexGrid.Content>
        {col}
      </FlexGrid.Content>
    </FlexGrid.Item>
  ))

  test('basic', () => {
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

  test('vertical and horizontal space', () => {
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

  test('rem spaces', () => {
    const result = renderJSON(
      <ThemeProvider theme={themeWithRems}>
        <Fragment>
          <FlexGrid space={2}>
            {renderFlexGridItems(12, 1)}
          </FlexGrid>
        </Fragment>
      </ThemeProvider>
    )

    expect(result).toMatchSnapshot()
  })

  test('non-integer rem spaces', () => {
    const result = renderJSON(
      <ThemeProvider theme={themeWithRems}>
        <Fragment>
          <FlexGrid space={1}>
            {renderFlexGridItems(12, 1)}
          </FlexGrid>
        </Fragment>
      </ThemeProvider>
    )
    expect(result).toMatchSnapshot()
  })

  test('non-integer space', () => {
    const result = renderJSON(
      <ThemeProvider theme={themeWithRems}>
        <Fragment>
          <FlexGrid space='2px'>
            {renderFlexGridItems(12, 1)}
          </FlexGrid>
        </Fragment>
      </ThemeProvider>
    )
    expect(result).toMatchSnapshot()
  })
})

describe('Feed', () => {
  beforeAll(() => {
    Object.defineProperty(window, 'matchMedia', {
      value: jest.fn(() => ({
        matches: true,
        addListener () {},
        removeListener () {}
      }))
    })
  })

  test('empty', () => {
    const result = renderJSON(<Feed />)

    expect(result).toMatchSnapshot()
  })

  test('basic', () => {
    const result = renderJSON(
      <Feed col={3}>
        <Feed.Item>
          Item
        </Feed.Item>
        <Feed.Item>
          Item
        </Feed.Item>
        <Feed.Item>
          Item
        </Feed.Item>
      </Feed>
    )

    expect(result).toMatchSnapshot()
  })

  test('with theme', () => {
    const result = renderJSON(
      <ThemeProvider theme={theme}>
        <CurrentMediaProvider>
          <Feed space={2} col={{ all: 3, md: 6, sm: 12 }}>
            <Feed.Item>
              Item
            </Feed.Item>
          </Feed>
        </CurrentMediaProvider>
      </ThemeProvider>
    )

    expect(result).toMatchSnapshot()
  })
})

describe('Text', () => {
  test('empty', () => {
    const result = renderJSON(<Text />)

    expect(result).toMatchSnapshot()
  })

  test('with text', () => {
    const result = renderJSON(<Text>Hello</Text>)

    expect(result).toMatchSnapshot()
  })

  test('with theme', () => {
    const result = renderJSON(
      <ThemeProvider theme={theme}>
        <Text variant>Hello</Text>
      </ThemeProvider>
    )

    expect(result).toMatchSnapshot()
  })
})

describe('Image', () => {
  test('empty', () => {
    const result = renderJSON(<Image />)

    expect(result).toMatchSnapshot()
  })

  test('with image', () => {
    const result = renderJSON(
      <Image
        src='http://placekitten.com/500'
        width={1 / 2}
        alt=''
      />
    )

    expect(result).toMatchSnapshot()
  })
})
