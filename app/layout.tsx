import type { Metadata, Viewport } from "next";
import { Inter, Lexend } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/Sidebar";
import BottomNav from "@/components/BottomNav";
import Header from "@/components/Header";

const fontInter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const fontLexend = Lexend({
  variable: "--font-lexend",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Kinetic Athlete",
  description: "Precision Kineticism in a Workout Tracker",
};

export const viewport: Viewport = {
  themeColor: "#060e20",
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${fontInter.variable} ${fontLexend.variable} h-full antialiased dark`}
      style={{ colorScheme: "dark" }}
    >
      <body className="min-h-full flex flex-col md:flex-row bg-background text-on-surface overflow-x-hidden">
        {/* Desktop Sidebar */}
        <Sidebar />
        
        {/* Main Content Area */}
        <div className="flex-1 flex flex-col w-full max-w-[100vw]">
          {/* Mobile Header */}
          <Header />
          
          <main className="flex-1 p-4 md:p-8 pb-24 md:pb-8 w-full max-w-5xl mx-auto">
            {children}
          </main>
        </div>
        
        {/* Mobile Bottom Nav */}
        <BottomNav />
      </body>
    </html>
  );
}
