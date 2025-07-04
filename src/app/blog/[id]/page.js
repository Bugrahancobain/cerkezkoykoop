"use client";

import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { ref, onValue } from "firebase/database";
import { database } from "../../../../firebase"; // client-side firebase.js
import BlogDetailClient from "./BlogDetailClient";

export default function BlogDetailPage() {
    const { id } = useParams();
    const [blogs, setBlogs] = useState([]);
    const [currentBlog, setCurrentBlog] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (!id) return;

        const blogsRef = ref(database, "blogs");
        const unsubscribe = onValue(blogsRef, (snapshot) => {
            const data = snapshot.val();

            const blogList = data
                ? Object.entries(data).map(([id, blog]) => ({ id, ...blog }))
                : [];

            blogList.sort((a, b) => new Date(b.dateAdded) - new Date(a.dateAdded));
            setBlogs(blogList);

            const found = blogList.find((b) => b.id === id);
            setCurrentBlog(found);
            setLoading(false);
        });

        // Cleanup: component unmount olursa listener'ı kaldır
        return () => unsubscribe();
    }, [id]);

    if (loading) return <p style={{ textAlign: "center", marginTop: "50px" }}>Yükleniyor...</p>;
    if (!currentBlog) return <p>Blog bulunamadı.</p>;

    return <BlogDetailClient blog={currentBlog} blogs={blogs} />;
}