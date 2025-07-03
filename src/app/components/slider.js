'use client';
import React from 'react';
import { Pagination, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';

import '../styles/slider.css';
import Link from 'next/link';

export default function App() {
    return (
        <>
            <Swiper
                pagination={true}
                autoplay={{ delay: 5000, disableOnInteraction: false }}
                modules={[Pagination, Autoplay]}
                className="mySwiper"
            >                <SwiperSlide>
                    <div className="slider1Main">
                        <div className="sliderOverlay"></div>
                        <img src="/slider1.webp" alt="slider" className="sliderImage" />
                        <div className="sliderText">
                            <h1>Türkiye'nin En Kaliteli</h1>
                            <h2>Nakliye Firması</h2>
                            <p>
                                Çeşitli hizmetlerimizle nakliye edilmesi gereken her ürünü
                                istediğiniz yere ulaştırıyor, güvenli ulaşım için tüm özeni
                                gösteriyoruz.
                            </p>
                            <Link href="/aboutUs" className="sliderLink">
                                Hakkımızda
                            </Link>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="slider2Main">
                        <div className="sliderOverlay"></div>
                        <img src="/slider2.jpeg" alt="slider" className="sliderImage" />
                        <div className="sliderText">
                            <h1>Türkiye'nin En Kaliteli</h1>
                            <h2>Nakliye Firması</h2>
                            <p>
                                Çeşitli hizmetlerimizle nakliye edilmesi gereken her ürünü
                                istediğiniz yere ulaştırıyor, güvenli ulaşım için tüm özeni
                                gösteriyoruz.
                            </p>
                            <Link href="/ourServices" className="sliderLink">
                                Hizmetlerimiz
                            </Link>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="slider3Main">
                        <div className="sliderOverlay"></div>
                        <img src="/slider3.jpeg" alt="slider" className="sliderImage" />
                        <div className="sliderText">
                            <h1>Türkiye'nin En Kaliteli</h1>
                            <h2>Nakliye Firması</h2>
                            <p>
                                Çeşitli hizmetlerimizle nakliye edilmesi gereken her ürünü
                                istediğiniz yere ulaştırıyor, güvenli ulaşım için tüm özeni
                                gösteriyoruz.
                            </p>
                            <Link href="/contact" className="sliderLink">
                                İletişim
                            </Link>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </>
    );
}
