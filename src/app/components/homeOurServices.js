"use client";
import React, { useEffect, useState } from "react";
import { FaTruckFast, FaArrowRight } from "react-icons/fa6";
import '../styles/homeOurServices.css'
import { useRouter } from "next/navigation";
import { ref, onValue } from "firebase/database";
import { database } from "../../../firebase"; // kendi yolunla eşleştir
import "../ourServices/ourServices.css";

function homeOurServices() {

    const [services, setServices] = useState([]);
    const router = useRouter();

    useEffect(() => {
        const servicesRef = ref(database, "services");
        onValue(servicesRef, (snapshot) => {
            const data = snapshot.val();
            const servicesArray = data
                ? Object.entries(data).map(([id, value]) => ({ id, ...value }))
                : [];
            setServices(servicesArray.slice(0, 3)); // Sadece ilk 3 hizmeti al
        });
    }, []);
    return (
        <div className='homeOurServicesMain'>
            <div className="homeOurServicesMainTitles">
                <h2>
                    Hizmetlerimiz
                </h2>
                <h3>Sizlere en uygun fiyatlı ve bütçenize uygun nakliye çözümleri sunuyoruz.</h3>
            </div>
            <div className="homeOurServicesMainCards ourServicesGrid">
                {services.map((service) => (
                    <div
                        key={service.id}
                        className="ourServicesCard"
                        onClick={() => router.push(`/ourServices/${service.id}`)}
                    >
                        <img src={service.image} alt={service.title} className="ourServiceImage" />
                        <div className="serviceInfo">
                            <div className="serviceTitle">
                                <FaTruckFast className="truckIcon" />
                                <span>{service.title}</span>
                            </div>
                            <div className="serviceArrow">
                                <FaArrowRight />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default homeOurServices