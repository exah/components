import styled from '@emotion/styled'
import { text, textStyle } from 'pss'
import { createBase, blacklistOf } from '../utils'
import { Box } from '../box'

const TextBase = createBase(Box, {
  blacklist: blacklistOf(text)
})

const Text = styled(TextBase)(
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
