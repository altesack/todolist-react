import React from 'react'
import { FormControl } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { removeItem, renameItem, TodoListItemType } from '../../reducers/todoSlice'

interface TaskNameInputProps {
  item: TodoListItemType
  switchEditModeOff: () => void
}

export const TaskNameInput: React.FC<TaskNameInputProps> = ({ item, switchEditModeOff }: TaskNameInputProps) => {
  const dispatch = useDispatch()

  const blur = (): void => {
    switchEditModeOff()
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

  return <FormControl
    autoFocus
    type={'text'}
    defaultValue={item.name}
    placeholder={'Write your task here'}
    onBlur={blur}
    onChange={change}
  />
}
