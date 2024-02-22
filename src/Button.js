import PropsTypes from 'prop-types'

const Button = ({ color, text, onClick }) => {
  return (
    <div>
      <button onClick={onClick} className='btn' style={({ backgroundColor: color, padding: 5 })}>{text}</button>
    </div>
  )
}

Button.defaultProps= {
    color: "aqua",
  }
  
Button.propsTypes = {
    text: PropsTypes.string,
    color: PropsTypes.string,
    onClick: PropsTypes.func,
  }

export default Button
