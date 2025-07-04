"use client";

import React, { useEffect } from "react";
import {
    FaTwitter, FaFacebook, FaEnvelope,
    FaLink, FaChevronLeft, FaChevronRight, FaChevronDown
} from "react-icons/fa";
import Link from "next/link";
import "./referenceDetail.css"; // CSS aynı kullanılabilir

function ServiceDetailClient({ service, services }) {
    const currentUrl = typeof window !== "undefined" ? window.location.href : "";

    const currentIndex = services.findIndex((s) => s.id === service.id);
    const previous = currentIndex > 0 ? services[currentIndex - 1] : null;
    const next = currentIndex < services.length - 1 ? services[currentIndex + 1] : null;

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
        <div>
            <div className="referenceDetailsHeaderDiv">
                <h1>{service.title}</h1>
                <FaChevronDown />
            </div>

            <div className="SidebarCenterClass">
                <div className="referenceDetailPage">
                    {/* Sidebar */}
                    <div className="referenceSidebar">
                        <div className="referenceSidebarSection displayNoneClass">
                            <h3>{service.title}</h3>
                        </div>
                        <div
                            className="displayNoneClass"
                            style={{ color: "grey" }}
                            dangerouslySetInnerHTML={{ __html: service.description?.substring(0, 200) + "..." }}
                        />
                    </div>

                    {/* Ana içerik */}
                    <div style={{ width: "66%", fontSize: "18px" }}>
                        <div className="referenceDetailHeader">
                            <img src={service.image} alt={service.title} />
                        </div>
                        <div style={{ lineHeight: "1.6" }} dangerouslySetInnerHTML={{ __html: service.description }} />
                    </div>
                </div>
            </div>

            {/* Sosyal Paylaşım */}
            <div style={{ display: "flex", justifyContent: "center" }}>
                <div className="social-container">
                    <div className="share-buttons">
                        <button className="share-button twitter" onClick={() => handleShare("twitter")}><FaTwitter /></button>
                        <button className="share-button facebook" onClick={() => handleShare("facebook")}><FaFacebook /></button>
                        <button className="share-button email" onClick={() => handleShare("email")}><FaEnvelope /></button>
                        <button className="share-button link" onClick={() => handleShare("link")}><FaLink /></button>
                    </div>
                </div>
            </div>

            {/* Önceki - Sonraki */}
            <div className="previousNextReferenceContainer">
                <div className="previousNextReferenceContent">
                    {previous && (
                        <div className="previousReference">
                            <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                                <FaChevronLeft />
                                <h3>Önceki</h3>
                            </div>
                            <Link href={`/services/${previous.id}`} className="ReferenceLink">
                                <img src={previous.image} className="ReferenceImage" alt={previous.title} />
                                <div>
                                    <h4 className="ReferenceTitle">{previous.title}</h4>
                                    <div className="referenceExcerpt" dangerouslySetInnerHTML={{
                                        __html: previous.description?.substring(0, 50) + "..."
                                    }} />
                                </div>
                            </Link>
                        </div>
                    )}
                    {next && (
                        <div className="nextReference">
                            <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                                <h3>Sonraki</h3>
                                <FaChevronRight />
                            </div>
                            <Link href={`/services/${next.id}`} className="ReferenceLink">
                                <img src={next.image} className="ReferenceImage" alt={next.title} />
                                <div>
                                    <h4 className="ReferenceTitle">{next.title}</h4>
                                    <div className="referenceExcerpt" dangerouslySetInnerHTML={{
                                        __html: next.description?.substring(0, 50) + "..."
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

export default ServiceDetailClient;