import use from 'reuse'
import PropTypes from 'prop-types'
import React, { useMemo, isValidElement } from 'react'
import { pipe } from '@exah/utils'
import styled from '@emotion/styled'
import { base } from './base'
import { Box } from './box'
import { Flex } from './flex'
import { createFlexGrid, flexGridItem } from './styles'
import { DEFAULT_GRID } from './constants'
import { omit, omitStyles } from './utils'

const flexGrid = createFlexGrid({
  getRowSelector: () => `& + ${StyledFlexGrid}`,
  getItemSelector: (props) => props.spaceTarget
    ? `& > ${FlexGridItem} > ${props.spaceTarget}, & > ${props.spaceTarget}`
    : `& > ${FlexGridItem}`
})

flexGrid.propTypes = {
  ...flexGrid.propTypes,
  spaceTarget: PropTypes.oneOfType([ PropTypes.elementType, PropTypes.string ])
}

const FlexGridBase = base({
  filter: omitStyles(flexGrid)
})

const StyledFlexGrid = styled(use(FlexGridBase, Flex))(
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

FlexGrid.propTypes = {
  columns: PropTypes.number.isRequired,
  ...flexGrid.propTypes
}

FlexGrid.defaultProps = {
  columns: DEFAULT_GRID
}

const FlexGridItemBase = base({
  filter: pipe(omit([ 'columns' ]), omitStyles(flexGridItem))
})

const FlexGridItem = styled(use(FlexGridItemBase, Box))(
  { flex: '0 1 auto' },
  flexGridItem
)

FlexGridItem.propTypes = { ...flexGridItem.propTypes }
FlexGrid.Item = FlexGridItem

export {
  FlexGrid,
  FlexGridItem
}
