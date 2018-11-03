import React from 'react'
import { gql } from 'apollo-boost'
import { Query } from 'react-apollo'
import { Table } from '../../../common/components'

const GET_PRODUCTS = gql`
  {
    product {
      id
      name
      product_type
      code
      description
      color
      costprice
      selling_price
      glass_coating
      glass_design
      quantity_available
      created_on
      updated_on
      active
      barcode
      company_id
      quality_id
      supplier_id
    }
  }
`

export default () => (
  <Query query={GET_PRODUCTS}>
    {({ loading, error, data: { product = [] } }) => {
      if (loading) return <p>Loading...</p>
      if (error) return <p>Error :(</p>

      return <Table element={product} />
    }}
  </Query>
)
