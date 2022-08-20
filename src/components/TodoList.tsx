import React from 'react'
import { TodoListItem } from './TodoListItem'
import { TodoListItemType } from '../reducers/todoSlice'
import { NoItems } from './NoItems'

interface TodoListProps {
  items: TodoListItemType[]
}

export const TodoList: React.FC<TodoListProps> = ({ items }: TodoListProps) => {
  if (items.length === 0) {
    return <NoItems/>
  }

  return <>{
    items.map(
      (item) => <TodoListItem item={item} key={item.id}/>)
  }</>
}
