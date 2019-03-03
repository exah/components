import { ThemeProvider, withTheme } from 'emotion-theming'
import { DEFAULT_KEY } from 'pss'
import { compose, path } from '@exah/utils'
import { defaultProps, withProps, getDisplayName } from '../utils'

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

export const withThemeDefaults = (key, Comp) => {
  const HOC = compose(
    withTheme,
    defaultProps(path([ 'theme', DEFAULT_KEY, key ]))
  )(Comp)

  Comp.displayName = getDisplayName(Comp, key)
  HOC.displayName = `withThemeDefaults(${Comp.displayName})`
  return HOC
}
