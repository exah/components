import PropTypes from 'prop-types'
import React, { useMemo } from 'react'
import styled from '@emotion/styled'
import { withTheme } from 'emotion-theming'
import { compose, fallbackTo } from '@exah/utils'
import { withCurrentMedia } from '../current-media-provider'
import { useIsMounted, groupArr } from '../utils'
import { FlexGrid, FlexGridItem } from '../flex-grid'
import { Box } from '../box'

const DEFAULT_GRID = 12

function useGroupChildren (size, children) {
  const isMounted = useIsMounted()

  return useMemo(() => {
    const childrenArr = React.Children.toArray(children)

    return isMounted && size > 1
      ? groupArr(childrenArr, size)
      : childrenArr
  }, [ isMounted, size, children ])
}

function FeedContainer ({
  children,
  currentMediaKey,
  theme = {},
  grid = theme.grid || DEFAULT_GRID,
  col = DEFAULT_GRID,
  item,
  ...rest
}) {
  const itemCol = fallbackTo(
    col && fallbackTo(col[currentMediaKey[0]], col.all, col),
    grid
  )
  const groupSize = (grid / itemCol)
  const childrenGroups = useGroupChildren(groupSize, children)

  return (
    <FlexGrid spaceTarget={FeedItem.toString()} {...rest}>
      {childrenGroups.map((child, index) => (
        <FlexGridItem key={`feed-item-${index}`} {...item} col={itemCol}>
          {child}
        </FlexGridItem>
      ))}
    </FlexGrid>
  )
}

FeedContainer.propTypes = {
  theme: PropTypes.shape({ grid: PropTypes.number }),
  currentMediaKey: PropTypes.arrayOf(PropTypes.string)
}

FeedContainer.defaultProps = {
  theme: {},
  currentMediaKey: []
}

const Feed = compose(
  withCurrentMedia,
  withTheme
)(FeedContainer)

Feed.propTypes = {
  grid: PropTypes.number,
  col: PropTypes.oneOfType([ PropTypes.number, PropTypes.objectOf(PropTypes.number) ])
}

const FeedItem = styled(Box)``
Feed.Item = FeedItem

export {
  Feed,
  FeedItem
}
