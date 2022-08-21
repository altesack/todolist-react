import React from 'react'
import { Col, Row } from 'react-bootstrap'

interface Props {
  title: string
  size?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
}

export const HeaderRow: React.FC<Props> = ({ title, size }: Props) => {
  return (
    <Row>
        <Col>
            <p className={size}>{title}</p>
        </Col>
    </Row>
  )
}
