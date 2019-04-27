import PropTypes from 'prop-types'
import React, { useMemo } from 'react'
import styled from '@emotion/styled'
import { fallbackTo, toArr, initArr } from '@exah/utils'
import { useCurrentMedia } from '../current-media-provider'
import { useIsMounted } from '../utils'
import { DEFAULT_GRID } from '../flex-grid/constants'
import { FlexGrid } from '../flex-grid'
import { Box } from '../box'

const groupChildren = (items = [], length = 3) =>
  items.reduce((target, value, index) => {
    const key = Math.floor(index % length)

    if (target[key]) {
      target[key].push(value)
    }

    return target
  }, initArr(length, () => []))

const getGroupKey = (input) =>
  toArr(input)
    .reduce((acc, item) => [ ...acc, item.key ], [])
    .join('-')

function useGroupChildren (size, children) {
  const isMounted = useIsMounted()

  return useMemo(() => {
    const childrenArr = React.Children.toArray(children)

    return isMounted && size > 1
      ? groupChildren(childrenArr, size)
      : childrenArr
  }, [ isMounted, size, children ])
}

function Feed ({ children, columns, itemColumn, item: itemProps, ...rest }) {
  const { currentMediaKey } = useCurrentMedia()

  const itemColumnNormalized = fallbackTo(
    itemColumn && fallbackTo(itemColumn[currentMediaKey[0]], itemColumn.all, itemColumn),
    columns
  )

  const groupSize = columns / itemColumnNormalized
  const childrenGroups = useGroupChildren(groupSize, children)

  return (
    <FlexGrid spaceTarget={Feed.Item} columns={columns} {...rest}>
      {childrenGroups.map((child, index) => (
        <FlexGrid.Item
          key={getGroupKey(child)}
          {...itemProps}
          column={itemColumnNormalized}
        >
          {child}
        </FlexGrid.Item>
      ))}
    </FlexGrid>
  )
}

Feed.propTypes = {
  columns: PropTypes.number,
  itemColumn: PropTypes.oneOfType([ PropTypes.number, PropTypes.objectOf(PropTypes.number) ])
}

Feed.defaultProps = {
  columns: DEFAULT_GRID,
  itemColumn: DEFAULT_GRID
}

Feed.Item = styled(Box)``

export {
  Feed
}
