import React from 'react'
import { CloseButton, Col, Row } from 'react-bootstrap'
import FormCheckInput from 'react-bootstrap/FormCheckInput'
import { TodoListItemText } from './TodoListItemText'
import { Icon } from './Icon'
import { removeItem, TodoListItemType, toggleDone } from '../reducers/todoSlice'
import { useDispatch } from 'react-redux'

interface TodoListItemProps {
  item: TodoListItemType
}

export const TodoListItem: React.FC<TodoListItemProps> = ({ item }: TodoListItemProps) => {
  const dispatch = useDispatch()

  const remove = (): void => {
    dispatch(removeItem(item.id))
  }

  const toggle = (): void => {
    dispatch(toggleDone(item.id))
  }

  return (
    <Row>
      <Col>
        <Icon name={'arrows-move'} />
      </Col>
      <Col md={9}>
        <TodoListItemText item={item}/>
      </Col>
      <Col>
        <FormCheckInput checked={item.isDone} onClick={toggle}/>
      </Col>
      <Col>
        <CloseButton onClick={remove}/>
      </Col>
    </Row>
  )
}
