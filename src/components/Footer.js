import React from 'react'

function Footer() {
    return (
        <footer className='footer'>
            <div className="Categories">
                <h2>Categories</h2>
                <p>Web Builder</p>
                <p>Hosting</p>
                <p>Data Center</p>
                <p>Robotic-Automation</p>
            </div>
            <div className="Contact">
                <h2>Contact</h2>
                <p>Contact</p>
                <p>Privacy Policy</p>
                <p>Terms Of Service</p>
                <p>Categories</p>
                <p>About</p>
            </div>
            <div className="mt-5">
                <select>
                    <option value="United States">United States</option>
                </select>
            </div>
        </footer>
    )
}

export default Footer
