import React from 'react';
import { User, GraduationCap, Heart, Star } from 'lucide-react';
import './OurStaff.css';
import chaplainImg from '../assets/chaplain.jpg';
import mNcubeImg from '../assets/m_ncube.jpg';
import xMabhenaImg from '../assets/x_mabhena.jpg';
import pNdlovuImg from '../assets/p_ndlovu.jpg';
import bJetiImg from '../assets/b_jeti.jpg';
import lBhandaImg from '../assets/l_bhanda.jpg';
import directorImg from '../assets/director.jpg';
import principalImg from '../assets/principal.jpg';

const staffMembers = [
    {
        name: 'Pastor Sabelo Dube',
        role: 'Director',
        description: (
            <>
                MA, MBA, MCLIP. CMgr, Dip Theology.<br /><br />
                Visionary leader dedicated to providing holistic education and nurturing future leaders.
            </>
        ),
        icon: <Star size={40} />,
        image: directorImg
    },
    {
        name: 'S Ngwabi',
        role: 'Principal',
        description: 'Leading our school community with dedication to academic excellence and student well-being.',
        icon: <GraduationCap size={40} />,
        image: principalImg
    },
    {
        name: 'Pastor G. Gumpo',
        role: 'Chaplain',
        description: 'Guiding the spiritual growth and moral development of our students and staff.',
        icon: <Heart size={40} />,
        image: chaplainImg
    },
    {
        name: 'M Ncube',
        role: 'ECD Teacher',
        description: 'Expert in primary education with experience in Cambridge curriculum.',
        icon: <GraduationCap size={40} />,
        image: mNcubeImg
    },
    {
        name: 'P Ndlovu',
        role: 'Grade One teacher',
        description: 'Inspiring creativity and artistic expression in our young learners.',
        icon: <User size={40} />,
        image: pNdlovuImg
    },
    {
        name: 'B Jeti',
        role: 'Grade two teacher',
        description: 'Dedicated to creating an engaging and supportive learning environment for young minds.',
        icon: <User size={40} />,
        image: bJetiImg
    },
    {
        name: 'X Mabhena',
        role: 'Grade 3 Teacher',
        description: 'Passionate about education and developing teamwork skills in students.',
        icon: <User size={40} />,
        image: xMabhenaImg
    },
    {
        name: 'L Bhanda',
        role: 'Grade Four teacher',
        description: 'Committed to fostering academic excellence and character development.',
        icon: <User size={40} />,
        image: lBhandaImg
    }
];

export default function OurStaff() {
    return (
        <div className="our-staff-page">
            <section className="staff-hero">
                <div className="container">
                    <h1>Meet <span className="text-highlight">Our Staff</span></h1>
                    <p className="hero-subtitle">The dedicated professionals shaping the future of our students.</p>
                </div>
            </section>

            <section className="staff-grid-section section-padding">
                <div className="container">
                    <div className="staff-grid">
                        {staffMembers.map((member, index) => (
                            <div key={index} className="staff-card">
                                <div className="staff-image-container">
                                    {member.image ? (
                                        <img src={member.image} alt={member.name} className="staff-img" />
                                    ) : (
                                        <div className="staff-placeholder">
                                            {member.icon}
                                        </div>
                                    )}
                                </div>
                                <div className="staff-info">
                                    <h3 className="staff-name">{member.name}</h3>
                                    <p className="staff-role">{member.role}</p>
                                    <div className="staff-divider"></div>
                                    <p className="staff-description">{member.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="philosophy-section section-padding bg-light">
                <div className="container">
                    <div className="philosophy-content text-center">
                        <h2 className="section-title">Our Teaching Philosophy</h2>
                        <div className="title-underline"></div>
                        <p className="philosophy-text">
                            At Beacon of Life Institute, our staff is committed to fostering an environment where
                            every child feels valued, challenged, and inspired. We believe in academic excellence
                            balanced with character development and spiritual growth.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
}
