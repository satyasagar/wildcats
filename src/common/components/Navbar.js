import React from 'react'
import { Link } from 'react-router-dom'
import {Navbar, MenuItem, NavItem, NavbarHeader, NavDropdown, Nav} from 'react-bootstrap'
import '../css/bootstrap.min.css'


const panes = [
  { title: 'Products', path: 'products' },
  { title: 'Customers', path: 'customers' },
  { title: 'Orders', path: 'orders' }
]

export default () => (
  <>
  <h1>OPTOHelp</h1>
    {panes.map(({ title, path }) => (
      <Link to={path}>
        <h3>{title}</h3>
      </Link>
    ))}
  </>
)
