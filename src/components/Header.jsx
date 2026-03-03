import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { GraduationCap, Menu, X, ChevronDown, Download } from 'lucide-react';
import './Header.css';

import logo from '../assets/logo.jpg';

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const [showApplyDropdown, setShowApplyDropdown] = useState(false);
    const location = useLocation();
    const isLanding = location.pathname === '/';

    return (
        <header className={`header ${isLanding ? 'header-transparent' : 'header-solid'}`}>
            <div className="container header-content">
                <Link to="/" className="logo">
                    <img src={logo} alt="Beacon of Life" className="logo-image" style={{ height: '50px', width: 'auto' }} />
                </Link>

                <nav className={`nav-links ${isOpen ? 'open' : ''}`}>
                    <Link to="/" onClick={() => setIsOpen(false)}>Home</Link>
                    <Link to="/admissions" onClick={() => setIsOpen(false)}>Admissions</Link>
                    <Link to="/requirements" onClick={() => setIsOpen(false)}>Requirements</Link>
                    <Link to="/activities" onClick={() => setIsOpen(false)}>Activities</Link>
                    <Link to="/our-staff" onClick={() => setIsOpen(false)}>Our Staff</Link>
                    <Link to="/contact" onClick={() => setIsOpen(false)}>Contact</Link>
                    <div
                        className="apply-dropdown-container"
                        onMouseEnter={() => setShowApplyDropdown(true)}
                        onMouseLeave={() => setShowApplyDropdown(false)}
                    >
                        <button
                            className="btn btn-sm btn-apply dropdown-toggle"
                            onClick={() => setShowApplyDropdown(!showApplyDropdown)}
                        >
                            Apply Now <ChevronDown size={16} style={{ marginLeft: '4px' }} />
                        </button>
                        <div className={`apply-dropdown-menu ${showApplyDropdown ? 'show' : ''}`}>
                            <a href="/Apply_for_Zimsec.docx" download className="dropdown-item" onClick={() => setIsOpen(false)}>
                                <Download size={14} style={{ marginRight: '6px' }} /> Apply for Zimsec
                            </a>
                            <a href="/Apply_for_Cambridge.docx" download className="dropdown-item" onClick={() => setIsOpen(false)}>
                                <Download size={14} style={{ marginRight: '6px' }} /> Apply for Cambridge
                            </a>
                            <a href="https://wa.me/263783762621?text=Hello%20Beacon%20of%20Life%20Institute,%20I%20would%20like%20to%20apply%20for%20admission,%20here%20is%20my%20application%20form" target="_blank" rel="noopener noreferrer" className="dropdown-item" onClick={() => setIsOpen(false)}>
                                Apply via WhatsApp
                            </a>
                        </div>
                    </div>
                </nav>

                <button className="mobile-menu-btn" onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? <X /> : <Menu />}
                </button>
            </div>
        </header>
    );
}
