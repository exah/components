import { themePath, getSpace, sizeProp, createPropStyles } from 'pss'
import { isNum, fallbackTo } from '@exah/utils'

function getSize (value, props) {
  const grid = themePath('grid', 12)(props)
  const cols = Number(fallbackTo(value, 1))

  if (!isNum(cols) && !isNum(grid)) {
    return null
  }

  return ((cols / grid) * 100) + '%'
}

const gridItem = createPropStyles({
  size: [
    sizeProp('flexBasis', 'auto'),
    sizeProp('maxWidth', '100%')
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
}) => (step, props, mediaKey) => {
  const value = getSpace(props.theme, step)(mediaKey)
  const size = step === 0 ? 0 : value / 2

  return {
    ...(axis.x && {
      marginLeft: size * -1,
      marginRight: size * -1
    }),
    ...(axis.y && {
      marginTop: size * -1,
      marginBottom: size * -1,
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

const gridRow = (selectors) => createPropStyles({
  space: getItemsSpaceStyles({ x: true, y: true }, selectors),
  spacex: getItemsSpaceStyles({ x: true }, selectors),
  spacey: getItemsSpaceStyles({ y: true }, selectors)
})

export {
  gridItem,
  gridRow
}
