import type { Metadata, Viewport } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope-var",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export const metadata: Metadata = {
  title: "Nithinnaresh — Product Designer",
  description:
    "Product Designer specializing in enterprise SaaS, workflow systems, and scalable digital products—transforming operational complexity into intuitive experiences through structure and systems thinking.",
};

import { ModalProvider } from "@/context/ModalContext";
import ResumeModal from "@/components/ResumeModal";
import ContactModal from "@/components/ContactModal";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={manrope.variable}>
      <body>
        <ModalProvider>
          {children}
          <ResumeModal />
          <ContactModal />
        </ModalProvider>
      </body>
    </html>
  );
}
