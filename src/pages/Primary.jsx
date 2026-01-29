import React from 'react';
import { BookOpen, MapPin, Music, Droplets, Trophy, Calculator } from 'lucide-react';
import './Primary.css';
import heroImage from '../assets/primary-hero.png';

export default function Primary() {
    return (
        <div className="primary-page">
            {/* Hero Section */}
            <div className="primary-hero" style={{ backgroundImage: `linear-gradient(rgba(15, 23, 42, 0.6), rgba(15, 23, 42, 0.6)), url(${heroImage})` }}>
                <div className="container hero-content">
                    <h1>Beacon of Life <br /><span className="text-gold">Primary School</span></h1>
                    <p className="hero-subtitle">Offering both day and boarding facilities with a Christian-based education.</p>
                    <a href="https://wa.me/263786757073" target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-lg">Apply Now</a>
                </div>
            </div>

            {/* Welcome Section */}
            <section className="section-padding bg-white">
                <div className="container">
                    <div className="section-header text-center mb-5">
                        <h2 className="section-title">Welcome to Beacon of Life</h2>
                        <div className="title-underline"></div>
                    </div>
                    <div className="row align-center">
                        <div className="col-lg-8 mx-auto text-center">
                            <p className="lead-text">
                                Welcome to Beacon of Life Primary School, offering both day and boarding facilities with a Christian-based education in English.
                                Our broad curriculum includes French, Music, and offers Swimming and Aerobics alongside traditional sports.
                                With a focus on excellence, we have become the school of choice, thanks to our dedicated staff and visionary leadership.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Subjects / Curriculum */}
            <section className="section-padding bg-light">
                <div className="container">
                    <div className="section-header text-center mb-5">
                        <h2 className="section-title">Subjects & Extracurriculars</h2>
                        <div className="title-underline"></div>
                    </div>
                    <div className="feature-grid">
                        <div className="feature-card">
                            <BookOpen className="feature-icon" size={40} />
                            <h3>Academic Excellence</h3>
                            <p>Broad curriculum including English, Mathematics, and Sciences delivered by dedicated staff.</p>
                        </div>
                        <div className="feature-card">
                            <Music className="feature-icon" size={40} />
                            <h3>Music & Arts</h3>
                            <p>Comprehensive music programs to nurture creativity and talent.</p>
                        </div>
                        <div className="feature-card">
                            <Droplets className="feature-icon" size={40} />
                            <h3>Swimming & Aerobics</h3>
                            <p>Physical education including swimming lessons and aerobics for healthy lifestyles.</p>
                        </div>
                        <div className="feature-card">
                            <Trophy className="feature-icon" size={40} />
                            <h3>Sports</h3>
                            <p>Traditional sports programs fostering teamwork, discipline, and physical fitness.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Fees Structure */}
            <section className="section-padding bg-white">
                <div className="container">
                    <div className="section-header text-center mb-5">
                        <h2 className="section-title">Fees Structure</h2>
                        <div className="title-underline"></div>
                    </div>
                    <div className="fees-container glass-panel p-4">
                        <h3>Transport For Day Scholars</h3>
                        <div className="fee-item">
                            <span>From Town Centre to School (Optional):</span>
                            <span className="fee-price">$35 / month</span>
                        </div>
                        <div className="fee-item">
                            <span>From areas outside Town Centre:</span>
                            <span className="fee-price">$60 / month</span>
                        </div>
                        <div className="mt-4">
                            <p className="text-sm text-muted">* Prices are subject to change. Please contact administration for the latest tuition fees.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Banking Details */}
            <section className="section-padding bg-primary-dark text-white">
                <div className="container">
                    <div className="section-header text-center mb-5">
                        <h2 className="section-title text-white">Banking Details</h2>
                        <div className="title-underline bg-gold"></div>
                    </div>
                    <div className="banking-grid">
                        <div className="bank-card">
                            <h3>Tuition Account</h3>
                            <p><strong>Bank:</strong> NBS</p>
                            <p><strong>Branch:</strong> Bulawayo</p>
                            <p><strong>Account Name:</strong> Beacon of Life Primary</p>
                            <p><strong>Account Number:</strong> 3251-XXXX-XXXX</p>
                        </div>
                        <div className="bank-card">
                            <h3>Transport & Uniforms</h3>
                            <p><strong>Bank:</strong> ZB Bank</p>
                            <p><strong>Branch:</strong> Bulawayo</p>
                            <p><strong>Account Name:</strong> Beacon of Life Primary</p>
                            <p><strong>Account Number:</strong> 4537-XXXX-XXXX</p>
                        </div>
                    </div>
                    <div className="text-center mt-5">
                        <p>All proof of payments should be sent to the Bursar through our WhatsApp platform.</p>
                    </div>
                </div>
            </section>
        </div>
    );
}
