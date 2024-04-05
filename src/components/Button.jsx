import PropType from 'prop-types'

const Button = ({color, text, onClick}) => {
  return (
  <button
    style={{backgroundColor: color}}
    className='btn'
    onClick={onClick}
    >
        {text}
    </button>
  )
}

Button.defaultProps = {
  color: 'steelblue'
}
 Button.PropType ={
    text: PropType.string,
    color: PropType.string,
    onClick: PropType.func,
 }

export default Button