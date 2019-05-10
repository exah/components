import use from 'reuse'
import styled from '@emotion/styled'
import { themePath } from 'pss'
import { Text } from './text'

const LinkBase = styled(use('a'))(
  { color: 'inherit', textDecoration: 'none' },
  themePath('Link')
)

const Link = use(Text, LinkBase)

Link.displayName = 'Link'
Link.propTypes = { ...Text.propTypes }
Link.defaultProps = { ...Text.defaultProps, color: 'link' }

export {
  Link
}
