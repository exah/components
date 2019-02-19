import styled from '@emotion/styled'
import { system } from 'pss'
import { Base } from '../base'

const BorderBox = styled(Base)(
  { boxSizing: 'border-box' },
  (props) => props.css
)

BorderBox.displayName = 'BorderBox'
BorderBox.propTypes = { ...Base.propTypes }

const Box = styled(BorderBox)(system)

Box.displayName = 'Box'
Box.propTypes = { ...BorderBox.propTypes, ...system.propTypes }

export {
  Box,
  BorderBox
}
