import { flex, flexItem } from 'pss'
import styled from '@emotion/styled'
import { Box } from '../box'

const FlexBox = styled(Box)({ display: 'flex' }, flex, flexItem)

FlexBox.displayName = 'FlexBox'

FlexBox.propTypes = {
  ...Box.propTypes,
  ...flex.propTypes
}

FlexBox.Item = Box // COMPAT

export {
  FlexBox
}
