import React from 'react'
import '../styles/footer.css'
import Link from 'next/link'
import { FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { IoIosMail } from "react-icons/io";

function footer() {
    return (
        <div className='footerMain'>
            <div className='footerContent'>
                <div className='footerInfo'>
                    <img src="/navbarLogo.png" alt="Çerkezköy Motorlu Yük Taşıma Kooperatifi" />
                    <span>Çerkezköy' de nakliyat hizmeti sunan firmamız sektöründe öncü olan bir firma haline gelmiştir. Bundan dolayı profesyonel taşımacılık konusunda en güvenilir hizmeti sizlere sağlamayı taahhüt ediyoruz.</span>
                </div>
                <div className="footerLinks">
                    <h2>Hızlı Menü</h2>
                    <Link href="/" className='footerLink'>Anasayfa</Link>
                    <Link href="/aboutUs" className='footerLink'>Hakkımızda</Link>
                    <Link href="/ourServices" className='footerLink'>Hizmetlerimiz</Link>
                    <Link href="/blog" className='footerLink'>Blog</Link>
                    <Link href="/contact" className='footerLink'>İletişim</Link>
                </div>
                <div className="footerContact">
                    <h2>İletişim</h2>
                    <div className='footerAdress'>
                        <FaLocationDot />
                        <span>İstasyon, Levent Sk., 59500 Çerkezköy/Tekirdağ</span>
                    </div>
                    <div className='footerMail'>
                        <IoIosMail />
                        <span>info@cerkezkoytaskoop.com</span>
                    </div>
                    <div className='footerPhone'>
                        <FaPhoneAlt />
                        <span>+90 532 731 20 47</span>
                    </div>
                </div>

            </div>
            <div className="footerBot">
                <span>© 2023 Çerkezköy Motorlu Yük Taşıma Kooperatifi. Tüm Hakları Saklıdır.</span>
            </div>
        </div>
    )
}

export default footer