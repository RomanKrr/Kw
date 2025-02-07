import React from 'react'
import '../Footer/Footer.css'
import About from "../About/About"
const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <div className="patent">
            <About/>
            {/* <img className='footer-icon' src="" alt="Company Logo" /> */}
            <h6>Thank you for visiting my site!</h6>
            <p>&copy; {currentYear} Roman Kucher</p>
        </div>)
}

export default Footer