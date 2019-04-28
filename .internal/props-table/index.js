import React from 'react'
import { useComponents } from 'docz'
import { humanize } from './humanize'
import { parse } from './parse'

export const PropsTable = ({ of: Comp, ...rest }) => {
  const props = Comp != null ? parse(Comp) : null

  const {
    table: Table = 'table',
    thead: Thead = 'thead',
    tr: Tr = 'tr',
    th: Th = 'th',
    tbody: Tbody = 'tbody',
    td: Td = 'td'
  } = useComponents()

  return props === null ? null : (
    <Table {...rest}>
      <Thead style={{ textAlign: 'left' }}>
        <Tr>
          <Th>Property</Th>
          <Th>Type</Th>
          <Th>Required</Th>
          <Th>Default</Th>
        </Tr>
      </Thead>

      <Tbody>
        {props &&
          Object.keys(props).map((name) => {
            const prop = props[name]

            if (prop.type === undefined) return null

            return (
              <Tr key={name}>
                <Td>{name}</Td>
                <Td>
                  {humanize(prop.type)}
                </Td>
                <Td>{String(prop.required)}</Td>
                {prop.defaultValue === undefined ? (
                  <Td>
                    <em>-</em>
                  </Td>
                ) : (
                  <Td>
                    {prop.defaultValue.value === "''" ? (
                      <em>[Empty String]</em>
                    ) : (
                      prop.defaultValue &&
                      JSON.stringify(prop.defaultValue.value.replace(/'/g, ''))
                    )}
                  </Td>
                )}
              </Tr>
            )
          })}
      </Tbody>
    </Table>
  )
}
