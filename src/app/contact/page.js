"use client";

import React, { useRef } from 'react';
import "../styles/contact.css";
import emailjs from '@emailjs/browser';
import { FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";
import { LuMails } from "react-icons/lu";
import { FaMapLocationDot } from "react-icons/fa6";



function Page() {
    const form = useRef();
    console.log("SERVICE:", process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID);
    console.log("TEMPLATE:", process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID);
    console.log("PUBLIC KEY:", process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY);
    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm(
            process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
            process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
            form.current,
            process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
        ).then((result) => {
            console.log(result.text);
            alert("Mesajınız gönderildi.");
        }, (error) => {
            console.log(error.text);
            alert("Bir hata oluştu.");
        });
    };

    return (
        <div className='contactMain'>
            <div className='contactBannerDiv'>
                <img src="/contactBanner.jpg" alt="İletişim Banner" />
            </div>
            <div className='contactContext'>
                <div className='contactFormDiv'>
                    <h2>Çerkezköy Yük Taşıma Koperatifi</h2>
                    <p>Tüm Nakliye Hizmetleri İçin Bizimle İletişime Geçin.</p>
                    <form ref={form} onSubmit={sendEmail} className="contactForm">
                        <input type="text" name="user_name" placeholder="Adınızı Giriniz" required />
                        <input type="email" name="user_email" placeholder="Emailinizi Giriniz" required />
                        <textarea name="message" placeholder="Mesajınızı Giriniz" rows="5" required></textarea>
                        <button type="submit">Gönder</button>
                    </form>
                </div>

                <div className="contactInfo">
                    <h2>İletişim Bilgilerimiz</h2>
                    <div className="contactDetail"><LuMails /> <a href="mailto:info@cerkezkoytaskoop.com">
                        info@cerkezkoytaskoop.com
                    </a>
                    </div>
                    <div className="contactDetail"><LuMails /> <a href="mailto:murat.yildiz@cerkezkoytaskoop.com">
                        murat.yildiz@cerkezkoytaskoop.com
                    </a>
                    </div>
                    <div className="contactDetail"><LuMails /> <a href="mailto:carpaci@cerkezkoytaskoop.com">
                        carpaci@cerkezkoytaskoop.com
                    </a>
                    </div>
                    <div className="contactDetail"><LuMails /> <a href="mailto:muhasebe@cerkezkoytaskoop.com">
                        muhasebe@cerkezkoytaskoop.com
                    </a>
                    </div>
                    <div className="contactDetail"><FaMapLocationDot />  <a
                        href="https://maps.app.goo.gl/PYEfnc9v9NkfmMpN6"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        İstasyon Mahallesi İnönü Caddesi No 1/3 Çerkezköy/Tekirdağ
                    </a></div>
                    <hr />
                    <div className="contactCallNow">
                        <FaPhoneAlt />
                        <div style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
                            <span>Sabit Hat</span>
                            <strong><a href="tel:+902827265055">0 (282) 726 5055</a></strong>
                        </div>
                        <div style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
                            <span>Başkan - Yılmaz Arat</span>
                            <strong><a href="tel:+05324459371">0 (532) 445 9371</a></strong>
                        </div>
                        <div style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
                            <span>Muhasebe - Murat Yıldız</span>
                            <strong><a href="tel:+905327312047">0 (532) 731 2047</a></strong>
                        </div>
                    </div>
                    <div className="contactCallNow">
                        <FaPhoneAlt />
                        <div style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
                            <span>Sevkiyat - Cemil Arpacı</span>
                            <strong><a href="tel:+905368629394">0 (536) 862 9394</a></strong>
                        </div>
                        <div style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
                            <span>Sevkiyat - Barış Can Yılmaz</span>
                            <strong><a href="tel:+05333200176">0 (533) 320 01 76</a></strong>
                        </div>
                        <div style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
                            <span>Sevkiyat - Gürkan Duygu</span>
                            <strong><a href="tel:+905334128993">0 (533) 412 8993</a></strong>
                        </div>
                    </div>

                </div>
            </div>
            <div className="contactMap">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6792.756291794383!2d27.99109174714507!3d41.283141385253025!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14b52648379b86cd%3A0xb2a578001df38ba9!2zU3Mgw4dlcmtlemvDtnkgTW90b3JsdSBUYcWfxLF5xLFjxLFsYXIgS29vcGVyYXRpZmk!5e1!3m2!1str!2str!4v1751384838268!5m2!1str!2str" style={{ border: "0", width: "100%", height: "75vh", margin: "0" }} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </div >
    )
}

export default Page