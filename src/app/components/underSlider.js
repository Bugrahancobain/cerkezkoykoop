import Link from 'next/link';
import React from 'react'
import { BiWorld } from "react-icons/bi";
import { FaTruck } from "react-icons/fa";
import { LiaTruckLoadingSolid } from "react-icons/lia";
import "../styles/underSlider.css";


function underSlider() {
    return (
        <div className='underSliderMain'>
            <div className='underSliderContent1'>
                <BiWorld />
                <h2>Profesyonel Nakliye Çözümleri</h2>
                <p>Nakliye çözümlerinde en iyi ve karlı çözümleri sizler için buluyoruz.</p>
                <Link href="/aboutUs" className='underSliderLink'>Hakkımızda →</Link>
            </div>
            <div className="underSliderContent2">
                <FaTruck />
                <h2>Güvenilir Taşımacılık</h2>
                <p>Çerkezköy Motorlu Yük Taşıma Kooperatifi ile mallarınızın güvenliğinden son derece emin olabilirsiniz.</p>
                <Link href="/ourServices" className='underSliderLink'>Hizmetlerimiz →</Link>
            </div>
            <div className="underSliderContent3">
                <LiaTruckLoadingSolid />
                <h2>Hızlı ve Etkili Nakliye Hizmeti</h2>
                <p>Çerkezköy Motorlu Yük Taşıma Kooperatifi olarak sorunsuz ve hızlı bir şekilde ürünlerinizi nakliye ediyoruz.</p>
                <Link href="/contact" className='underSliderLink'>İletişim →</Link>
            </div>
        </div>
    )
}

export default underSlider