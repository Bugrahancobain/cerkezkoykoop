"use client";

import React, { useEffect } from "react";
import {
    FaTwitter, FaFacebook, FaEnvelope, FaLink,
    FaChevronLeft, FaChevronRight
} from "react-icons/fa";
import Link from "next/link";
import "./blogDetail.css";

function BlogDetailClient({ blog, blogs }) {
    const currentUrl = typeof window !== "undefined" ? window.location.href : "";

    const currentIndex = blogs.findIndex((b) => b.id === blog.id);
    const previousBlog = currentIndex > 0 ? blogs[currentIndex - 1] : null;
    const nextBlog = currentIndex < blogs.length - 1 ? blogs[currentIndex + 1] : null;

    const handleShare = (platform) => {
        switch (platform) {
            case "twitter":
                window.open(`https://twitter.com/intent/tweet?text=Check+this+out!&url=${currentUrl}`, "_blank");
                break;
            case "facebook":
                window.open(`https://www.facebook.com/sharer/sharer.php?u=${currentUrl}`, "_blank");
                break;
            case "email":
                window.location.href = `mailto:?subject=Check this out&body=${currentUrl}`;
                break;
            case "link":
                navigator.clipboard.writeText(currentUrl);
                alert("Link panoya kopyalandı!");
                break;
            default:
                break;
        }
    };

    return (
        <div className="blogDetailPage">
            <div className="blogDetailImageHeader">
                <img className="blogDetailsBanner" src={blog.image} alt={blog.title} />
                <div className="blogDetailHeaderDiv">
                    <h1>{blog.title}</h1>
                </div>
            </div>

            <div className="blogDetailContent">
                <div style={{ lineHeight: "1.6" }} dangerouslySetInnerHTML={{ __html: blog.description }} />

                <div className="social-container">
                    <div className="share-buttons">
                        <button className="share-button twitter" onClick={() => handleShare("twitter")}><FaTwitter /></button>
                        <button className="share-button facebook" onClick={() => handleShare("facebook")}><FaFacebook /></button>
                        <button className="share-button email" onClick={() => handleShare("email")}><FaEnvelope /></button>
                        <button className="share-button link" onClick={() => handleShare("link")}><FaLink /></button>
                    </div>
                </div>
            </div>

            <div className="previousNextBlogContainer">
                <div className="previousNextBlogContent">
                    {previousBlog && (
                        <div className="previousBlog">
                            <div className="navHeader">
                                <FaChevronLeft />
                                <h3>Önceki Yazı</h3>
                            </div>
                            <Link href={`/blog/${previousBlog.id}`} className="blogLink">
                                <img src={previousBlog.image} alt={previousBlog.title} className="blogImage" />
                                <div>
                                    <h4 className="blogTitle">{previousBlog.title}</h4>
                                    <div className="blogExcerpt" dangerouslySetInnerHTML={{
                                        __html: previousBlog.content?.substring(0, 50) + "..."
                                    }} />
                                </div>
                            </Link>
                        </div>
                    )}
                    {nextBlog && (
                        <div className="nextBlog">
                            <div className="navHeader">
                                <h3>Sonraki Yazı</h3>
                                <FaChevronRight />
                            </div>
                            <Link href={`/blog/${nextBlog.id}`} className="blogLink">
                                <img src={nextBlog.image} alt={nextBlog.title} className="blogImage" />
                                <div>
                                    <h4 className="blogTitle">{nextBlog.title}</h4>
                                    <div className="blogExcerpt" dangerouslySetInnerHTML={{
                                        __html: nextBlog.content?.substring(0, 50) + "..."
                                    }} />
                                </div>
                            </Link>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default BlogDetailClient;