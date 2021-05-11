// Importing Link so I can use it to go back to the main page instead of <a> to avoid a refresh
import { Link } from 'react-router-dom'

const About = () => {
    // The following is literally just HTML so I don't think I need to comment it
    return (
        <div>
            <h4>Version 1.0.0</h4>
            <p><strong>Name:</strong> Alexander J. Welton</p>
            <p><strong>Date of Release:</strong> 5/10/2021</p>
            <p><strong>Favorite Musician:</strong> Either Fearofdark or A.L.I.S.O.N (or maybe Forhill)</p>
            <br></br>
            <Link to="/">Reminders</Link>
        </div>
    )
}

export default About
