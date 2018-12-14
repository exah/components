import PropTypes from 'prop-types'
import React, { createContext, Component } from 'react'
import { withTheme } from 'emotion-theming'

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
  setCurrentMedia = (mediaKey, mediaQueryList) => {
    this.setState((prevState) => {
      const nextMediaKey = prevState.currentMediaKey.slice(0)

      if (mediaQueryList.matches) {
        nextMediaKey.push(mediaKey)
      } else {
        const index = nextMediaKey.indexOf(mediaKey)
        if (index === -1) return
        nextMediaKey.splice(index, 1)
      }

      return {
        currentMediaKey: nextMediaKey
      }
    })
  }
  componentDidMount () {
    const { media, theme } = this.props

    const mediaList = Object.entries(media || theme.media || {}).map(
      ([ mediaKey, mediaQuery ]) => [ mediaKey, window.matchMedia(mediaQuery) ]
    )

    this.listeners = mediaList.map(([ mediaKey, mediaQueryList ]) => {
      this.setCurrentMedia(mediaKey, mediaQueryList)
      const listener = () => this.setCurrentMedia(mediaKey, mediaQueryList)

      mediaQueryList.addListener(listener)
      return () => mediaQueryList.removeListener(listener)
    })
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
