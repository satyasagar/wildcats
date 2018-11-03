import React, { Component } from 'react'
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

class App extends Component {
  render() {
    return (
      <div className="App">
        <Query query={GET_PRODUCTS}>
          {({ loading, error, data }) => {
            if (loading) return <p>Loading...</p>
            if (error) return <p>Error :(</p>

            console.log('data: ', data)
            return data.product.map(product => <h1>Product: {product.name}</h1>)
          }}
        </Query>
      </div>
    )
  }
}

export default App
