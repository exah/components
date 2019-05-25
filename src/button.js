import styled from '@emotion/styled'
import { themePath, variant } from 'pss'
import { Box } from './box'

const buttonVariant = variant({
  themeKey: 'buttonVariant'
})

const Button = styled(Box)(
  {
    appearance: 'none',
    textAlign: 'center',
    textDecoration: 'none',
    cursor: 'pointer',
    '&[disabled]': {
      cursor: 'auto',
      pointerEvents: 'none'
    }
  },
  themePath('Button'),
  buttonVariant
)

Button.displayName = 'Button'

Button.propTypes = {
  ...buttonVariant.propTypes,
  ...Box.propTypes
}

Button.defaultProps = {
  as: 'button',
  display: 'inline-block'
}

export {
  Button
}
