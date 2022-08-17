import PropTypes from 'prop-types'
import React from 'react'

/*
onClick takes in a function
- in this case, the function prints out into the console log
*/

const Button = ({color, text, click}) => {  
  return (
    <button  onClick={click}
    style={{ backgroundColor : color }} 
    className='btn'
    >
      {text}
    </button>
  )
}

Button.propTypes = {
  text: PropTypes.string,
  color: PropTypes.string,
  onClick: PropTypes.func,
}

export default Button