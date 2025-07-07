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
                    <img src="/navbarLogo.png" alt="Çerkezköy Karayolu Yük Taşıma Kooperatifi" />
                    <span>Çerkezköy&apos; de nakliyat hizmeti sunan firmamız sektöründe öncü olan bir firma haline gelmiştir. Bundan dolayı profesyonel taşımacılık konusunda en güvenilir hizmeti sizlere sağlamayı taahhüt ediyoruz.</span>
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
                        <a
                            href="https://maps.app.goo.gl/PYEfnc9v9NkfmMpN6"
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{ color: "white" }}
                        >
                            İstasyon Mahallesi İnönü Caddesi No 1/3 Çerkezköy/Tekirdağ
                        </a>
                    </div>
                    <div className='footerMail'>
                        <IoIosMail />
                        <a style={{ color: "white" }} href="mailto:info@cerkezkoytaskoop.com">
                            info@cerkezkoytaskoop.com
                        </a>
                    </div>
                    <div className='footerPhone'>
                        <FaPhoneAlt />
                        <a style={{ color: "white" }} href="tel:+902827265055">0(282) 726 5055</a>
                    </div>
                </div>

            </div>
            <div className="footerBot">
                <span>© 2023 Çerkezköy Karayolu Yük Taşıma Kooperatifi. Tüm Hakları Saklıdır.</span>
            </div>
        </div>
    )
}

export default footer