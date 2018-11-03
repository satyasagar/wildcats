import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Landing from './landing/Landing'
import Products from './products/Products'
import Customers from './customers/Customers'

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Landing} />
    <Route exact path="/products" component={Products} />
    <Route exact path="/Customers" component={Customers} />
  </Switch>
)

export default Routes
