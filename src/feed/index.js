import React, { PureComponent } from 'react'
import { withTheme } from 'emotion-theming'
import { compose } from '@exah/utils'
import { withCurrentMedia } from '../current-media-provider'
import { FlexGrid, FlexGridItem, FlexGridContent } from '../flex-grid'

const groupChildren = (children = [], length = 3) => {
  const placeholder = [ ...Array(length) ].map(() => [])
  return children.reduce((groups, value, index) => {
    const key = Math.floor(index % length)

    if (groups[key]) {
      groups[key].push(value)
    }

    return groups
  }, placeholder)
}

class FeedContainer extends PureComponent {
  static defaultProps = {
    theme: { grid: 12 },
    spaceContent: true,
    currentMediaKey: []
  }
  static getDerivedStateFromProps (props, state) {
    const [ mediaKey = '' ] = props.currentMediaKey

    if (mediaKey === state.mediaKey) {
      return null
    }

    const col = props['col' + mediaKey] || props.col
    const size = (props.theme.grid / col)

    if (size === state.size) {
      return null
    }

    return {
      size,
      mediaKey
    }
  }
  state = {
    isMounted: false,
    size: null,
    mediaKey: ''
  }
  componentDidMount () {
    this.setState({
      isMounted: true
    })
  }
  render () {
    const { children, ...rest } = this.props
    const { isMounted, size } = this.state

    const childrenArr = React.Children.toArray(children)
    const childrenGroups = isMounted && size !== 1
      ? groupChildren(childrenArr, size)
      : childrenArr

    return (
      <FlexGrid {...rest}>
        {childrenGroups.map((child, index) => (
          <FlexGridItem key={`feed-item-${index}`} {...rest}>
            {child}
          </FlexGridItem>
        ))}
      </FlexGrid>
    )
  }
}

const Feed = compose(
  withCurrentMedia,
  withTheme
)(FeedContainer)

Feed.Item = FlexGridContent

export {
  Feed,
  FlexGridContent as FeedItem
}
