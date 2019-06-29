import { ThemeProvider } from 'emotion-theming'
import React from 'react'
import { renderJSON, anyClassName } from '../.internal/helpers'
import { theme } from '../.internal/theme'
import { Text } from '../src'

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
        <Text variant='auto'>Hello</Text>
      </ThemeProvider>
    )

    expect(result).toMatchSnapshot()
  })

  test('as selector', () => {
    expect(`${Text}`).toEqual(anyClassName)
  })
})
