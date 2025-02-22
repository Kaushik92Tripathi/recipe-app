// app/layout.js
import { Geist } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

const geist = Geist({
  subsets: ["latin"],
});

export const metadata = {
  title: "Foodie's Paradise - Your Culinary Journey",
  description: "Discover delicious recipes and cooking tips at Foodie's Paradise",
  keywords: "recipes, cooking, food, culinary",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geist.className} antialiased`}>
        <div className="min-h-screen flex flex-col bg-gradient-to-br from-orange-50 to-orange-100">
          <Header />
          <main className="flex-grow container mx-auto px-4 py-8">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}