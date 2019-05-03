import { useContext } from 'react'
import { ThemeContext } from '@emotion/core'
import { filterObj } from '@exah/utils'

export const omit = (blacklist = []) => filterObj((key) => !blacklist.includes(key))
export const omitStyles = (styles) => omit(Object.keys(Object(styles.propTypes)))

export function useTheme () {
  return useContext(ThemeContext)
}
