import type { Metadata } from "next";
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
    <html lang="en">
      <body className={`antialiased ${inter.className}`}>
        {children}
      </body>
    </html>
  );
}
