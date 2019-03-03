import React from 'react'
import styled from '@emotion/styled'
import { Box } from '../box'
import { FlexBox } from '../flex-box'
import { withThemeDefaults } from '../theme-defaults'
import { createFlexGridStyle, flexGridItemStyle } from './styles'
import { THEME_COMPONENT_KEY } from './constants'

const flexGridStyle = createFlexGridStyle({
  rowSelector: () => `${StyledFlexGrid} + &`,
  childSelector: (props) => props.spaceTarget
    ? `& > ${StyledFlexGridItem} > ${props.spaceTarget}`
    : `& > ${StyledFlexGridItem}`
})

const StyledFlexGrid = styled(FlexBox)(
  flexGridStyle
)

const FlexGrid = withThemeDefaults(THEME_COMPONENT_KEY, (props) => (
  <StyledFlexGrid
    flexWrap='wrap'
    {...props}
  />
))

FlexGrid.propTypes = {
  ...FlexBox.propTypes,
  ...flexGridStyle.propTypes
}

const StyledFlexGridItem = styled(Box)(
  flexGridItemStyle
)

const FlexGridItem = (props) => (
  <StyledFlexGridItem
    flex='1 1 auto'
    minHeight={1}
    minWidth={0}
    {...props}
  />
)

FlexGrid.Item = FlexGridItem

FlexGrid.Item.propTypes = {
  ...Box.propTypes,
  ...flexGridItemStyle.propTypes
}

export {
  FlexGrid,
  FlexGridItem
}
