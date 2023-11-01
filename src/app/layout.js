"use client";
import { AuthProvider } from "@/store/auth-context";
import "./globals.css";
import { Inter } from "next/font/google";
import { ProtectedRoutes } from "@/store/protectedRoutes";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <AuthProvider>
      <ProtectedRoutes>
        <html lang="en">
          <body className={inter.className}>{children}</body>
        </html>
      </ProtectedRoutes>
    </AuthProvider>
  );
}
