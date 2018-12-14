import styled from 'react-emotion'
import { system } from 'pss'
import { Base } from '../base'

const BorderBox = styled(Base)`
  box-sizing: border-box;
`

BorderBox.displayName = 'BorderBox'
BorderBox.propTypes = { ...Base.propTypes }

const Box = styled(BorderBox)(system)

Box.displayName = 'Box'
Box.propTypes = { ...BorderBox.propTypes, ...system.propTypes }

export {
  Box,
  BorderBox
}
