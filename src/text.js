import use from 'reuse'
import styled from '@emotion/styled'
import { combineStyles, text, textStyle, themePath } from 'pss'
import { omitStyles } from './utils'
import { base } from './base'
import { Box } from './box'

const styles = combineStyles(
  textStyle.variant,
  text
)

const TextBase = base({
  filter: omitStyles(styles)
})

const Text = styled(use(TextBase, Box))(
  themePath('Text', {
    color: 'inherit',
    font: 'inherit',
    textDecoration: 'none'
  }),
  styles
)

Text.displayName = 'Text'
Text.propTypes = { ...styles.propTypes, ...Box.propTypes }

export {
  Text
}
