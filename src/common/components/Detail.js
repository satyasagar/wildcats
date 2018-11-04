import React from 'react'

export default ({ element, match: { params } }) =>
  console.log('element: ', element) ||
  console.log('params: ', params) || (
    <>
      {element
        .filter(({ id }) => id == params.id)
        .map(el =>
          Object.entries(el).map(([key, value]) => (
            <h3>{`${key}: ${value}`}</h3>
          ))
        )}
    </>
  )
