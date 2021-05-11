import PropTypes from 'prop-types'
import { useLocation } from 'react-router-dom'
import Button from './Button'

// The header of the task manager, which is passed the title (which is set to "Task Tracker" by default), a function to clear the AddTask fields, and a function to show the AddTask fields
const Header = ({ title, onAdd, showAdd }) => {
    // This is used so the header can be hidden when the about page is shown
    const location = useLocation()

    return (
        <header className="header">
            <h1>{title}</h1>
            {location.pathname === '/' && (<Button color={showAdd ? 'red' : 'green'} text={showAdd ? 'Cancel' : 'Add'} onClick={onAdd} />)}
        </header>
    )
}

// Sets the default header text to Task Tracker
Header.defaultProps = {
    title: 'Task Tracker',
}

// Makes the title required to be a string and required for the header
Header.propTypes = {
    title: PropTypes.string.isRequired,
}

export default Header
