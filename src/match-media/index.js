import PropTypes from 'prop-types'
import React, { createContext, useLayoutEffect, useState, useContext } from 'react'
import { ThemeContext } from '@emotion/core'
import { reduceObj } from '@exah/utils'

function listenForChanges (target, fn) {
  fn()

  target.addListener(fn)
  return () => target.removeListener(fn)
}

const INITIAL = {
  matches: [],
  key: null
}

const MatchMediaContext = createContext(INITIAL)
const { Provider, Consumer: MatchMediaConsumer } = MatchMediaContext

export function useMatchMedia (media = {}) {
  const [ matches, setMatches ] = useState(INITIAL.matches)
  const [ key = INITIAL.key ] = matches

  useLayoutEffect(() => {
    const listeners = reduceObj((acc, mediaKey, query) => {
      const mql = window.matchMedia(query)

      const listener = () => setMatches((prev) =>
        mql.matches
          ? [ mediaKey, ...prev ]
          : prev.filter((item) => item !== mediaKey)
      )

      return [ ...acc, listenForChanges(mql, listener) ]
    }, [], media)

    return () => listeners.map((fn) => fn())
  }, [ media ])

  return { matches, key }
}

function MatchMediaProvider (props) {
  const theme = useContext(ThemeContext)
  const match = useMatchMedia(props.media || theme.media)

  return (
    <Provider value={match}>
      {props.children}
    </Provider>
  )
}

MatchMediaProvider.propTypes = {
  media: PropTypes.objectOf(PropTypes.string)
}

function useMatchMediaContext () {
  return useContext(MatchMediaContext)
}

export {
  MatchMediaContext,
  MatchMediaProvider,
  MatchMediaConsumer,
  useMatchMediaContext
}
