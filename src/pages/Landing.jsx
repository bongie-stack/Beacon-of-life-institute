import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, GraduationCap, ArrowRight } from 'lucide-react';
import './Landing.css';

export default function Landing() {
    return (
        <div className="landing-page">
            <div className="hero-section">
                <div className="container hero-content">
                    <h1>Welcome to <span className="text-gradient">Beacon of Life Institute</span></h1>
                    <p className="hero-subtitle">Nurturing Excellence, Inspiring Futures.</p>
                </div>
            </div>

            <div className="split-selection container" style={{ justifyContent: 'center' }}>
                <Link to="/primary" className="selection-card primary-card" style={{ maxWidth: '600px', margin: '0 auto' }}>
                    <div className="card-content">
                        <BookOpen size={48} className="card-icon" />
                        <h2>Primary School</h2>
                        <p>Building strong foundations for lifelong learning.</p>
                        <span className="card-link">Enter Primary <ArrowRight size={16} /></span>
                    </div>
                    <div className="card-bg primary-bg"></div>
                </Link>
            </div>
        </div>
    );
}
