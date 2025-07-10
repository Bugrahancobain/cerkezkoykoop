'use client';
import React, { useEffect, useRef, useState } from 'react';
import '../styles/aboutUs.css';
import { BiWorld } from "react-icons/bi";
import { FaTruck } from "react-icons/fa";
import { LiaTruckLoadingSolid } from "react-icons/lia";
import HomeContact from '../components/homeContact';

function Page() {
    const currentYear = new Date().getFullYear();
    const foundedYear = 1977;
    const experience = currentYear - foundedYear;

    const [years, setYears] = useState(0);
    const counterRef = useRef(null);
    const [hasAnimated, setHasAnimated] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !hasAnimated) {
                    let count = 0;
                    const interval = setInterval(() => {
                        count++;
                        setYears(count);
                        if (count >= experience) {
                            clearInterval(interval);
                            setHasAnimated(true);
                        }
                    }, 50); // her sayı artış aralığı
                }
            },
            { threshold: 0.5 }
        );

        if (counterRef.current) {
            observer.observe(counterRef.current);
        }

        return () => {
            if (counterRef.current) {
                observer.unobserve(counterRef.current);
            }
        };
    }, [hasAnimated, experience]);
    return (
        <div className="aboutUsMain">
            <div className='aboutUsFirstWrapper'>
                <div className="aboutUsFirstDiv">
                    <h2>Güvenilir ve Hızlı</h2>
                    <h3>Taşımacılık Hizmeti</h3>

                    <p>
                        Çerkezköy Taşıma Kooperatifimiz, 1977 yılında taşımacılıkla geçimini sağlayan 7 esnafın bir araya gelmesiyle kurulmuştur.
                        Kurulduğumuz günden bu yana Çerkezköy Organize Sanayi Bölgesi&apos;nde faaliyet gösteren <strong>saygın firmalarla</strong> iş birliği içinde taşımacılık hizmeti sunmaktayız.
                    </p>

                    <p>
                        Bugün itibariyle kooperatifimiz, <strong>141 ortak ve 250 araçlık</strong> (TIR, kamyon, kamyonet, panelvan) filosuyla geniş kapsamlı taşımacılık çözümleri sunmaktadır.
                    </p>

                    <p>
                        Kooperatifimizin bünyesinde, yükleme-boşaltma süreçlerinde ihtiyaç duyulan <strong>forklift hizmetleri</strong> profesyonel ekip ve ekipmanlarla sağlanmaktadır.
                        Özellikle <strong>Çerkezköy Gümrük Sahası</strong> ve <strong>Çorlu Tren İstasyonu Vagon Sahası</strong> gibi stratejik noktalarda yürütülen bu hizmetlerle, yurtdışından gelen yük vagonlarının elleçleme işlemleri başarıyla gerçekleştirilmektedir.
                        Bu alanlarda yüksek tonajlı forkliftlerimiz ile hem konteyner hem paletli yüklerin hızlı ve güvenli şekilde aktarımı sağlanmaktadır.
                    </p>

                    <p>
                        Ayrıca <strong>TIR parkı işletmeciliği</strong> kapsamında önemli bir görev üstlenmekteyiz.
                        <strong>Veliköy Gümrüklü TIR Parkı</strong>, Çerkezköy Belediyesi ile yapılan ortaklık doğrultusunda işletilmekte olup, günlük yoğun TIR trafiğini düzenleyen, güvenli ve modern bir bekleme alanı sunmaktadır.
                        <strong>Çerkezköy OSB TIR Parkı</strong> ise son 3 yıldır tarafımızca işletilmekte; bu alanda sürücülere dinlenme alanları, güvenlik, kantin ve araç bakım noktaları gibi birçok hizmet bir arada sağlanmaktadır.
                    </p>

                    <p>
                        Kurumsal yapımız içerisinde şu an <strong>11 personel</strong> görev yapmakta olup, her geçen gün büyüyen yapımızla bölge taşımacılığına katkı sunmaya devam ediyoruz.
                    </p>
                </div>
                <div className="aboutUsSecondDiv">
                    <img className='aboutUsIMG1' src="/homeAboutUs.jpg" alt="aboutUs" />
                    <img className='aboutUsIMG2' src="/homeAboutUs2.jpeg" alt="aboutUs2" />
                    <div ref={counterRef} className="experienceText">
                        <span className="years">{years}+</span> Yıllık Tecrübe
                    </div>
                </div>
            </div>
            <div className='aboutUsSliderMain'>
                <div className='aboutUsSliderContent1'>
                    <BiWorld />
                    <h2>Profesyonel Nakliye Çözümleri</h2>
                    <p>Nakliye çözümlerinde en iyi ve karlı çözümleri sizler için buluyoruz.</p>
                </div>
                <div className="aboutUsSliderContent2">
                    <FaTruck />
                    <h2>Güvenilir Taşımacılık</h2>
                    <p>Çerkezköy Karayolu Yük Taşıma Kooperatifi ile mallarınızın güvenliğinden son derece emin olabilirsiniz.</p>
                </div>
                <div className="aboutUsSliderContent3">
                    <LiaTruckLoadingSolid />
                    <h2>Hızlı ve Etkili Nakliye Hizmeti</h2>
                    <p>Çerkezköy Karayolu Yük Taşıma Kooperatifi olarak sorunsuz ve hızlı bir şekilde ürünlerinizi nakliye ediyoruz.</p>
                </div>
            </div>
            <div className="aboutusInfoMain"></div>
            <HomeContact />
        </div>
    )
}

export default Page