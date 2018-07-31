import { themePath, getSpace, sizeProp, createPropStyles } from 'pss'

// TODO: replace with export from `pss`
const fallbackTo = (...args) =>
  args.reduce((prev, val) => prev == null ? val : prev, null)

const gridItemPropStyles = createPropStyles({
  size: [
    sizeProp('flexBasis', 'auto'),
    sizeProp('maxWidth', 'auto')
  ],
  col (value, props, mediaKey) {
    if (value === 'auto') {
      return {
        flexGrow: 1,
        flexShrink: 1,
        flexBasis: 'auto',
        maxWidth: '100%'
      }
    }

    if (typeof value !== 'number') {
      return {}
    }

    const grid = themePath('grid', 12)(props.theme)
    const cols = fallbackTo(value, 1)
    const size = ((cols / grid) * 100) + '%'

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

const gridRowPropStyles = (selectors) => createPropStyles({
  space: getItemsSpaceStyles({ x: true, y: true }, selectors),
  spacex: getItemsSpaceStyles({ x: true }, selectors),
  spacey: getItemsSpaceStyles({ y: true }, selectors)
})

export {
  gridItemPropStyles,
  gridRowPropStyles
}
