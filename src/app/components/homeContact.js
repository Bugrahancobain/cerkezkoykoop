import Link from 'next/link'
import React from 'react'
import "../styles/homeContact.css"

function homeContact() {
    return (
        <div>
            <div className="homeContactMain">
                <div className="homeContactOverlay"></div>
                <img src="/homeContact.avif" alt="homeContact" className="homeContactImage" />
                <div className="homeContactText">
                    <h1>
                        Trakya Bölgesindeki En
                        Güvenilir Nakliye Firması
                    </h1>
                    <p>
                        Profesyonel ekip ve ekipmanlarla özenle paketlenen eşyalar uzman personellerimiz tarafından sorunsuz bir şekilde yerlerine ulaştırılmaktadır. Sizde taşımacılık hizmeti almak istiyorsanız bize ulaşın.
                    </p>
                    <Link href="/contact" className="homeContactLink">
                        İletişim
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default homeContact