import PropTypes from 'prop-types'
import React, { createContext, useLayoutEffect, useState, useContext } from 'react'
import { ThemeContext } from '@emotion/core'
import { reduceObj } from '@exah/utils'

const listenForChanges = (target, fn) => {
  fn()

  target.addListener(fn)
  return () => target.removeListener(fn)
}

const INITIAL_STATE = {
  currentMediaKey: []
}

const CurrentMediaContext = createContext(INITIAL_STATE)
const { Provider, Consumer } = CurrentMediaContext

const updateCurrentMedia = (key, mql) => (currentMediaKey) => {
  if (mql.matches) {
    return [ ...currentMediaKey, key ]
  }

  return currentMediaKey.filter((item) => item !== key)
}

function CurrentMediaProvider (props) {
  const theme = useContext(ThemeContext)
  const [ currentMediaKey, setCurrentMedia ] = useState(INITIAL_STATE.currentMediaKey)
  const media = props.media || theme.media

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
      {props.children}
    </Provider>
  )
}

CurrentMediaProvider.propTypes = {
  theme: PropTypes.shape({ media: PropTypes.object }),
  media: PropTypes.object
}

function useCurrentMedia () {
  return useContext(CurrentMediaContext)
}

const withCurrentMedia = (Comp) => {
  const HOC = (props) => (
    <Comp
      {...props}
      {...useCurrentMedia()}
    />
  )

  HOC.displayName = `withCurrentMedia(${Comp.displayName || 'Component'})`
  return HOC
}

export {
  CurrentMediaContext,
  CurrentMediaProvider,
  Consumer as CurrentMediaConsumer,
  withCurrentMedia,
  useCurrentMedia
}
