import { TodoListItem } from './TodoListItem'

export const TodoList = (): JSX.Element => {
  return (
    <TodoListItem isDone={true} name={'blablabla'} key={'something here'}/>
  )
}
