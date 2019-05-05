import React, { useMemo } from 'react'
import { useMatchMedia } from './match-media'
import { ThemeDefaults } from './theme-defaults'

export function usePrefersColorScheme (scheme) {
  const match = useMatchMedia(useMemo(() => ({
    [scheme]: `(prefers-color-scheme: ${scheme})`
  }), [ scheme ]))

  return match.key === scheme
}

export function ThemeDefaultsForColorScheme ({ scheme, children, ...rest }) {
  const isPreferable = usePrefersColorScheme(scheme)

  return (
    <ThemeDefaults {...isPreferable && rest}>
      {children}
    </ThemeDefaults>
  )
}
