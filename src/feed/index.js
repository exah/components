import React, { PureComponent } from 'react'
import { withTheme } from 'emotion-theming'
import { compose, fallbackTo, isObj } from '@exah/utils'
import { withCurrentMedia } from '../current-media-provider'
import { FlexGrid, FlexGridItem, FlexGridContent } from '../flex-grid'

const groupChildren = (children = [], length = 3) =>
  children.reduce((groups, value, index) => {
    const key = Math.floor(index % length)

    if (groups[key]) {
      groups[key].push(value)
    }

    return groups
  }, Array.from({ length }, () => []))

const getCol = (props, mediaKey) => isObj(props.col)
  ? fallbackTo(props.col[mediaKey], props.col.all, props.theme.grid)
  : (props.col || props.theme.grid)

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

    const col = getCol(props, mediaKey)
    const size = (props.theme.grid / col)

    if (size === state.size) {
      return null
    }

    return {
      col,
      size,
      mediaKey
    }
  }
  state = {
    isMounted: false,
    size: null,
    col: getCol(this.props),
    mediaKey: ''
  }
  componentDidMount () {
    this.setState({
      isMounted: true
    })
  }
  render () {
    const { children, ...rest } = this.props
    const { isMounted, col, size } = this.state

    const childrenArr = React.Children.toArray(children)
    const childrenGroups = isMounted && size !== 1
      ? groupChildren(childrenArr, size)
      : childrenArr

    return (
      <FlexGrid {...rest}>
        {childrenGroups.map((child, index) => (
          <FlexGridItem key={`feed-item-${index}`} {...rest} col={col}>
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
