import React from 'react'
import { Route } from 'react-router-dom'
import { gql } from 'apollo-boost'
import { Query } from 'react-apollo'
import { Table, Detail } from '../../../common/components'

const GET_ORDERS = gql`
  {
    product_order {
      id
      quantity
      total_cost
      status
      invoice_id
      customer_id
    }
  }
`

export default () => (
  <Query query={GET_ORDERS}>
    {({ loading, error, data: { product_order = [] } }) => {
      if (loading) return <p>Loading...</p>
      if (error) return <p>Error :(</p>

      return (
        <>
          <Route
            exact
            path="/orders"
            render={() => <Table element={product_order} />}
          />
          <Route
            exact
            path="/orders/:id"
            render={props => <Detail element={product_order} {...props} />}
          />
        </>
      )
    }}
  </Query>
)
