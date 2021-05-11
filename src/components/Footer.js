import { Link } from 'react-router-dom'

// Unbelievably basic footer linking to the about page
const Footer = () => {
    return (
        <footer>
            <p>Copyright &copy; 2021</p>
            <Link to="/about">About</Link>
        </footer>
    )
}

export default Footer
