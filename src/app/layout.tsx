import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "./_components/header";
import { Footer } from "./_components/footer";
import { SmoothScrollProvider } from "./_components/providers/smooth-scroll-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Linear Landing Page",
  description: "Linear landing page",
  openGraph: {
    images: ["/images/open-graph.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <SmoothScrollProvider>
          <div>
            <Header />
            <main className="bg-page-gradient pt-navigation-height">
              {children}
            </main>
            <Footer />
          </div>
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
