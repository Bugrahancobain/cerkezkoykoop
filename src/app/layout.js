import "./globals.css";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import Script from 'next/script';

import ScrollToTopButton from "./components/ScrollToTopButton";
import Head from "next/head";
export const metadata = {
  title: "Çerkezköy Karayolu Yük Taşıma Kooperatifi",
  description: "Çerkezköy'de güvenilir, hızlı ve profesyonel nakliye hizmetleri sunan kooperatifimiz ile taşımacılık artık çok daha kolay.",
  generator: "Next.js",
  applicationName: "ÇerkezköyKOOP",
  referrer: "origin-when-cross-origin",
  keywords: [
    "Çerkezköy Nakliye",
    "Yük Taşıma",
    "Kooperatif",
    "Motorlu Taşımacılık",
    "Nakliyat",
    "Tekirdağ Taşımacılık",
    "Çerkezköy Karayolu Yük Taşıma Kooperatifi",
    "Evden Eve Nakliyat",
    "Lojistik",
    "Şehirlerarası Nakliyat"
  ],
  authors: [{ name: "Çerkezköy Karayolu Yük Taşıma Kooperatifi", url: "https://cerkezkoyyuktasima.com" }],
  creator: "Çerkezköy Karayolu Yük Taşıma Kooperatifi",
  publisher: "Çerkezköy Karayolu Yük Taşıma Kooperatifi",
  metadataBase: new URL("https://cerkezkoyyuktasima.com"),
  alternates: {
    canonical: "https://cerkezkoyyuktasima.com",
    languages: {
      "tr": "https://cerkezkoyyuktasima.com/tr",
      "en": "https://cerkezkoyyuktasima.com/en"
    }
  },
  openGraph: {
    title: "Çerkezköy Karayolu Yük Taşıma Kooperatifi",
    description: "Çerkezköy'de taşımacılıkta güvenin adı. Hemen iletişime geçin!",
    url: "https://cerkezkoyyuktasima.com",
    siteName: "ÇerkezköyKOOP",
    images: [
      {
        url: "https://cerkezkoyyuktasima.com/og-banner.jpg",
        width: 1200,
        height: 630,
        alt: "ÇerkezköyKOOP Tanıtım Görseli"
      }
    ],
    locale: "tr_TR",
    type: "website"
  },
  icons: {
    icon: "/favicon.ico"
  },
  themeColor: "#ff7a3d", // Buton rengine uyumlu
  category: "Business",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        {/* GOOGLE FONTS: Poppins */}
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap"
          rel="stylesheet"
        />
        {/* Google Analytics Script */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-C0RKV235C7"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-C0RKV235C7');
          `}
        </Script>
      </Head>
      <body>
        <Navbar />
        {children}
        <ScrollToTopButton />
        <Footer />
      </body>

    </html>
  );
}
