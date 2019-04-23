const theme = {
  flexGridSize: 12,
  media: {
    sm: '(max-width: 600px)',
    md: '(min-width: 601px) and (max-width: 1024px)',
    lg: '(min-width: 1025px)'
  },
  space: [ 0, 8, 16, 32, 64 ],
  color: {
    black: '#000',
    gray: [ '#eee', '#ddd', '#ccc', '#bbb', '#aaa' ],
    white: '#fff'
  },
  palette: {
    default: {
      bg: '#fff',
      fg: '#000'
    },
    gray: {
      bg: '#eee',
      fg: '#000'
    },
    inverted: {
      bg: '#000',
      fg: '#fff'
    }
  },
  fontFamily: {
    default: 'Helvetica, system-ui, sans-serif',
    serif: 'Times New Roman, serif'
  },
  textStyle: {
    root: {
      fontFamily: 'Helvetica, system-ui, sans-serif',
      fontSize: 16,
      lineHeight: 1.2
    },
    default: {
      fontFamily: 'Helvetica, system-ui, sans-serif',
      fontSize: '1rem',
      lineHeight: 1.2
    },
    heading: {
      fontSize: '1.5rem',
      fontWeight: 'bold'
    }
  }
}

const themeWithRems = {
  ...theme,
  space: theme.space.map(s => `${s / theme.textStyle.root.fontSize}rem`)
}

export {
  theme,
  themeWithRems
}
