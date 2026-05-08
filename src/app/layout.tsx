import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Lumi — App de servicio de energía",
  description: "Gestiona tu servicio de energía residencial",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
