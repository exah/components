import { ThemeProvider, withTheme } from 'emotion-theming'
import { compose } from '@exah/utils'
import { withProps } from '../utils'

const mergeTheme = withProps(({ theme, ...rest }) => ({
  theme: {
    default: {
      ...theme.default,
      ...rest
    }
  }
}))

const ThemeDefaultsProvider = compose(
  withTheme,
  mergeTheme
)(ThemeProvider)

ThemeDefaultsProvider.displayName = 'ThemeDefaultsProvider'

export {
  ThemeDefaultsProvider
}
