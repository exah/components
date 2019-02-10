import { isNum, fallbackTo, identity } from '@exah/utils'

import {
  boolValue,
  createSpaceValue,
  createStyles,
  rule,
  sizeValue,
  style,
  themePath,
  splitUnit
} from 'pss'

function getSize (value, props) {
  const grid = themePath('grid', 12)(props)
  const cols = Number(fallbackTo(value, 1))

  if (!isNum(cols) && !isNum(grid)) {
    return null
  }

  return ((cols / grid) * 100) + '%'
}

const gridItem = createStyles({
  size: [
    rule('flexBasis', sizeValue(boolValue('auto'))),
    rule('maxWidth', sizeValue(boolValue('100%')))
  ],
  offset (value, props) {
    const size = getSize(value, props)

    if (size == null) {
      return {}
    }

    return {
      marginLeft: size
    }
  },
  col (value, props) {
    if (value === 'auto' || value === true) {
      return {
        flexGrow: 1,
        flexShrink: 1,
        flexBasis: 'auto',
        maxWidth: '100%'
      }
    }

    const size = getSize(value, props)

    if (size == null) {
      return {}
    }

    return {
      flexBasis: size,
      maxWidth: size
    }
  }
})

const getItemsSpaceStyles = (axis, {
  childSelector,
  rowSelector
}) => style({
  getValue: createSpaceValue()(sizeValue(identity)),
  getStyle (value, step, props) {
    const [ num, unit = 'px' ] = splitUnit(value)
    const size = `${num / 2}${unit}`

    return {
      ...(axis.x && {
        marginLeft: `-${size}`,
        marginRight: `-${size}`
      }),
      ...(axis.y && {
        marginTop: `-${size}`,
        marginBottom: `-${size}`,
        [rowSelector(props)]: {
          marginTop: size
        }
      }),
      [childSelector(props)]: {
        ...(axis.x && {
          paddingLeft: size,
          paddingRight: size
        }),
        ...(axis.y && {
          paddingTop: size,
          paddingBottom: size
        })
      }
    }
  }
})

const gridRow = (selectors) => createStyles({
  space: getItemsSpaceStyles({ x: true, y: true }, selectors),
  spacex: getItemsSpaceStyles({ x: true }, selectors),
  spacey: getItemsSpaceStyles({ y: true }, selectors)
})

export {
  gridItem,
  gridRow
}
