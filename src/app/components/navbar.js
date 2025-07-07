'use client';

import Link from 'next/link';
import React, { useState } from 'react';
import { FaLocationDot, FaPhoneVolume, FaBars } from "react-icons/fa6";
import { FaTimes } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import '../styles/navbar.css';

function Navbar() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <div className='navbarMain'>
            {/* ÜST BAR */}
            <div className="navbarFirstDiv">
                <div className='navbarAdress'>
                    <FaLocationDot />
                    <a
                        href="https://maps.app.goo.gl/PYEfnc9v9NkfmMpN6"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        İstasyon Mahallesi İnönü Caddesi No 1/3 Çerkezköy/Tekirdağ
                    </a>
                </div>
                <div className='navbarMail'>
                    <IoIosMail />
                    <a href="mailto:info@cerkezkoytaskoop.com">
                        info@cerkezkoytaskoop.com
                    </a>
                </div>
            </div>

            {/* ALT BAR */}
            <div className="navbarSecondDiv">
                <Link href="/" className='navbarLogoLink'>
                    <img src="/navbarLogo.png" alt="Çerkezköy Karayolu Yük Taşıma Kooperatifi" />
                </Link>

                {/* Burger Icon */}
                <div className="burgerIcon" onClick={toggleMenu}>
                    {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
                </div>

                {/* Linkler */}
                <div className={`navbarLinks ${isMobileMenuOpen ? 'navbarLinksMobileOpen' : ''}`}>
                    <Link href="/" className='navbarLink' onClick={() => setIsMobileMenuOpen(false)}>Anasayfa</Link>
                    <Link href="/aboutUs" className='navbarLink' onClick={() => setIsMobileMenuOpen(false)}>Hakkımızda</Link>
                    <Link href="/ourServices" className='navbarLink' onClick={() => setIsMobileMenuOpen(false)}>Hizmetlerimiz</Link>
                    <Link href="/blog" className='navbarLink' onClick={() => setIsMobileMenuOpen(false)}>Blog</Link>
                    <Link href="/contact" className='navbarLink' onClick={() => setIsMobileMenuOpen(false)}>İletişim</Link>
                </div>

                <div className="navbarPhone">
                    <FaPhoneVolume />
                    <a href="tel:+902827265055">0(282) 726 5055</a>
                </div>
            </div>
        </div>
    );
}

export default Navbar;