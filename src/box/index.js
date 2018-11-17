import { system } from 'pss'
import styled from 'react-emotion'
import { Base } from '../base'

const BaseBox = styled(Base)`
  box-sizing: border-box;
`

const Box = styled(BaseBox)(system)

export {
  Box,
  BaseBox
}
