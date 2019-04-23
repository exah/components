/* eslint-env jest */

import renderer from 'react-test-renderer'
import { ThemeProvider } from 'emotion-theming'
import React, { Fragment } from 'react'
import { initArr } from '@exah/utils'
import { theme, themeWithRems } from '../.internal/theme'

import {
  Box,
  CurrentMediaProvider,
  Feed,
  Flex,
  FlexGrid,
  Grid,
  Image,
  Layout,
  Media,
  Text
} from '../src'

const renderJSON = (element) =>
  renderer.create(element).toJSON()

test('Box', () => {
  const result = renderJSON(
    <Box height='300px' mx='auto' bg='#000' fg='#fff'>
      Box
    </Box>
  )

  expect(result).toMatchSnapshot()
})

test('Flex', () => {
  const result = renderJSON(
    <Flex tm width={(1 / 2)} justifyContent='space-between'>
      <Box>Item</Box>
      <Box mx='auto'>Item</Box>
      <Box flex='0 1'>Item</Box>
    </Flex>
  )

  expect(result).toMatchSnapshot()
})

test('Layout', () => {
  const result = renderJSON(
    <Layout>
      <Box as='header'>
        Header
      </Box>
      <Layout.Content as='main'>
        Main
      </Layout.Content>
      <Box as='footer'>
        Footer
      </Box>
    </Layout>
  )

  expect(result).toMatchSnapshot()
})

test('Media', () => {
  const result = renderJSON(
    <Media>
      <Media.Side>
        Side
      </Media.Side>
      <Media.Content>
        Content
      </Media.Content>
    </Media>
  )

  expect(result).toMatchSnapshot()
})

describe('FlexGrid', () => {
  const renderFlexGridItems = (length, col) => initArr(length, (index) => (
    <FlexGrid.Item column={col} key={index}>
      <Box>
        {col}
      </Box>
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

describe('Grid', () => {
  const renderGridItems = (length, col, row) => initArr(length, (index) => (
    <Grid.Item column={col} row={row} key={index}>
      {col}
    </Grid.Item>
  ))

  test('basic', () => {
    const result = renderJSON(
      <ThemeProvider theme={theme}>
        <Grid templateColumns='repeat(12, 1fr)'>
          {renderGridItems(12, 'span 1', 1)}
          {renderGridItems(6, 'span 2', 2)}
          {renderGridItems(3, 'span 4', 3)}
        </Grid>
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
      <Feed column={3}>
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
          <Feed space={2} column={{ all: 3, md: 6, sm: 12 }}>
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
