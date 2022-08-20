import React from 'react'
import { Col, Row } from 'react-bootstrap'

export const NoItems: React.FC = () => {
  return (
    <Row>
      <Col/>
      <Col md={9}>
        <i>no items</i>
      </Col>
    </Row>
  )
}
