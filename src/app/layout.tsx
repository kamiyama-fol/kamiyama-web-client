import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "./providers";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FadeInSection from "@/components/FadeInSection";


export const metadata: Metadata = {
  title: "Kamiyama Official Website",
  description: "Kamiyama Official Website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" suppressHydrationWarning>
      <body className="bg-white dark:bg-gray-900 dark:text-white">
        <div className="max-w-[980px] justify-between border-b border-solid border-[#333] mx-auto  px-4 min-h-screen bg-white text-black dark:bg-gray-900 dark:text-white">
          <Providers>
            <Header />
            <FadeInSection className="py-0 px-0 my-8">
            {children}
            </FadeInSection>
            <Footer />
          </Providers>
        </div>
      </body>
    </html>
  );
}
