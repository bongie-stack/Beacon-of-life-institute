import React, { useState, useEffect } from 'react';
import { BookOpen, Trophy, Palette, ArrowRight, GraduationCap, Users, Clock, ArrowUp } from 'lucide-react';
import { Link } from 'react-router-dom';
import Slideshow from '../components/Slideshow';
import './Primary.css';
import useScrollAnimation from '../hooks/useScrollAnimation';

// Importing assets
import heroScience from '../assets/main-cover.jpeg';
import academicImg from '../assets/academic.jpg';
import campusImg from '../assets/enrollment-poster.jpg';
import campusLife3 from '../assets/hero_3.jpg';
import culturalImg from '../assets/cultural.jpeg';
import premisesImg from '../assets/beac.jpg';

export default function Primary() {
    useScrollAnimation();
    const [showScroll, setShowScroll] = useState(false);

    useEffect(() => {
        const checkScrollTop = () => {
            if (!showScroll && window.pageYOffset > 400) {
                setShowScroll(true);
            } else if (showScroll && window.pageYOffset <= 400) {
                setShowScroll(false);
            }
        };

        window.addEventListener('scroll', checkScrollTop);
        return () => window.removeEventListener('scroll', checkScrollTop);
    }, [showScroll]);

    const scrollTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <div className="primary-page falcon-style">
            {/* Elegant Hero Section */}
            <div className="falcon-hero" style={{ backgroundImage: `url(${heroScience})` }}>
                <div className="hero-overlay"></div>
                <div className="container hero-content">
                    <span className="hero-tag animate-on-scroll fade-in-up">Excellence from ECD to Grade 7</span>
                    <h1 className="animate-on-scroll fade-in-up delay-100">Beacon of Life <br /><span className="text-secondary">ECD Centre & Junior School</span></h1>
                    <p className="hero-lead animate-on-scroll fade-in-up delay-200">A holistic approach to 21st-century learning, grounded in values and driven by innovation.</p>
                    <div className="hero-btns animate-on-scroll fade-in-up delay-300">
                        <Link to="/admissions" className="btn btn-primary btn-lg">Admissions</Link>
                        <Link to="/contact" className="btn btn-outline-white btn-lg">Contact Us</Link>
                    </div>
                </div>
                <div className="hero-scroll-indicator animate-on-scroll fade-in delay-500">
                    <span>Scroll to explore</span>
                    <div className="scroll-bar"></div>
                </div>
            </div>

            {/* Introduction Section */}
            <section className="intro-section section-padding">
                <div className="container">
                    <div className="intro-grid">
                        <div className="intro-text animate-on-scroll slide-in-left">
                            <h2 className="section-title">The <span className="text-primary">Beacon</span> Experience</h2>
                            <p className="lead-text">At Beacon of Life Institute, we believe in educating the whole child. Our environment is designed to foster intellectual curiosity, physical well-being, and cultural appreciation.</p>
                            <p>Located in the heart of Bulawayo, our ECD Centre and Junior School provide a safe, nurturing, and challenging atmosphere where students from all backgrounds can thrive.</p>
                            <div className="transition-note box-highlight">
                                <p><strong>Early Learning Transition:</strong> Our learners enjoy a seamless transition from <span className="text-highlight">ECD B to Grade 1</span>, ensuring continuity in their academic foundation.</p>
                                <p><strong>Pathway to Secondary School:</strong> Our Grade 7 graduates enjoy a seamless transition into Form 1 at our Secondary School with <span className="text-highlight">exclusive discounted fees</span>.</p>
                            </div>
                            <Link to="/our-staff" className="btn btn-link">Meet Our Educators <ArrowRight size={16} /></Link>
                        </div>
                        <div className="intro-stats animate-on-scroll slide-in-right delay-200">
                            <div className="stat-card">
                                <span className="stat-number">100%</span>
                                <span className="stat-label">Pass Rate</span>
                            </div>
                            <div className="stat-card">
                                <span className="stat-number">15:1</span>
                                <span className="stat-label">Student-Teacher Ratio</span>
                            </div>
                            <div className="stat-card">
                                <span className="stat-number">10+</span>
                                <span className="stat-label">Sports & Clubs</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Premises Section */}
            <section className="premises-section section-padding bg-light">
                <div className="container">
                    <div className="premises-content">
                        <div className="premises-text animate-on-scroll slide-in-left">
                            <h2 className="section-title">Our Modern <span className="text-primary">Premises</span></h2>
                            <p>Our campus is designed to provide a stimulating environment for both ECD and Junior School learners. With spacious classrooms, secure play areas, and modern facilities, we ensure every child has the best setting for their educational journey.</p>
                        </div>
                        <div className="premises-image animate-on-scroll slide-in-right">
                            <img src="https://images.unsplash.com/photo-1580582932707-520aed937b7b?q=80&w=2064&auto=format&fit=crop" alt="Beacon of Life Premises" className="img-fluid rounded shadow-lg" />
                        </div>
                    </div>
                </div>
            </section>

            {/* The Three Pillars - Falcon Style */}
            <section className="pillars-section section-padding bg-dark text-white">
                <div className="container">
                    <div className="section-header text-center light animate-on-scroll fade-in-up">
                        <h2 className="section-title text-white">Our Three Pillars</h2>
                        <p className="section-subtitle">The foundation of every student's journey at Beacon of Life.</p>
                    </div>

                    <div className="pillars-grid">
                        <div className="pillar-card animate-on-scroll fade-in-up delay-100">
                            <div className="pillar-image" style={{ backgroundImage: `url(${academicImg})` }}></div>
                            <div className="pillar-content">
                                <BookOpen className="pillar-icon" />
                                <h3>Academic</h3>
                                <p>Rigorous Cambridge & ZIMSEC curriculum focused on critical thinking and digital literacy.</p>
                                <Link to="/requirements" className="pillar-link">Learn More <ArrowRight size={16} /></Link>
                            </div>
                        </div>

                        <div className="pillar-card animate-on-scroll fade-in-up delay-200">
                            <div className="pillar-image" style={{ backgroundImage: `url(${campusImg})` }}></div>
                            <div className="pillar-content">
                                <Trophy className="pillar-icon" />
                                <h3>Sporting</h3>
                                <p>Developing teamwork, resilience, and physical excellence through diverse sporting codes.</p>
                                <Link to="/activities" className="pillar-link">Learn More <ArrowRight size={16} /></Link>
                            </div>
                        </div>

                        <div className="pillar-card animate-on-scroll fade-in-up delay-300">
                            <div className="pillar-image" style={{ backgroundImage: `url(${culturalImg})` }}></div>
                            <div className="pillar-content">
                                <Palette className="pillar-icon" />
                                <h3>Cultural</h3>
                                <p>Inspiring creativity and social responsibility through arts, music, and community service.</p>
                                <Link to="/activities" className="pillar-link">Learn More <ArrowRight size={16} /></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section >

            {/* Campus Life Slideshow */}
            < section className="slideshow-section section-padding" >
                <div className="container">
                    <div className="section-header text-center animate-on-scroll fade-in">
                        <h2 className="section-title">Life at Beacon</h2>
                        <div className="title-underline"></div>
                    </div>
                </div>
                <Slideshow />
            </section >

            {/* Quick Links / Call to Action */}
            < section className="cta-section" >
                <div className="cta-grid">
                    <Link to="/admissions" className="cta-item bg-primary animate-on-scroll zoom-in delay-100">
                        <GraduationCap size={40} />
                        <h3>Admissions</h3>
                        <p>Join our community of excellence.</p>
                        <span className="cta-action">Apply Now <ArrowRight size={16} /></span>
                    </Link>
                    <Link to="/requirements" className="cta-item bg-secondary animate-on-scroll zoom-in delay-200">
                        <Clock size={40} />
                        <h3>Requirements</h3>
                        <p>Prepare for your enrollment.</p>
                        <span className="cta-action">See Requirements <ArrowRight size={16} /></span>
                    </Link>
                    <Link to="/contact" className="cta-item bg-accent animate-on-scroll zoom-in delay-300">
                        <Users size={40} />
                        <h3>Visit Us</h3>
                        <p>Experience our campus first-hand.</p>
                        <span className="cta-action">Contact Us <ArrowRight size={16} /></span>
                    </Link>
                </div>
            </section >

            {/* Back to Top Button */}
            < div className={`scroll-to-top ${showScroll ? 'visible' : ''}`
            } onClick={scrollTop} >
                <ArrowUp size={24} />
            </div >
        </div >
    );
}
