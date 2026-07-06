import { Figtree } from "next/font/google";
import type { Metadata } from "next";
import "./globals.css";
import WhatsAppButton from "@/components/WhatsAppButton";

const figtree = Figtree({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-figtree",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Nomado Travel — Discover Kashmir Beyond the Postcards",
  description: "Nomado curates immersive journeys that reveal the many layers of Kashmir—its people, traditions, landscapes, and stories.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${figtree.variable} font-sans`}>
        {children}
        <WhatsAppButton />
      </body>
    </html>
  );
}
