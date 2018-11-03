import React from 'react'
import { gql } from 'apollo-boost'
import { Query } from 'react-apollo'

const GET_PRODUCTS = gql`
  {
    product {
      id
      name
    }
  }
`

export default () => (
  <Query query={GET_PRODUCTS}>
    {({ loading, error, data: { product = [] } }) => {
      if (loading) return <p>Loading...</p>
      if (error) return <p>Error :(</p>

      return product.map(product => <h1>Product: {product.name}</h1>)
    }}
  </Query>
)
