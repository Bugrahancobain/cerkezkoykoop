
# ÇerkezköyKoop - Official Website

This project is a professional and informative web platform developed for the **Çerkezköy Motor Freight Transport Cooperative**.  
It provides a clean experience for both end users (visitors/customers) and admins through a Firebase-powered management system.

---

## 🚀 Project Overview

- Corporate pages: Homepage, About Us, Blog, Services, Contact
- Firebase-based content management (Admin Panel)
- User authentication: Login, Register, Password Reset
- Admin views for managing blog and services
- Fully responsive layout (mobile/tablet/desktop)
- Contact form with EmailJS
- Clean styling with CSS Modules

---

## 🧱 Technologies Used

| Layer | Technology |
|-------|------------|
| Framework | **Next.js 15** (App Router) |
| Frontend | **React 19**, CSS Modules |
| Backend | **Firebase** (Auth + Admin SDK) |
| Email | EmailJS (form handling) |
| UI | React Icons, SwiperJS |
| Image Handling | Static images in `/public/` |
| Deployment | Vercel (recommended) |

---

## 🗂️ Project Structure

```
📁 app/
├── aboutUs/page.js            → About page
├── admin/blog/page.js         → Admin blog view
├── admin/services/page.js     → Admin services view
├── contact/page.js            → Contact form with EmailJS
├── forgot-password/page.js    → Password reset
├── login/page.js              → Login page
├── ourServices/[id]/page.js   → Service detail page
├── ourServices/page.js        → Service list
├── register/page.js           → Registration
├── blog/page.js               → Blog list
├── blog/[id]/page.js          → Blog detail page
├── page.js                    → Homepage
```

---

## 🔥 Firebase Configuration

### Services Used

- **Firebase Authentication**: Login / Register / Password Reset
- **Firebase Admin SDK**: Admin-side logic (see `firebase-admin.js`)
- (No Realtime DB or Firestore used based on current structure)

### Environment Setup

Create a `.env.local` file and add the following:

```env
NEXT_PUBLIC_FIREBASE_API_KEY=...
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=...
NEXT_PUBLIC_FIREBASE_PROJECT_ID=...
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=...
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=...
NEXT_PUBLIC_FIREBASE_APP_ID=...

FIREBASE_SERVICE_ACCOUNT_KEY={"type":"service_account", ...}
```

---

## 🧠 Page Descriptions

### 🌍 Homepage `/`
- Hero slider and under-slider components
- Sections: About, Services, Contact
- Assets from `/public/slider*.jpeg`

### 📄 About `/aboutUs`
- Static page using `homeAboutUs.js`

### 💼 Services `/ourServices`
- Grid-based list with detailed views per `[id]`

### 📰 Blog `/blog`
- Blog articles pulled dynamically
- `/blog/[id]` → Blog content page

### 📨 Contact `/contact`
- Email form using EmailJS
- Audio asset used: `homeContact.wav`

### 🔐 Auth Pages
- `/login` → Admin login
- `/register` → New admin registration
- `/forgot-password` → Reset password via email

### 🛠️ Admin Panel
- `/admin/blog` → Blog viewer
- `/admin/services` → Manage service details
- Sidebar: `AdminSidebar.js`
- Auth protected by `withAuth.js`

---

## ⚙️ Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/Bugrahancobain/cerkezkoykoop.git
cd cerkezkoykoop
```

### 2. Install Dependencies

```bash
npm install
# or
yarn install
```

### 3. Configure Environment

Create a `.env.local` file and enter Firebase credentials (see example above).

### 4. Start Development Server

```bash
npm run dev
```

Visit: [http://localhost:3000](http://localhost:3000)

---

## 🧩 Packages Used

- `firebase` – Firebase SDK for client
- `firebase-admin` – Server-side Firebase management
- `@emailjs/browser` – Sending emails via frontend
- `swiper` – Interactive slider
- `react-icons` – Icon set

---

## 🖼️ Sample Screenshots

```markdown
📸 Homepage
![Homepage](public/slider1.jpeg)

📸 Admin Panel
![Admin](public/comictBanner.jpg)
```

---

## 📅 Roadmap

- [ ] Integrate Firestore for dynamic content
- [ ] Enable content creation from admin panel
- [ ] Add internationalization (`next-intl`)
- [ ] Role-based routing (admin/user separation)

---

## 👤 Developer

**Buğrahan Çoban**  
Frontend Developer  
GitHub: [Bugrahancobain](https://github.com/Bugrahancobain)

---

## 📄 License

MIT License © 2025 – Buğrahan Çoban & ÇerkezköyKoop
