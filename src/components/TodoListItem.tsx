import { Col, Row } from 'react-bootstrap'
import FormCheckInput from 'react-bootstrap/FormCheckInput'
import { TodoListItemText } from './TodoListItemText'
import { Icon } from './Icon'

interface TodoListItemProps {
  // id: number, //???
  name: string
  isDone: boolean
  // order: number, //???
}

export const TodoListItem = ({ name, isDone }: TodoListItemProps): JSX.Element => {
  return (
        <Row>
            <Col>
                <Icon name={'arrows-move'}/>
            </Col>
            <Col md={10}>
                <TodoListItemText isDone={isDone} name={name}/>
            </Col>
            <Col>
                <FormCheckInput checked={isDone}/>
            </Col>
        </Row>
  )
}
