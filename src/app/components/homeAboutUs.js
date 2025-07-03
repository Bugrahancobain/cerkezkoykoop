'use client';
import React, { useEffect, useRef, useState } from 'react';
import '../styles/homeAboutUs.css';
import Link from 'next/link';

function HomeAboutUs() {
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
        <div className='homeAboutUsMain'>
            <div className="homeAboutUsFirstDiv">
                <h2>Güvenilir ve Hızlı</h2>
                <h3>Taşımacılık Hizmeti</h3>
                <p>Çerkezköy Yük Taşıma Kooperatifi olarak sektörde uzun yıllar boyu edindiğimiz deneyim ile son derece kaliteli ve güveilir hizmeti vererek sizleri memnun etmek için çabalıyoruz.</p>
                <p>Müşteri memnuniyeti odaklı çalışan firmamız, hızlı ve etkin nakliye çözümleri ile alanında lider olma yolundadır.</p>
                <Link href="/aboutUs" className='homeAboutUsLink'>Hakkımızda</Link>
            </div>
            <div className="homeAboutUsSecondDiv">
                <img className='homeAboutUsIMG1' src="/homeAboutUs.jpg" alt="homeAboutUs" />
                <img className='homeAboutUsIMG2' src="/homeAboutUs2.jpeg" alt="homeAboutUs2" />
                <div ref={counterRef} className="experienceText">
                    <span className="years">{years}+</span> Yıllık Tecrübe
                </div>
            </div>
        </div>
    );
}

export default HomeAboutUs;