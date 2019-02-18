import PropTypes from 'prop-types'
import React, { createContext, useLayoutEffect, useState } from 'react'
import { withTheme } from 'emotion-theming'
import { reduceObj } from '@exah/utils'
import { withDisplayName } from '../utils'

const listenForChanges = (target, fn) => {
  fn()

  target.addListener(fn)
  return () => target.removeListener(fn)
}

const INITIAL_STATE = {
  currentMediaKey: []
}

const Context = createContext(INITIAL_STATE)
const { Provider, Consumer } = Context

const updateCurrentMedia = (key, mql) => (currentMediaKey) => {
  if (mql.matches) {
    return [ ...currentMediaKey, key ]
  }

  return currentMediaKey.filter((item) => item !== key)
}

function CurrentMediaProvider ({
  theme = {},
  media = theme.media || {},
  children
}) {
  const [ currentMediaKey, setCurrentMedia ] = useState(INITIAL_STATE.currentMediaKey)

  useLayoutEffect(() => {
    const listeners = reduceObj((acc, key, query) => {
      const mql = window.matchMedia(query)
      const listener = () => setCurrentMedia(updateCurrentMedia(key, mql))

      return [ ...acc, listenForChanges(mql, listener) ]
    }, [])(media || {})

    return () => listeners.map((fn) => fn())
  }, [ media ])

  return (
    <Provider value={{ currentMediaKey }}>
      {children}
    </Provider>
  )
}

CurrentMediaProvider.propTypes = {
  theme: PropTypes.shape({ media: PropTypes.object }),
  media: PropTypes.object
}

const CurrentMediaProviderWithTheme = withTheme(CurrentMediaProvider)

const withCurrentMedia = (Comp) => {
  const HOC = (props) => (
    <Consumer>
      {(state) => <Comp {...state} {...props} />}
    </Consumer>
  )

  return withDisplayName(`withCurrentMedia(${Comp.displayName || 'Component'})`)(HOC)
}

export {
  Context as CurrentMediaContext,
  CurrentMediaProviderWithTheme as CurrentMediaProvider,
  Consumer as CurrentMediaConsumer,
  withCurrentMedia
}
