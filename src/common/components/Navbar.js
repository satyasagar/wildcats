import React from 'react'
import { Link } from 'react-router-dom'

const panes = [
  { title: 'Products', path: 'products' },
  { title: 'Customers', path: 'customers' }
]

export default () => (
  <>
    {panes.map(({ title, path }) => (
      <Link to={path}>
        <h3>{title}</h3>
      </Link>
    ))}
  </>
)
