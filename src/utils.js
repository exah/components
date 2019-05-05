import isPropValid from '@emotion/is-prop-valid'
import { createBaseFactory } from 'react-styled-base'

export const createBase = createBaseFactory({ filter: isPropValid })
export const blacklistOf = (styles) => Object.keys(Object(styles.propTypes))

