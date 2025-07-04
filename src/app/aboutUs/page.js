'use client';
import React, { useEffect, useRef, useState } from 'react';
import '../styles/aboutUs.css';
import { BiWorld } from "react-icons/bi";
import { FaTruck } from "react-icons/fa";
import { LiaTruckLoadingSolid } from "react-icons/lia";
import HomeContact from '../components/homeContact';

function page() {
    const currentYear = new Date().getFullYear();
    const foundedYear = 2005;
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
                    }, 100); // her sayı artış aralığı
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

                    <p>Çerkezköy Karayolu Yük Taşıma Kooperatifi olarak, sektörde edindiğimiz uzun yıllara dayanan tecrübemizle müşterilerimize kaliteli, güvenilir ve sürdürülebilir taşımacılık hizmeti sunuyoruz. Kurulduğumuz günden bu yana, taşımacılığı yalnızca bir yük değil, aynı zamanda bir sorumluluk olarak görmekteyiz.</p>

                    <p>Müşteri memnuniyetini her zaman ön planda tutan anlayışımızla; hızlı, etkin ve çözüm odaklı taşıma hizmetleri sunarak bölgemizde lider konuma yükselmekteyiz. Gelişen teknolojiyi ve sektörel yenilikleri yakından takip ederek, her geçen gün hizmet kalitemizi daha da ileriye taşıyoruz.</p>

                    <p>Kooperatif yapımız sayesinde şeffaflık, dayanışma ve ortak fayda ilkelerini benimsiyor; üyelerimizle birlikte güçlü bir ekonomik yapı inşa ediyoruz. Geniş araç filomuz ve deneyimli kadromuzla, sanayiciden esnafa kadar her ölçekten müşterimizin ihtiyaçlarına özel çözümler üretiyoruz.</p>

                    <p>Sadece bugünün değil, yarının da yükünü birlikte taşımak için çıktığımız bu yolda; disiplinli çalışma prensibimiz, dürüst yaklaşımımız ve işimize duyduğumuz saygı ile sizlere değer katmaya devam edeceğiz.</p>

                    <p>Çerkezköy Yük Taşıma Kooperatifi olarak taşımanın güvenle, zamanında ve hakkıyla yapılması için buradayız.</p>
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

export default page