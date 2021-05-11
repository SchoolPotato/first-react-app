import { Link } from 'react-router-dom'

const About = () => {
    return (
        <div>
            <h4>Version 1.0.0</h4>
            <p><strong>Name:</strong> Alexander J. Welton</p>
            <p><strong>Date of Release:</strong> 5/10/2021</p>
            <p><strong>Favorite Musician:</strong> Either Fearofdark or A.L.I.S.O.N</p>
            <br></br>
            <Link to="/">Reminders</Link>
        </div>
    )
}

export default About
