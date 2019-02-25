import styled from '@emotion/styled'
import { text, textStyle } from 'pss'
import { Box } from '../box'

const Text = styled(Box)(
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
