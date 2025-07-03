"use client";

import React, { useEffect, useState } from "react";
import { FaTruckFast, FaArrowRight } from "react-icons/fa6";
import { useRouter } from "next/navigation";
import { FaChevronDown } from "react-icons/fa";
import { ref, onValue } from "firebase/database";
import { database } from "../../../firebase"; // yolunu kendi projenle eşleştir
import "./ourServices.css";

function OurServicesPage() {
    const [services, setServices] = useState([]);
    const router = useRouter();

    useEffect(() => {
        const servicesRef = ref(database, "services");
        onValue(servicesRef, (snapshot) => {
            const data = snapshot.val();
            const servicesArray = data
                ? Object.entries(data).map(([id, value]) => ({ id, ...value }))
                : [];
            setServices(servicesArray);
        });
    }, []);

    return (
        <div className="ourServicesMain">
            <div className="blogPageHeaderDiv">
                <h1>Hizmetlerimiz</h1>
                <FaChevronDown />
            </div>

            <div className="ourServicesGrid">
                {services.map((service) => (
                    <div
                        key={service.id}
                        className="ourServicesCard"
                        onClick={() => router.push(`/services/${service.id}`)}
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
    );
}

export default OurServicesPage;