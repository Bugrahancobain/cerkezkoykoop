import Link from 'next/link';
import React from 'react'
import { FaLocationDot, FaPhoneVolume } from "react-icons/fa6";
import { IoIosMail } from "react-icons/io";
import '../styles/navbar.css';

function navbar() {
    return (
        <div className='navbarMain'>
            <div className="navbarFirstDiv">
                <div className='navbarAdress'>
                    <FaLocationDot />
                    <span>İstasyon, Levent Sk., 59500 Çerkezköy/Tekirdağ</span>
                </div>
                <div className='navbarMail'>
                    <IoIosMail />
                    <span>info@cerkezkoytaskoop.com</span>
                </div>
            </div>
            <div className="navbarSecondDiv">
                <Link href="/" className='navbarLogoLink'>
                    <img src="/navbarLogo.png" alt="Çerkezköy Motorlu Yük Taşıma Kooperatifi" />
                </Link >
                <div className='navbarLinks'>
                    <Link href="/" className='navbarLink'>Anasayfa</Link>
                    <Link href="/aboutUs" className='navbarLink'>Hakkımızda</Link>
                    <Link href="/ourServices" className='navbarLink'>Hizmetlerimiz</Link>
                    <Link href="/blog" className='navbarLink'>Blog</Link>
                    <Link href="/contact" className='navbarLink'>İletişim</Link>
                </div>
                <div className="navbarPhone">
                    <FaPhoneVolume />
                    <span>+90 532 731 20 47</span>
                </div>
            </div>
        </div>
    )
}

export default navbar