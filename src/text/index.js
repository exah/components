import styled from '@emotion/styled'
import { createVariant, text, TEXT_STYLE_KEY } from 'pss'
import { Box } from '../box'

const variant = createVariant({
  themeKey: TEXT_STYLE_KEY
})

const Text = styled(Box)(
  variant,
  text
)

Text.displayName = 'Text'

Text.propTypes = {
  ...variant.propTypes,
  ...text.propTypes,
  ...Box.propTypes
}

export {
  Text
}
