import styled from '@emotion/styled'
import { createVariant, base, typography, TEXT_STYLE_KEY } from 'pss'
import { BorderBox } from '../box'

const variant = createVariant({
  themeKey: TEXT_STYLE_KEY
})

const Text = styled(BorderBox)(
  variant,
  base,
  typography
)

Text.displayName = 'Text'

Text.propTypes = {
  ...BorderBox.propTypes,
  ...base.propTypes,
  ...typography.propTypes,
  ...variant.propTypes
}

export {
  Text
}
