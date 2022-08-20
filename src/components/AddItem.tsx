import React from 'react'
import { Button, Col, Row } from 'react-bootstrap'
import { Icon } from './Icon'
import { useDispatch } from 'react-redux'
import { addItem } from '../reducers/todoSlice'

export const AddItem: React.FC = () => {
  const dispatch = useDispatch()

  return (
    <Row>
      <Col
        md={1}>
        <Button className={'btn-light'} onClick={() => dispatch(addItem())}><Icon name={'plus-circle'} /></Button>
      </Col>
    </Row>
  )
}
