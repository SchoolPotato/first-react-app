// Import prop types to make certain things required and make sure they're the correct types of things
import PropTypes from 'prop-types'

// Make a button using the passed properties such as color and text
const Button = ({ color, text, onClick }) => {
    return (
        <button onClick={onClick} style={{backgroundColor: color}} className='btn'>{text}</button>
    )
}

// Set the default color of the button to steel blue
Button.defaultProps = {
    color: 'steelblue'
}

// Make these props required
Button.propTypes = {
    text: PropTypes.string,
    color: PropTypes.string,
    onClick: PropTypes.func,
}

export default Button
