import PropTypes from 'prop-types'
import React, { useMemo, isValidElement } from 'react'
import styled from '@emotion/styled'
import { DEFAULT_GRID } from './constants'
import { Box } from './box'
import { Flex } from './flex'
import { createFlexGrid, flexGridItem } from './styles'
import { useBase, omitStyles } from './utils'

const flexGrid = createFlexGrid({
  getRowSelector: () => `& + ${StyledFlexGrid}`,
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

const StyledFlexGrid = styled(FlexGridBase)(
  { flexWrap: 'wrap' },
  flexGrid
)

function FlexGrid ({ columns, children, ...rest }) {
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
    <StyledFlexGrid {...rest}>
      {clonedChildren}
    </StyledFlexGrid>
  )
}

FlexGrid.displayName = 'FlexGrid'

FlexGrid.propTypes = {
  columns: PropTypes.number.isRequired,
  ...flexGrid.propTypes
}

FlexGrid.defaultProps = {
  columns: DEFAULT_GRID
}

const FlexGridItemBase = useBase({
  name: 'FlexGrid.Item',
  filter: omitStyles(flexGridItem)
}, Box)

FlexGrid.Item = styled(FlexGridItemBase)(
  { flex: '0 1 auto' },
  flexGridItem
)

FlexGrid.Item.displayName = 'FlexGrid.Item'
FlexGrid.Item.propTypes = { ...flexGridItem.propTypes }

export {
  FlexGrid
}
