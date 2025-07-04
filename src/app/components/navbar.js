import Link from 'next/link';
import React from 'react';
import { FaLocationDot, FaPhoneVolume } from "react-icons/fa6";
import { IoIosMail } from "react-icons/io";
import '../styles/navbar.css';

function Navbar() {
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
                        İstasyon, Levent Sk., 59500 Çerkezköy/Tekirdağ
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
                <div className='navbarLinks'>
                    <Link href="/" className='navbarLink'>Anasayfa</Link>
                    <Link href="/aboutUs" className='navbarLink'>Hakkımızda</Link>
                    <Link href="/ourServices" className='navbarLink'>Hizmetlerimiz</Link>
                    <Link href="/blog" className='navbarLink'>Blog</Link>
                    <Link href="/contact" className='navbarLink'>İletişim</Link>
                </div>
                <div className="navbarPhone">
                    <FaPhoneVolume />
                    <a href="tel:+905327312047">+90 532 731 20 47</a>
                </div>
            </div>
        </div>
    );
}

export default Navbar;