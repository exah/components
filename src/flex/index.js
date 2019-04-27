import styled from '@emotion/styled'

import {
  combineStyles,
  gap,
  flexContainer,
  boxContentAlignment,
  boxItemsAlignment,
  themePath
} from 'pss'

import { Box } from '../box'

const styles = combineStyles(
  gap,
  flexContainer,
  boxContentAlignment,
  boxItemsAlignment
)

const Flex = styled(Box)(
  themePath('Flex'),
  styles
)

Flex.displayName = 'Flex'
Flex.propTypes = { ...styles.propTypes, ...Box.propTypes }
Flex.defaultProps = { display: 'flex' }

export {
  Flex
}
