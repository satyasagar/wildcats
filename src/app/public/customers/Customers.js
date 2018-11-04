import React from 'react'
import { Route } from 'react-router-dom'
import { gql } from 'apollo-boost'
import { Query } from 'react-apollo'
import { Table, Detail } from '../../../common/components'

const GET_CUSTOMERS = gql`
  {
    customer {
      id
      first_name
      last_name
    }
  }
`

export default () => (
  <Query query={GET_CUSTOMERS}>
    {({ loading, error, data: { customer = [] } }) => {
      if (loading) return <p>Loading...</p>
      if (error) return <p>Error :(</p>

      return (
        <>
          <Route
            exact
            path="/customers"
            render={() => <Table element={customer} />}
          />
          <Route
            exact
            path="/customers/:id"
            render={props => <Detail element={customer} {...props} />}
          />
        </>
      )
    }}
  </Query>
)
