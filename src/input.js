import styled from '@emotion/styled'
import { themePath, variant } from 'pss'
import { getPropTypes } from 'pss/prop-type'
import { Box } from './box'

const inputStyle = variant({
  themeKey: 'inputStyle'
})

const Input = styled(Box)(
  {
    appearance: 'none',
    '&[disabled]': {
      '-webkit-text-fill-color': 'currentColor',
      '-webkit-opacity': 1
    }
  },
  themePath('Input'),
  inputStyle
)

Input.displayName = 'Input'

Input.propTypes = {
  ...getPropTypes(inputStyle),
  ...Box.propTypes
}

Input.defaultProps = {
  as: 'input',
  width: '100%',
  borderRadius: 0
}

export {
  Input
}
