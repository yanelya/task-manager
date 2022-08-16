import PropTypes from 'prop-types'
import React from 'react'

/*
  so in the parenthesis, we can pass props into the Button fnc & use it as an obj
  we can destructure that obj by doing {color, text} in the parenthesis for example
  
  we can then use these "arguments" in the function by printinf {text} in a tag
  and doing an inline style by doing style={ backgroundColor : color}

  onClick takes in a function?
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