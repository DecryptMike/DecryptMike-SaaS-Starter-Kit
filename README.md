![Next.js](https://img.shields.io/badge/Next.js-15-blue?logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?logo=typescript)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3.3-06B6D4?logo=tailwindcss)
![Prisma](https://img.shields.io/badge/Prisma-ORM-2D3748?logo=prisma)
![Stripe](https://img.shields.io/badge/Stripe-Billing-blueviolet?logo=stripe)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-Supabase-4169E1?logo=postgresql)
![Auth](https://img.shields.io/badge/Auth-NextAuth%20JWT-yellowgreen?logo=auth0)
![Cyberpunk](https://img.shields.io/badge/UI-Cyberpunk%20Dashboard-green)
![Deployed](https://img.shields.io/badge/Hosted%20on-Vercel-black?logo=vercel)


<p align="center">
  <img src="DecryptMikeLogo.png" alt="DecryptMike Logo" style="max-width: 100%; height: auto;"/>
</p>

<h2 align="center">
   🧠 DecryptMike SaaS Starter Kit
</h2>

<h5 align="center">A production-ready SaaS Starter Kit with authentication, RBAC, Stripe billing, PostgreSQL, and a fully custom cyberpunk dashboard UI.
</h5>

---

## 📸 Screenshots and GIF previews 

### 🔐 Sign In Page

<p align="center">
  <img src="DecryptMike Sign In Page.png" width="100%" alt="Sign In Page">
</p>

### ✅ Dashboard (GIF Scroll Preview)

<p align="center">
  <img src="DecryptMike Saas Pro.gif" width="100%" alt="Log Analyzer in Action">
</p>

### 🔒 Unauthorized Page

<p align="center">
  <img src="DecryptMike Unauthorized Page.png" width="100%" alt="Unauthorized Page">
</p>

### 📉 Stripe Success / Cancel Pages
![Success Page](path/to/success.png)  
![Cancelled Page](path/to/cancelled.png)

---

## 📦 Features

- 🔒 **NextAuth.js Authentication** (GitHub OAuth)
- 📜 **RBAC** – Role-Based Access Control
- 💳 **Stripe Billing** – Checkout + Customer Portal
- 🧬 **PostgreSQL + Prisma ORM**
- 🌐 **Vercel Ready** – One-click deploy
- 💡 **Cyberpunk UI** with Matrix-style rain background
- 📊 **Interactive Dashboard** (Total Revenue, Sales, User Growth, Activity)

---

## 🛠️ Tech Stack

- **Framework:** Next.js 15 App Router (TypeScript)
- **Styling:** Tailwind CSS, custom UI
- **Auth:** NextAuth.js (JWT Strategy)
- **DB:** Supabase PostgreSQL + Prisma ORM
- **Payments:** Stripe Checkout & Portal
- **Deployment:** Vercel

---

## 🧰 Project Structure

```
src/
├── app/
│   ├── dashboard/               # Dashboard page + subpages
│   ├── signin/page.tsx         # Sign In Page
│   ├── unauthorized/page.tsx   # Access Denied Page
│   ├── api/
│   │   ├── auth/[...nextauth]/route.ts  # Auth Route
│   │   └── stripe/checkout/    # Stripe API Routes
├── components/ui/              # Custom UI components
├── lib/                        # Helpers (Prisma, Auth, etc)
├── styles/                     # Global styles
public/
│   └── decryptmike-logo.png    # Brand Logo
```

---

## 📄 Environment Variables

Required in `.env.local`:
```env
GITHUB_ID=your_github_oauth_id
GITHUB_SECRET=your_github_oauth_secret
NEXTAUTH_SECRET=your_nextauth_secret
NEXTAUTH_URL=https://your-vercel-domain.vercel.app
NEXT_PUBLIC_APP_URL=https://your-vercel-domain.vercel.app
STRIPE_SECRET_KEY=your_stripe_secret
STRIPE_PUBLIC_KEY=your_stripe_public
STRIPE_WEBHOOK_SECRET=your_stripe_webhook_secret
DATABASE_URL=your_postgres_database_url
```

---

## 🔄 Setup Instructions

```bash
git clone https://github.com/DecryptMike/DecryptMike-SaaS-Starter-Kit.git
cd DecryptMike-SaaS-Starter-Kit
npm install
npx prisma generate
npx prisma db push
npm run dev
```

---

## 📸 Screenshots Reference

All screenshots + GIFs can be found inside your `public/` folder or attached assets:

- `/public/signin.png`
- `/public/dashboard-scroll.gif`
- `/public/unauthorized.png`
- `/public/success.png`
- `/public/cancelled.png`

---

## 🧪 Getting Started Locally

First, clone the project and install dependencies:

```bash
git clone https://github.com/DecryptMike/DecryptMike-SaaS-Starter-Kit.git
cd DecryptMike-SaaS-Starter-Kit
npm install
```

Run your database migrations and generate the Prisma client:

```bash
npx prisma generate
npx prisma db push
```

Then start the dev server:

```bash
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) to view the app. Sign-in requires GitHub OAuth to be configured in `.env.local`.

> _Pro Tip:_ The landing page redirects to `/signin`, and only authenticated users can view `/dashboard`.

---

## 📌 Status

✅ Final build tested locally and pushed to GitHub and Vercel  
❌ Currently debugging GitHub OAuth callback 404  
🎯 Feature complete + ready for deployment

---

## 🎯 Why I Built It

This project was built to showcase real-world skills in full-stack development with a cybersecurity-focused SaaS kit. It’s designed for hiring managers, portfolio reviewers, and recruiters looking to assess:
* Proficiency with authentication, RBAC, and secure data storage 
* Experience integrating Stripe billing into a Next.js application 
* Design and layout customization with Tailwind CSS 
* Deployment and CI/CD using Vercel

---

## ⚠️ Legal Disclaimer

This tool is intended for **educational and authorized personal use only**.  

---

## 💻 Built by [@DecryptMike](https://github.com/DecryptMike)

---

<p align="center">
  <img src="https://img.shields.io/badge/Built%20For-Web%20Development-blue?style=for-the-badge&logo=next.js"/>
  <img src="https://img.shields.io/badge/Made%20By-DecryptMike-limegreen?style=for-the-badge&logo=github"/>
  <img src="https://img.shields.io/badge/Inspired%20By-Cybersecurity-darkgreen?style=for-the-badge&logo=matrix"/>
</p>
