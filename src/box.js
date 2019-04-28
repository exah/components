import styled from '@emotion/styled'
import { box, boxStyle, themePath } from 'pss'
import { createBase, blacklistOf } from './utils'

const BoxBase = createBase('div', {
  blacklist: blacklistOf(box)
})

const Box = styled(BoxBase)(
  themePath('Box', {
    boxSizing: 'border-box',
    margin: 0,
    padding: 0,
    minWidth: 0
  }),
  boxStyle,
  box
)

Box.displayName = 'Box'

Box.propTypes = {
  ...BoxBase.propTypes,
  ...boxStyle.propTypes,
  ...box.propTypes
}

export {
  Box
}
