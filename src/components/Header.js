
import Button from './Button'
import React from 'react'

const Header = ({title}) => {
  const click = () => {
    console.log('Click')
  }

  return (
    <header className='header'>
        <h1>{title}</h1>
        <Button color='green' text='Add' onClick={click}
        />
    </header>
  )
}

Header.defaultProps = {
  title: 'Task Manager'
}

export default Header