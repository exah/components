import PropTypes from 'prop-types'
import React, { useMemo } from 'react'
import styled from '@emotion/styled'
import { fallbackTo, toArr, initArr } from '@exah/utils'
import { useMatchMediaContext } from './match-media'
import { DEFAULT_GRID } from './constants'
import { FlexGrid } from './flex-grid'
import { Box } from './box'

const groupChildren = (items = [], length = 3) =>
  items.reduce((target, value, index) => {
    const key = Math.floor(index % length)

    if (target[key]) {
      target[key].push(value)
    }

    return target
  }, initArr(length, () => []))

function useGroupChildren (size, children) {
  return useMemo(() => {
    const childrenArr = React.Children.toArray(children)

    return size > 1
      ? groupChildren(childrenArr, size)
      : childrenArr
  }, [ size, children ])
}

const getGroupKey = (input) =>
  toArr(input)
    .reduce((acc, item) => [ ...acc, item.key ], [])
    .join('-')

function Feed ({ children, columns, itemColumn, item: itemProps, ...rest }) {
  const matchedMedia = useMatchMediaContext()

  const itemColumnForMedia = fallbackTo(
    itemColumn[matchedMedia.key],
    itemColumn.all,
    itemColumn,
    columns
  )

  const groupSize = columns / itemColumnForMedia
  const childrenGroups = useGroupChildren(groupSize, children)

  return (
    <FlexGrid spaceTarget={Feed.Item} columns={columns} {...rest}>
      {childrenGroups.map((child, index) => (
        <FlexGrid.Item
          key={getGroupKey(child)}
          {...itemProps}
          column={itemColumnForMedia}
        >
          {child}
        </FlexGrid.Item>
      ))}
    </FlexGrid>
  )
}

Feed.propTypes = {
  columns: PropTypes.number.isRequired,
  itemColumn: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.objectOf(PropTypes.number)
  ]).isRequired
}

Feed.defaultProps = {
  columns: DEFAULT_GRID,
  itemColumn: DEFAULT_GRID
}

Feed.Item = styled(Box)``

export {
  Feed
}
