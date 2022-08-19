// duplicated
interface TodoListItemProps {
  // id: number, //???
  name: string
  isDone: boolean
  // order: number, //???
}

export const TodoListItemText = ({ name, isDone }: TodoListItemProps): JSX.Element => {
  if (isDone) {
    return <s>{name}</s>
  }

  return <>{name}</>
}
