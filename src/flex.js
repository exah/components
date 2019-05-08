import use from 'reuse'
import styled from '@emotion/styled'

import {
  combineStyles,
  gap,
  flexContainer,
  boxContentAlignment,
  boxItemsAlignment,
  themePath
} from 'pss'

import { base, omitStyles } from './utils'
import { Box } from './box'

const styles = combineStyles(
  gap,
  flexContainer,
  boxContentAlignment,
  boxItemsAlignment
)

const FlexBase = base({
  name: 'Base(Flex)',
  filter: omitStyles(styles)
})

const Flex = styled(use(FlexBase, Box))(
  themePath('Flex'),
  styles
)

Flex.displayName = 'Flex'
Flex.propTypes = { ...styles.propTypes, ...Box.propTypes }
Flex.defaultProps = { display: 'flex' }

export {
  Flex
}
