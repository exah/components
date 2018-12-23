import PropTypes from 'prop-types'
import React, { createContext, Component } from 'react'
import { withTheme } from 'emotion-theming'
import { reduceObj } from '@exah/utils'

const listenForChanges = (target, fn) => {
  fn()

  target.addListener(fn)
  return () => target.removeListener(fn)
}

const INITIAL_STATE = {
  currentMediaKey: []
}

const { Provider, Consumer } = createContext(INITIAL_STATE)

class CurrentMediaProvider extends Component {
  static defaultProps = {
    theme: {},
    media: null
  }
  static propTypes = {
    theme: PropTypes.object.isRequired,
    media: PropTypes.object
  }
  state = INITIAL_STATE
  listeners = []
  setCurrentMedia = (key, mediaQueryList) => {
    this.setState((prevState) => {
      const nextMediaKey = prevState.currentMediaKey.slice(0)

      if (mediaQueryList.matches) {
        nextMediaKey.push(key)
      } else {
        const index = nextMediaKey.indexOf(key)
        if (index === -1) return
        nextMediaKey.splice(index, 1)
      }

      return {
        currentMediaKey: nextMediaKey
      }
    })
  }
  componentDidMount () {
    const media = this.props.media || this.props.theme.media || {}

    this.listeners = reduceObj((acc, key, query) => {
      const mediaQueryList = window.matchMedia(query)
      const listener = () => this.setCurrentMedia(key, mediaQueryList)

      return [ ...acc, listenForChanges(mediaQueryList, listener) ]
    }, [], media)
  }
  componentWillUnmount () {
    this.listeners.map((fn) => fn())
  }
  render () {
    return (
      <Provider value={this.state}>
        {this.props.children}
      </Provider>
    )
  }
}

const CurrentMediaProviderWithTheme = withTheme(CurrentMediaProvider)

const withCurrentMedia = (BaseComponent) => (props) => (
  <Consumer>
    {(state) => <BaseComponent {...state} {...props} />}
  </Consumer>
)

export {
  CurrentMediaProviderWithTheme as CurrentMediaProvider,
  Consumer as CurrentMediaConsumer,
  withCurrentMedia
}
