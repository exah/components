import styled from 'react-emotion'
import { base, typography } from 'pss'
import { BorderBox } from '../Box'

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
