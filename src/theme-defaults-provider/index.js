import { ThemeProvider, withTheme } from 'emotion-theming'
import { compose, withProps } from '../utils'

const ThemeDefaultsProvider = compose(
  withTheme,
  withProps(({ theme, ...rest }) => ({
    theme: {
      default: {
        ...theme.default,
        ...rest
      }
    }
  }))
)(ThemeProvider)

export {
  ThemeDefaultsProvider
}
