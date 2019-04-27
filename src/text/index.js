import styled from '@emotion/styled'
import { combineStyles, text, textStyle, themePath } from 'pss'
import { createBase, blacklistOf } from '../utils'
import { Box } from '../box'

const styles = combineStyles(
  textStyle.variant,
  text
)

const TextBase = createBase(Box, {
  blacklist: blacklistOf(styles)
})

const Text = styled(TextBase)(
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
