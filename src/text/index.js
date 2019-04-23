import styled from '@emotion/styled'
import { css } from '@emotion/core'
import { text, textStyle } from 'pss'
import { createBase, blacklistOf } from '../utils'
import { Box } from '../box'

const reset = css`
  color: inherit;
  font: inherit;
  text-decoration: none;
`

const TextBase = createBase(Box, {
  blacklist: blacklistOf(text)
})

const Text = styled(TextBase)(
  reset,
  textStyle.variant,
  text
)

Text.displayName = 'Text'

Text.propTypes = {
  ...textStyle.variant.propTypes,
  ...text.propTypes,
  ...Box.propTypes
}

export {
  Text
}
