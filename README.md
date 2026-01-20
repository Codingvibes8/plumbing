# Plumbing Pros Website

A modern, professional plumbing services website built with **Next.js 15**, **Tailwind CSS**, and **Shadcn UI**. This project features a complete online booking system, customer chatbot, and a secure admin dashboard.

## 🚀 Features

### Public Facing

- **Professional Design**: Animated hero section, responsive layout, and dark-themed footer.
- **Online Booking**: Users can schedule appointments via a multi-step form validated with Zod.
- **Real-time Availability**: (Simulated) date and time slot selection.
- **Customer Chatbot**: A floating chat widget with auto-reply capabilities to engage visitors.
- **Service Pages**: Detailed pages for various plumbing services.

### Admin Dashboard (`/admin`)

- **Secure Login**: Protected admin area (default: `admin`/`admin123`).
- **Dashboard Overview**: View key metrics (Total Bookings, Pending Requests).
- **Booking Management**: View detailed lists of all customer bookings.
- **Data Persistence**: Bookings are saved to a local JSON file (`data/bookings.json`).

### Backend & Integrations

- **Email Notifications**: Integrated with **Resend** to send booking confirmations.
- **Server Actions**: Secure form submissions and data handling.
- **Local Database**: Lightweight JSON storage for easy setup without external DB dependencies.

## 🛠️ Tech Stack

- **Framework**: [Next.js 15](https://nextjs.org/) (App Router)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Components**: [Shadcn UI](https://ui.shadcn.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Forms**: React Hook Form + Zod
- **Email**: [Resend](https://resend.com/)

## 🏁 Getting Started

### 1. Clone & Install

```bash
git clone <repository-url>
cd plumbing-2
pnpm install
```

### 2. Configure Environment

Create a `.env.local` file in the root directory:

```env
# Admin Credentials
ADMIN_USERNAME=admin
ADMIN_PASSWORD=admin123

# Email Service (Get API Key from Resend.com)
RESEND_API_KEY=re_123456789
```

### 3. Run Development Server

```bash
pnpm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## 📂 Project Structure

- `/app`: App Router pages and layouts.
  - `/admin`: Admin dashboard and login routes.
  - `/book-online`: Public booking page.
  - `/actions`: Server actions for auth and booking logic.
- `/components`: Reusable UI components (buttons, cards, forms).
- `/lib`: Utilities and helpers (local DB logic).
- `/data`: Stores the local `bookings.json` database.

## 🔐 Admin Access

To access the dashboard:

1. Navigate to `/admin/login`
2. Enter the credentials configured in your `.env` file.
