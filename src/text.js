import styled from '@emotion/styled'
import { combineStyles, text, textStyle, themePath } from 'pss'
import { Box } from './box'
import { useBase, omitStyles } from './utils'

const styles = combineStyles(
  textStyle.variant,
  text
)

const BaseText = useBase({
  name: 'Text',
  filter: omitStyles(styles)
}, Box)

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
