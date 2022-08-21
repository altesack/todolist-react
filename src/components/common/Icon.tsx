import React from 'react'

interface IconProps {
  name: string
  size?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
}

export const Icon: React.FC<IconProps> = ({ name, size }: IconProps) => {
  const className = `bi-${name} ${size ?? ''}`

  return <i className={className}/>
}
