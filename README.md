# 🚀 Professional Portfolio

![Project Status](https://img.shields.io/badge/Status-Live-success?style=for-the-badge)
![Tech Stack](https://img.shields.io/badge/Next.js-14-black?style=for-the-badge&logo=next.js)
![Tech Stack](https://img.shields.io/badge/TypeScript-Blue?style=for-the-badge&logo=typescript)
![Tech Stack](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css)

> "Bridging the gap between high-level strategy and technical execution."

This is the official portfolio website for a Professional Assistant and Customer Relations Professional. It showcases experience with C-suite executives, Agile coordination, and data-driven operations.

## ⚡ Features

-   **Modern Tech Stack:** Built with Next.js 14 (App Router) and TypeScript for type safety.
-   **Zero-Runtime CSS:** Styled with Tailwind CSS for high performance and a clean, executive aesthetic.
-   **Interactive UI:** Custom "Accordion" style portfolio cards that reveal details on click.
-   **Serverless Contact Form:** Fully functional contact form connected to **Google Sheets** via Google Apps Script (No backend server required).
-   **Responsive:** Fully optimized for Mobile, Tablet, and Desktop.

## 🛠️ Tech Stack

-   **Framework:** [Next.js](https://nextjs.org/)
-   **Styling:** [Tailwind CSS](https://tailwindcss.com/)
-   **Language:** [TypeScript](https://www.typescriptlang.org/)
-   **Form Backend:** [Google Apps Script](https://developers.google.com/apps-script)
-   **Deployment:** [Vercel](https://vercel.com/)

## 🏁 Getting Started

To run this project locally:

1.  **Clone the repository**
    ```bash
    git clone [https://github.com/YOUR_USERNAME/ebenezer-portfolio.git](https://github.com/YOUR_USERNAME/ebenezer-portfolio.git)
    cd ebenezer-portfolio
    ```

2.  **Install Dependencies**
    ```bash
    npm install
    ```

3.  **Run the Development Server**
    ```bash
    npm run dev
    ```

4.  Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 🔌 Configuration

### Contact Form Setup
The contact form does not use a standard API route. It posts data directly to a Google Sheet using a Web App URL.

To update the destination sheet:
1.  Go to `src/app/contact/page.tsx`.
2.  Update the `GOOGLE_SCRIPT_URL` variable with your deployed Google Apps Script URL.

### Images
Images are currently hosted via Cloudinary (or placeholders). To allow new external image sources, update `next.config.ts`:
```typescript
images: {
  remotePatterns: [
    {
      protocol: 'https',
      hostname: 'res.cloudinary.com',
    },
  ],
}
