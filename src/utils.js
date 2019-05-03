import { useContext } from 'react'
import { ThemeContext } from '@emotion/core'
import isPropValid from '@emotion/is-prop-valid'
import { filterObj } from '@exah/utils'
import { createBaseFactory } from 'react-styled-base'

export const createBase = createBaseFactory({ filter: isPropValid })
export const ommit = (blacklist = []) => filterObj((key) => !blacklist.includes(key))
export const ommitStyles = (styles) => ommit(Object.keys(Object(styles.propTypes)))
export const blacklistOf = (styles) => Object.keys(Object(styles.propTypes))

export function useTheme () {
  return useContext(ThemeContext)
}
