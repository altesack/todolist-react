import React, { useState } from 'react'
import { FormControl } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { removeItem, renameItem, TodoListItemType } from '../reducers/todoSlice'

interface TodoListItemTextProps {
  item: TodoListItemType
}

export const TodoListItemText: React.FC<TodoListItemTextProps> = ({ item }: TodoListItemTextProps) => {
  const dispatch = useDispatch()
  const [editMode, setEditMode] = useState(item.name === '')

  const click = (): void => {
    setEditMode(true)
  }

  const blur = (): void => {
    setEditMode(false)
    if (item.name === '') {
      dispatch(removeItem(item.id))
    }
  }

  const change = (event: React.ChangeEvent<HTMLInputElement>): void => {
    dispatch(renameItem({
      id: item.id,
      name: event.target.value,
    }))
  }

  if (editMode) {
    return <FormControl
      autoFocus
      type={'text'}
      defaultValue={item.name}
      placeholder={'Write your task here'}
      onBlur={blur}
      onChange={change}
    />
  }

  if (item.isDone) {
    return <s>{item.name}</s>
  }

  return <p onClick={click}>{item.name}</p>
}
