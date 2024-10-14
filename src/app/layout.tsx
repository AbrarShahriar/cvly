import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import { GoogleAnalytics } from "@next/third-parties/google";
import NextTopLoader from "nextjs-toploader";

const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "CVly - Create Your CV",
  description: "Create your CV for free!!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={montserrat.className}>
      <body className={`antialiased`}>
        <NextTopLoader showSpinner={false} />
        {children}
      </body>
      <GoogleAnalytics gaId={process.env.ANALYTICS_MEASUREMENT_ID as string} />
    </html>
  );
}
