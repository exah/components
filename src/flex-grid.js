import React, { useMemo, isValidElement } from 'react'
import PropTypes from 'prop-types'
import styled from '@emotion/styled'
import { Box } from './box'
import { Flex } from './flex'
import { createFlexGrid, flexGridItem } from './styles'
import { DEFAULT_GRID } from './constants'

const flexGrid = createFlexGrid({
  getRowSelector: () => `& + ${FlexGridBase}`,
  getItemSelector: (props) => props.spaceTarget
    ? `& > ${FlexGridItem} > ${props.spaceTarget}, & > ${props.spaceTarget}`
    : `& > ${FlexGridItem}`
})

const FlexGridBase = styled(Flex)(
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
    <FlexGridBase {...rest}>
      {clonedChildren}
    </FlexGridBase>
  )
}

FlexGrid.propTypes = {
  columns: PropTypes.number.isRequired,
  ...flexGrid.propTypes
}

FlexGrid.defaultProps = {
  columns: DEFAULT_GRID
}

const FlexGridItem = styled(Box)(
  { flex: '0 1 auto' },
  flexGridItem
)

FlexGridItem.propTypes = { ...flexGridItem.propTypes }
FlexGrid.Item = FlexGridItem

export {
  FlexGrid,
  FlexGridItem
}
