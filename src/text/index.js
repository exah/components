import styled from '@emotion/styled'
import { base, typography } from 'pss'
import { BorderBox } from '../box'

const Text = styled(BorderBox)(base, typography)

Text.displayName = 'Text'

Text.propTypes = {
  ...BorderBox.propTypes,
  ...base.propTypes,
  ...typography.propTypes
}

export {
  Text
}
