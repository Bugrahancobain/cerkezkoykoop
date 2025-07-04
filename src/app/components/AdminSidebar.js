"use client";
import React from "react";
import Link from "next/link";
import "../styles/AdminSideBar.css";
import { getAuth, signOut } from "firebase/auth";

function AdminSidebar() {

    const handleLogout = async () => {
        const auth = getAuth();
        try {
            await signOut(auth);
            router.push(`/login`);
        } catch (error) {
            console.error("Çıkış yapma hatası:", error.message);
        }
    };

    return (
        <div className="AdminSideBarMain">
            <div className="adminSideBarLinkDiv">

                <Link className="adminSideBarLink" href={`/admin/blog`}>
                    Blog Ayarları
                </Link>
                <Link className="adminSideBarLink" href={`/admin/services`}>
                    Hizmet Ayarları
                </Link>
            </div>
            <div className="adminSideBarLinkDiv">
                <div
                    className="adminSideBarLink adminQuickLink"
                    onClick={handleLogout}
                    role="button"
                    tabIndex={0}
                >
                    Çıkış Yap
                </div>
            </div>
        </div>
    );
}

export default AdminSidebar;