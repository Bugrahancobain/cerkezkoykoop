"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { ref, onValue } from "firebase/database";
import { database } from "../../../firebase";
import "../styles/homeBlog.css"
function HomeBlog() {
    const [blogs, setBlogs] = useState([]);
    const router = useRouter();

    useEffect(() => {
        const blogRef = ref(database, "blogs");
        onValue(blogRef, (snapshot) => {
            const data = snapshot.val();
            const blogArray = data
                ? Object.entries(data).map(([id, value]) => ({ id, ...value }))
                : [];
            // Tarihe göre sıralayıp son 3 taneyi al
            const latestBlogs = blogArray
                .sort((a, b) => new Date(b.date) - new Date(a.date))
                .slice(0, 3);
            setBlogs(latestBlogs);
        });
    }, []);
    return (
        <div className='homeBlogMain'>
            <div className="homeBlogTitle">
                <h2>Bizden</h2><h3>Haberler</h3>
            </div>
            <div className="homeBlogContextDiv">
                {blogs.map((blog) => (
                    <div
                        key={blog.id}
                        className="blogCard"
                        onClick={() => router.push(`/blog/${blog.id}`)}
                    >
                        <img src={blog.image} alt={blog.title} className="blogImage" />
                        <h3 className="blogTitle">{blog.title}</h3>
                        <button className="blogButton">Daha Fazlası ➔</button>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default HomeBlog