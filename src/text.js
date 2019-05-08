import use from 'reuse'
import styled from '@emotion/styled'
import { combineStyles, text, textStyle, themePath } from 'pss'
import { Box } from './box'
import { base, omitStyles } from './utils'

const styles = combineStyles(
  textStyle.variant,
  text
)

const TextBase = base({
  name: 'Base(Text)',
  filter: omitStyles(styles)
})

const Text = styled(use(TextBase, Box))(
  {
    color: 'inherit',
    font: 'inherit',
    textDecoration: 'none'
  },
  themePath('Text'),
  styles
)

Text.displayName = 'Text'
Text.propTypes = { ...styles.propTypes, ...Box.propTypes }

export {
  Text
}
