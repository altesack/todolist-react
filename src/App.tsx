import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import React from 'react'
import { Container } from 'react-bootstrap'
import { TodoHeader } from './components/TodoHeader'
import { TodoList } from './components/TodoList'
import { AddItem } from './components/AddItem'
import { useSelector } from 'react-redux'
import { getDoneItems, getNotDoneItems } from './reducers/todoSelectors'

const App: React.FC = () => {
  const doneItems = useSelector(getDoneItems)
  const notDoneItems = useSelector(getNotDoneItems)

  return (
    <Container >
      <TodoHeader title={'TODO list'} size={'h1'}/>
      <TodoList items={notDoneItems}/>
      <AddItem/>
      {doneItems.length !== 0 &&
      <>
        <TodoHeader title={'Completed tasks'} size={'h4'}/>
        <TodoList items={doneItems}/>
      </>
      }
    </Container>
  )
}

export default App
