"use client";

import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { ref, onValue } from "firebase/database";
import { database } from "../../../../firebase"; // kendi client-side firebase.js yolun
import ReferenceDetailClient from "./ReferenceDetailClient";

export default function ReferenceDetailPage() {
    const { id } = useParams();
    const [services, setServices] = useState([]);
    const [service, setService] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (!id) return;

        const servicesRef = ref(database, "services");
        const unsubscribe = onValue(servicesRef, (snapshot) => {
            const data = snapshot.val();
            const list = data
                ? Object.entries(data).map(([id, item]) => ({ id, ...item }))
                : [];

            setServices(list);

            const current = list.find((item) => item.id === id);
            setService(current);
            setLoading(false);
        });

        return () => unsubscribe();
    }, [id]);

    if (loading) return <p>Yükleniyor...</p>;
    if (!service) return <p>Hizmet bulunamadı.</p>;

    return <ReferenceDetailClient service={service} services={services} />
}