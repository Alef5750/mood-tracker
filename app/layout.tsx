import type { Metadata } from "next";
import { Fugaz_One, Open_Sans } from "next/font/google";
import "./globals.css";
import { Suspense } from "react";

const open_sans = Open_Sans({ subsets: ["latin"] });
const fugaz = Fugaz_One({ subsets: ["latin"], weight: ["400"] });

export const metadata: Metadata = {
  title: "Moodle",
  description: "Track your mood every day of the year",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const header = (
    <header className="p-4 sm:p-8 flex items-center justify-between gap-4">
      <h1 className={`textGradient ${fugaz.className}`}>Moodle</h1>
      <div className="flex items-center justify-between">
        PLACEHOLDER CTA || STATS
      </div>
    </header>
  );
  const footer = (
    <footer className="p-4 sm:p-8 grid place-items-center">
      <p className={`text-indigo-500 ${fugaz.className}`}>Created with 💛</p>
    </footer>
  );

  return (
    <html lang="en">
      <body
        className={`w-full max-w-[1000px] mx-auto text-sm sm:text-base min-h-screen flex flex-col antialiased text-slate-800 ${open_sans.className}`}
      >
        <Suspense fallback={<div>Loading...</div>}>
          {header}
          {children}
          {footer}
        </Suspense>
      </body>
    </html>
  );
}
