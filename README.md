# 🍲 AnyOneCuisine – Ethiopian Online Food Ordering App

<p align="center">
  <img src="https://raw.githubusercontent.com/your-username/your-repo/main/assets/banner.png" alt="AnyOneCuisine Banner" width="100%" />
</p>

[![Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-black?style=flat-square&logo=vercel)](https://anyone-cusine-boso.vercel.app/)
[![React](https://img.shields.io/badge/Frontend-React-blue?style=flat-square&logo=react)](https://react.dev/)
[![Supabase](https://img.shields.io/badge/Backend-Supabase-3ecf8e?style=flat-square&logo=supabase)](https://supabase.com/)
[![TailwindCSS](https://img.shields.io/badge/Styling-TailwindCSS-38bdf8?style=flat-square&logo=tailwind-css)](https://tailwindcss.com/)
[![Postgres](https://img.shields.io/badge/Database-PostgreSQL-336791?style=flat-square&logo=postgresql)](https://www.postgresql.org/)

---

## 🚀 Live Demo

👉 [Visit the Live Site](https://anyone-cusine-boso.vercel.app/)

---

## ✨ Features

- 🌍 Fully responsive UI with **Tailwind CSS**
- 🔑 Authentication & Authorization using **Supabase**
- ⚡ Real-time PostgreSQL database integration
- 🛒 Add to Cart with **quantity, subtotal, delivery fee, and tax calculation**
- 🔔 Toast notifications for actions and feedback
- 🗺️ Clean routing with **React Router**
- 🎨 Simple and elegant UX design
- 🔐 Protected routes for authenticated users
- 📁 Modular file and folder structure for scalability

---

## 🛠️ Tech Stack

| Frontend      | Backend                  | Deployment |
| ------------- | ------------------------ | ---------- |
| React + Vite  | Supabase (Auth & DB)     | Vercel     |
| Tailwind CSS  | PostgreSQL               |            |
| Redux Toolkit | Row Level Security (RLS) |            |

---

## 📂 Project Structure
anyonecuisine/
│── src/
│ ├── components/ # Reusable UI components
│ ├── pages/ # Page-level components (Home, Cart, Login, etc.)
│ ├── context/ # Global state management
│ ├── services/ # API calls (Supabase, cart logic, etc.)
│ ├── hooks/ # Custom React hooks
│ ├── assets/ # Images, icons, logos
│ └── App.jsx
│
│── public/ # Static files
│── package.json
│── tailwind.config.js
│── README.md


---

## 🚀 Getting Started

### 1️⃣ Clone the repo
```bash
git clone https://github.com/PixelNoah-ui/anyonecuisine.git
cd anyonecuisine

2️⃣ Install dependencies
npm install

3️⃣ Configure environment variables

Create a .env file in the root:
VITE_SUPABASE_URL=your-supabase-url
VITE_SUPABASE_ANON_KEY=your-supabase-anon-key

4️⃣ Run the app locally
npm run dev


