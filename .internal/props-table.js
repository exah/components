import React from 'react'
import { mapObj } from '@exah/utils'
import { PropsTable as DoczPropsTable } from 'docz'
import parsePropTypes from 'parse-prop-types'

const parse = (Comp) => parsePropTypes({
  ...Comp,
  defaultProps: mapObj((key, value) => ({ [key]: String(value) }), Comp.defaultProps || {})
})

const PropsTable = ({ of: Comp }) => {
  if (Comp.__docgenInfo == null) {
    Comp.__docgenInfo = {
      description: Comp.description || '',
      props: parse(Comp)
    }
  }

  return (
    <DoczPropsTable of={Comp} />
  )
}

export { PropsTable }
