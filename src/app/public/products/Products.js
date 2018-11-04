import React from 'react'
import { Route } from 'react-router-dom'
import { gql } from 'apollo-boost'
import { Query } from 'react-apollo'
import { Table, Detail } from '../../../common/components'

const GET_PRODUCTS = gql`
  {
    product(where: { active: { _eq: true } }) {
      id
      name
      product_type
      code
      description
      color
      costprice
      selling_price
      tags
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
      img
    }
  }
`

const DELETE_PRODUCT = gql`
  mutation delete_product($id: Int!) {
    update_product(where: { id: { _eq: $id } }, _set: { active: false }) {
      affected_rows
    }
  }
`

export default () => (
  <Query query={GET_PRODUCTS}>
    {({ loading, error, data: { product = [] } }) => {
      if (loading) return <p>Loading...</p>
      if (error) return <p>Error :(</p>

      return (
        <>
          <Route
            exact
            path="/products"
            render={() => <Table element={product} />}
          />
          <Route
            exact
            path="/products/:id"
            render={props => (
              <Detail
                element={product}
                getElements={GET_PRODUCTS}
                deleteElement={DELETE_PRODUCT}
                {...props}
              />
            )}
          />
        </>
      )
    }}
  </Query>
)
