import type { Metadata } from "next";
import { Poppins, Inter, Cairo } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { AppProvider } from "./contexts/AppContext";
import { themeScript } from "./scripts/theme-script";

const poppins = Poppins({
  variable: "--font-heading-en",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-body-en",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

const cairo = Cairo({
  variable: "--font-arabic",
  subsets: ["arabic", "latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Sprint Marketing & Software Solutions",
  description: "Professional marketing and software solutions company delivering innovative digital solutions for your business growth.",
  keywords: ["marketing", "software solutions", "digital marketing", "web development", "business growth"],
  authors: [{ name: "Sprint Marketing & Software Solutions" }],
  icons: {
    icon: "/logo.png",
    shortcut: "/logo.png",
    apple: "/logo.png",
  },
  openGraph: {
    title: "Sprint Marketing & Software Solutions",
    description: "Professional marketing and software solutions company delivering innovative digital solutions for your business growth.",
    type: "website",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "Sprint Marketing & Software Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sprint Marketing & Software Solutions",
    description: "Professional marketing and software solutions company delivering innovative digital solutions for your business growth.",
    images: ["/logo.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl" suppressHydrationWarning>
      <body
        className={`${poppins.variable} ${inter.variable} ${cairo.variable} antialiased`}
        style={{ backgroundColor: 'var(--bg-primary)', color: 'var(--text-primary)' }}
      >
        <Script
          id="theme-script"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{ __html: themeScript }}
        />
        <AppProvider>
          {children}
        </AppProvider>
      </body>
    </html>
  );
}
