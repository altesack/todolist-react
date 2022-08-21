import React, { useState } from 'react'
import { TodoListItemType } from '../../reducers/todoSlice'
import { TaskNameInput } from './TaskNameInput'

interface TaskProps {
  item: TodoListItemType
}

export const TaskName: React.FC<TaskProps> = ({ item }: TaskProps) => {
  const [editMode, setEditMode] = useState(item.name === '')

  const switchEditModeOn = (): void => {
    setEditMode(true)
  }

  const switchEditModeOff = (): void => {
    setEditMode(false)
  }

  if (editMode) {
    return <TaskNameInput item={item} switchEditModeOff={switchEditModeOff}/>
  }

  if (item.isDone) {
    return <s>{item.name}</s>
  }

  return <p onClick={switchEditModeOn}>{item.name}</p>
}
