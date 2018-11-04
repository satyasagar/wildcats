import React from 'react'

export default ({ element, match: { params } }) => (
  <>
    {element
      .filter(({ id }) => id === params.id)
      .map(el =>
        Object.entries(el).map(([key, value]) => <h3>{`${key}: ${value}`}</h3>)
      )}
  </>
)
