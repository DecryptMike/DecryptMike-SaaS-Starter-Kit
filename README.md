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
![Sign In Page](path/to/signin.png)

### ✅ Dashboard (GIF Scroll Preview)
![Dashboard GIF](path/to/dashboard-scroll.gif)

### 🔒 Unauthorized Page
![Unauthorized](path/to/unauthorized.png)

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

- `/public/decryptmike-logo.png`
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

## ⚠️ Legal Disclaimer

This tool is intended for **educational and authorized personal use only**.  
Do not use it to store sensitive or production passwords without enhancements.

---

## 💻 Built by [@DecryptMike](https://github.com/DecryptMike)

---
