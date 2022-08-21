import React from 'react'
import { CloseButton, Col, Row } from 'react-bootstrap'
import FormCheckInput from 'react-bootstrap/FormCheckInput'
import { Icon } from '../common/Icon'
import { TaskName } from './TaskName'
import { removeItem, TodoListItemType, toggleDone } from '../../reducers/todoSlice'
import { useDispatch } from 'react-redux'

interface TaskProps {
  item: TodoListItemType
}

export const Task: React.FC<TaskProps> = ({ item }: TaskProps) => {
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
        <TaskName item={item}/>
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
