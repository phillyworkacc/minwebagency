import "@/styles/globals.css";
import "@/styles/landing.css";
import type { Metadata } from "next";
import { InterFont } from "./fonts";
import { Toaster } from "sonner";

export const metadata: Metadata = {
  title: "Minweb",
  description: "Website Management For Any Business",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script defer data-web-identifier="ayom" data-party="visora" data-website-id="863bcdbb-725c-4f4a-89ec-d109e8516d8c" src="https://visora.vercel.app/cdn/track.js"></script>
      </head>
      <body className={InterFont.className}>
        <Toaster richColors position="top-center" />
        {children}
      </body>
    </html>
  );
}
