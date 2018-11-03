import React from 'react'
import { Icon, Menu, Table } from 'semantic-ui-react'

const getHeaders = element => Object.keys(element[0])

export default ({ element }) => (
  <Table celled>
    <Table.Header>
      <Table.Row>
        {getHeaders(element).map(key => (
          <Table.HeaderCell>{key}</Table.HeaderCell>
        ))}
      </Table.Row>
    </Table.Header>

    <Table.Body>
      {element.map(el => (
        <Table.Row>
          {Object.values(el).map(value => (
            <Table.Cell>{value || String(value)}</Table.Cell>
          ))}
        </Table.Row>
      ))}
    </Table.Body>

    <Table.Footer>
      <Table.Row>
        <Table.HeaderCell colSpan="3">
          <Menu floated="right" pagination>
            <Menu.Item as="a" icon>
              <Icon name="chevron left" />
            </Menu.Item>
            <Menu.Item as="a">1</Menu.Item>
            <Menu.Item as="a">2</Menu.Item>
            <Menu.Item as="a">3</Menu.Item>
            <Menu.Item as="a">4</Menu.Item>
            <Menu.Item as="a" icon>
              <Icon name="chevron right" />
            </Menu.Item>
          </Menu>
        </Table.HeaderCell>
      </Table.Row>
    </Table.Footer>
  </Table>
)
