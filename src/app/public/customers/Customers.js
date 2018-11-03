import React from 'react'
import { gql } from 'apollo-boost'
import { Query } from 'react-apollo'
import { Table } from '../../../common/components'

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

      return <Table element={customer} />
    }}
  </Query>
)
