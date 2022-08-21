import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import React from 'react'
import { Container } from 'react-bootstrap'
import { HeaderRow } from './components/HeaderRow'
import { TasksList } from './components/todo/TasksList'
import { AddItemRow } from './components/AddItemRow'
import { useSelector } from 'react-redux'
import { getDoneItems, getNotDoneItems } from './reducers/todoSelectors'

const App: React.FC = () => {
  const doneItems = useSelector(getDoneItems)
  const notDoneItems = useSelector(getNotDoneItems)

  return (
    <Container >
      <HeaderRow title={'TODO list'} size={'h1'}/>
      <TasksList items={notDoneItems}/>
      <AddItemRow/>
      {doneItems.length !== 0 &&
      <>
        <HeaderRow title={'Completed tasks'} size={'h4'}/>
        <TasksList items={doneItems}/>
      </>
      }
    </Container>
  )
}

export default App
