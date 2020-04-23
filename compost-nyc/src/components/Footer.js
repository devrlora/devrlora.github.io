import React from 'react'
import '../styling/Footer.css';

export default function Footer() {
    const currentYear = new Date().getFullYear();
// Add self updating copyright date
    return (
        <div className='footer'>
            <h2>Copyright © {currentYear}</h2>
        </div>
    )
}
