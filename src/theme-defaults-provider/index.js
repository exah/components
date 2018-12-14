import { ThemeProvider, withTheme } from 'emotion-theming'
import { compose } from '@exah/utils'
import { withProps, withDisplayName } from '../utils'

const mergeTheme = withProps(({ theme, ...rest }) => ({
  theme: {
    default: {
      ...theme.default,
      ...rest
    }
  }
}))

const ThemeDefaultsProvider = compose(
  withDisplayName('ThemeDefaultsProvider'),
  withTheme,
  mergeTheme
)(ThemeProvider)

export {
  ThemeDefaultsProvider
}
