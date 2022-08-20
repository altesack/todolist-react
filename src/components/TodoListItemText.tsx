import React from 'react'
import { TodoListItemType } from '../reducers/todoSlice'

interface TodoListItemTextProps {
  item: TodoListItemType
}

export const TodoListItemText: React.FC<TodoListItemTextProps> = ({ item }: TodoListItemTextProps) => {
  if (item.isDone) {
    return <s>{item.name}</s>
  }

  return <>{item.name}</>
}
