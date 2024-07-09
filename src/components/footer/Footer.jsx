import React, { useState, useEffect } from 'react';
import './footer.css';

export default function Footer() {
    const [activeSection, setActiveSection] = useState(null);
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        };
        
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const toggleSection = (section) => {
        if (isMobile) {
            setActiveSection(activeSection === section ? null : section);
        }
    };

    return (
        <div className="footer">
                <div className="left">
                    <div className="logo">
                        <img src="/icon_logo.png" alt="logo" />
                    </div>
                    <div className="socials">
                        <img src="/icons/insta.png" alt="Instagram" />
                        <img src="/icons/whatsapp.png" alt="WhatsApp" />
                        <img src="/icons/x.png" alt="Twitter" />
                    </div>
                </div>
                <div className="hr"></div>
                <div className="right">
                    {['About', 'Products', 'Discover'].map((section) => (
                        <div key={section} className="section">
                            <h3 onClick={() => toggleSection(section)}>
                                {section}
                                {isMobile && (
                                    <img 
                                        src="/icons/arrow-down-01-sharp.png" 
                                        alt="arrow down"
                                        className={`arrow ${activeSection === section ? 'active' : ''}`}
                                    />
                                )}
                            </h3>
                            {(activeSection === section || !isMobile) && (
                                <ul>
                                    {section === 'About' && (
                                        <>
                                            <li>About Us</li>
                                            <li>News</li>
                                            <li>Location</li>
                                        </>
                                    )}
                                    {section === 'Products' && (
                                        <>
                                            <li>Pricing</li>
                                            <li>Store</li>
                                            <li>Features</li>
                                        </>
                                    )}
                                    {section === 'Discover' && (
                                        <>
                                            <li>Contact</li>
                                            <li>Customers</li>
                                            <li>Affiliates</li>
                                        </>
                                    )}
                                </ul>
                            )}
                        </div>
                    ))}
                </div>
        </div>
    );
}
