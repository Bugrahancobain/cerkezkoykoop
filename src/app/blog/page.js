"use client";

import React, { useEffect, useState } from "react";
import { ref, onValue } from "firebase/database";
import { database } from "../../../firebase"; // senin firebase.js yoluna göre güncelle
import BlogClient from "./BlogClient";

export default function BlogPage() {
    const [blogs, setBlogs] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const blogsRef = ref(database, "blogs");
        onValue(blogsRef, (snapshot) => {
            const data = snapshot.val();
            const blogList = data
                ? Object.entries(data).map(([id, blog]) => ({ id, ...blog }))
                : [];

            // Tarihe göre sırala (varsa)
            blogList.sort((a, b) => new Date(b.dateAdded) - new Date(a.dateAdded));

            setBlogs(blogList);
            setLoading(false);
        });
    }, []);

    if (loading) {
        return <div style={{ textAlign: "center", padding: "50px" }}>Yükleniyor...</div>;
    }

    return <BlogClient blogs={blogs} />;
}