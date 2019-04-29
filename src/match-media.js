import PropTypes from 'prop-types'
import React, { createContext, useEffect, useState, useContext } from 'react'
import { reduceObj } from '@exah/utils'
import { useTheme } from './utils'

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

  useEffect(() => {
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
  const theme = useTheme()
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

const withMatchMedia = (Comp) => (props) => (
  <MatchMediaConsumer>
    {(matchMedia) => <Comp matchMedia={matchMedia} {...props} />}
  </MatchMediaConsumer>
)

export {
  MatchMediaContext,
  MatchMediaProvider,
  MatchMediaConsumer,
  useMatchMediaContext,
  withMatchMedia
}
