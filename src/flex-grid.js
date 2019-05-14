import PropTypes from 'prop-types'
import React, { forwardRef, useMemo, isValidElement } from 'react'
import styled from '@emotion/styled'
import { DEFAULT_GRID } from './constants'
import { Box } from './box'
import { Flex } from './flex'
import { createFlexGrid, flexGridItem } from './styles'
import { useBase, omitStyles } from './utils'

const flexGrid = createFlexGrid({
  getRowSelector: () => `& + ${FlexGrid}`,
  getItemSelector: (props) => props.spaceTarget
    ? `& > ${FlexGrid.Item} > ${props.spaceTarget}, & > ${props.spaceTarget}`
    : `& > ${FlexGrid.Item}`
})

flexGrid.propTypes = {
  ...flexGrid.propTypes,
  spaceTarget: PropTypes.oneOfType([ PropTypes.elementType, PropTypes.string ])
}

const FlexGridBase = useBase({
  name: 'FlexGrid',
  filter: omitStyles(flexGrid)
}, Flex)

const FlexGridContainer = forwardRef(({ columns, children, ...rest }, ref) => {
  const clonedChildren = useMemo(() => (
    React.Children
      .toArray(children)
      .map(child =>
        isValidElement(child)
          ? React.cloneElement(child, { columns })
          : child
      )
  ), [ children ])

  return (
    <FlexGridBase ref={ref} {...rest}>
      {clonedChildren}
    </FlexGridBase>
  )
})

FlexGridContainer.displayName = 'FlexGridContainer'

FlexGridContainer.propTypes = {
  columns: PropTypes.number.isRequired,
  ...flexGrid.propTypes
}

FlexGridContainer.defaultProps = {
  columns: DEFAULT_GRID
}

const FlexGrid = styled(FlexGridContainer)(
  { flexWrap: 'wrap' },
  flexGrid
)

FlexGrid.displayName = 'FlexGrid'

FlexGrid.propTypes = {
  ...FlexGridContainer.propTypes,
  ...Flex.propTypes
}

const FlexGridItemBase = useBase({
  name: 'FlexGrid.Item',
  filter: omitStyles(flexGridItem)
}, Box)

const FlexGridItem = styled(FlexGridItemBase)(
  flexGridItem
)

FlexGrid.Item = FlexGridItem
FlexGrid.Item.displayName = 'FlexGrid.Item'
FlexGrid.Item.propTypes = { ...flexGridItem.propTypes, ...Box.propTypes }
FlexGrid.Item.defaultProps = { flex: '0 1 auto' }

export {
  FlexGrid
}
