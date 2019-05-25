import styled from '@emotion/styled'
import { combineStyles, text, textStyle, themePath } from 'pss'
import { Box } from './box'
import { base, omitStyles } from './utils'

const styles = combineStyles(
  textStyle.variant,
  text
)

const BaseText = base({
  use: Box,
  name: 'Text',
  filter: omitStyles(styles)
})

const Text = styled(BaseText)(
  themePath('Text'),
  styles
)

Text.displayName = 'Text'

Text.propTypes = {
  ...styles.propTypes,
  ...Box.propTypes
}

export {
  Text
}
