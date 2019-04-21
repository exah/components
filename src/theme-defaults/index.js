import { ThemeProvider, withTheme } from 'emotion-theming'
import { compose } from '@exah/utils'
import { withProps } from '../utils'

const mergeTheme = withProps(({ theme, children, ...rest }) => ({
  theme: {
    default: {
      ...theme.default,
      ...rest
    }
  }
}))

export const ThemeDefaultsProvider = compose(
  withTheme,
  mergeTheme
)(ThemeProvider)

ThemeDefaultsProvider.displayName = 'ThemeDefaultsProvider'
