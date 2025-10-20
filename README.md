# XCombinator Website

[![Next.js](https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)

A modern, responsive website for XCombinator, a leading startup accelerator and venture capital firm that funds innovative startups across the globe. This platform serves as the digital front for XCombinator's online presence, built with Next.js, TypeScript, and Tailwind CSS to deliver a performant, accessible, and engaging user experience.

## 🚀 Features

- ⚡ Blazing fast performance with Next.js
- 🎨 Beautiful UI powered by Tailwind CSS
- 📱 Fully responsive design
- 🛠 Type-safe development with TypeScript
- 🔄 Server-side rendering for better SEO
- 🎯 Modern UI components with Lucide React icons

## 🛠 Tech Stack

- **Framework:** [Next.js](https://nextjs.org/) 15.5.4
- **Language:** [TypeScript](https://www.typescriptlang.org/) 5.x
- **Styling:** [Tailwind CSS](https://tailwindcss.com/) 3.4.18
- **Icons:** [Lucide React](https://lucide.dev/)
- **Linting:** ESLint
- **Package Manager:** npm

## 🚀 Getting Started

### Prerequisites

- Node.js 18.0.0 or later
- npm 9.0.0 or later

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/xcombinator-website.git
   cd xcombinator-website
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

3. Start the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## 🏗 Project Structure

```
xcombinator-website/
├── app/                    # App Router directory
│   └── page.tsx            # Home page component
├── components/             # Reusable components
│   ├── Footer.tsx          # Footer component
│   └── Navbar.tsx          # Navigation bar component
├── public/                 # Static files
│   ├── avator_img.png      # Avatar image
│   ├── file.svg            # SVG assets
│   └── ...
├── styles/                 # Global styles
├── .eslintrc.json          # ESLint configuration
├── next.config.js          # Next.js configuration
├── package.json            # Dependencies and scripts
└── tailwind.config.js      # Tailwind CSS configuration
```

## 📦 Available Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build the application for production
- `npm start` - Start the production server
- `npm run lint` - Run ESLint

## 🎨 Styling

This project uses [Tailwind CSS](https://tailwindcss.com/) for styling. The configuration can be found in `tailwind.config.js`.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Lucide Icons](https://lucide.dev/)

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

---

<p align="center">
  Made with ❤️ by XCombinator Team
</p>
