import { css } from '@emotion/core'

const Link = css`
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`

const Button = css`
  border-radius: 5px;
  padding: 10px 20px;
`

const Input = css`
  border: 1px solid rgba(255, 255, 255, 0.3);
  padding: 10px 20px;
`

const theme = {
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
      fg: '#000',
      link: 'royalblue'
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
    default: 'system-ui, sans-serif',
    'system-ui': [
      '-apple-system',
      'BlinkMacSystemFont',
      'Segoe UI',
      'Roboto',
      'Oxygen-Sans',
      'Ubuntu',
      'Cantarell',
      'Helvetica Neue',
      'sans-serif',
    ].join(),
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
      fontFamily: 'athelas, georgia, times, serif',
      fontSize: '2.5rem',
      fontWeight: 'bold'
    }
  },
  Link,
  Button,
  buttonStyle: {
    default: {
      background: 'royalblue',
      color: 'white'
    }
  },
  Input,
  inputStyle: {
    default: {
      background: '#2e3440',
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
