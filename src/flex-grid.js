import PropTypes from 'prop-types'
import { getPropTypes } from 'pss/prop-type'
import React, { useMemo } from 'react'
import styled from '@emotion/styled'
import { DEFAULT_GRID } from './constants'
import { Box } from './box'
import { Flex } from './flex'
import { createFlexGrid, flexGridItem } from './styles'
import { base, omit } from './utils'

const FlexGridContainer = React.forwardRef(({
  columns,
  children,
  ...rest
}, ref) => {
  const clonedChildren = useMemo(() => (
    React.Children
      .toArray(children)
      .map(child =>
        (React.isValidElement(child) && child.type === FlexGridItem)
          ? React.cloneElement(child, { columns })
          : child
      )
  ), [columns, children])

  return (
    <Flex ref={ref} {...rest}>
      {clonedChildren}
    </Flex>
  )
})

FlexGridContainer.displayName = 'FlexGrid.Container'

FlexGridContainer.propTypes = {
  columns: PropTypes.number.isRequired
}

FlexGridContainer.defaultProps = {
  columns: DEFAULT_GRID
}

const flexGrid = createFlexGrid({
  getRowSelector: () => `& + ${FlexGrid}`,
  getItemSelector: () => `& > ${FlexGrid.Item}`
})

const FlexGrid = styled(FlexGridContainer)(
  { flexWrap: 'wrap' },
  flexGrid
)

FlexGrid.displayName = 'FlexGrid'

FlexGrid.propTypes = {
  ...FlexGridContainer.propTypes,
  ...getPropTypes(flexGrid),
  ...Flex.propTypes
}

const FlexGridItemBase = base({
  use: Box,
  name: 'FlexGrid.Item',
  filter: omit(['offset', 'column'])
})

const FlexGridItem = styled(FlexGridItemBase)(
  flexGridItem
)

FlexGrid.Item = FlexGridItem
FlexGrid.Item.displayName = 'FlexGrid.Item'
FlexGrid.Item.propTypes = {
  ...getPropTypes(flexGridItem),
  ...FlexGridItemBase.propTypes
}

FlexGrid.Item.defaultProps = {
  ...FlexGridItemBase.defaultProps,
  flex: '1 1 auto',
  minWidth: 0
}

export {
  FlexGrid
}
