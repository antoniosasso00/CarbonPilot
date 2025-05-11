import type { Metadata } from "next";
import { Toaster } from "sonner";
import "./globals.css";

export const metadata: Metadata = {
  title: "CarbonPilot",
  description: "Gestione nesting, autoclavi e pianificazione",
};

// ✅ Eliminato font Inter Google → compatibile offline/Docker
const inter = { className: "font-sans" };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="it">
      <body className={`antialiased ${inter.className}`}>
        {children}
        <Toaster richColors position="top-right" />
      </body>
    </html>
  );
}
