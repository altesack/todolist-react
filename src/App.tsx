import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import { Container } from 'react-bootstrap'
import { TodoHeader } from './components/TodoHeader'
import { TodoList } from './components/TodoList'

function App (): JSX.Element {
  return (
    <Container >
      <TodoHeader title={'TODO list'} />
      <TodoList />
    </Container>
  )
}

export default App
