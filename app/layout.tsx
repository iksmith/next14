import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ANiM8",
  description: "A simple way to share reviews of your favorite games and anime",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {/* Global HTML  */}
        <main>

          <nav>
            <div className="logo">
              <a href="/">ANiM8</a>
            </div>
            <div className="links">
              <a href="/">Home</a>
              <a href="">Reviews</a>
            </div>
          </nav>

          {children}
        </main>
      </body>
    </html>
  );
}
