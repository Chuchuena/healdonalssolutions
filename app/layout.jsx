import localFont from "next/font/local";
import "./globals.css";
import { Toaster } from "sonner";
import { cn } from "@/lib/utils";
import { Header } from "@/components/ui/header";
import { Footer } from "@/components/ui/footer";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Healthdonals",
  description: "Start eating healthy Burger",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-full">
      <body
        className={cn(
          "antialiased",
          geistMono.variable,
          geistSans.variable,
          "h-full"
        )}
      >
        <Toaster />
        <div className="min-h-full flex flex-col border-x max-w-md m-auto">
          <Header />
          <main className="flex-1 px-4 py-2">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
