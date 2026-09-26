import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Porate chai",
  description: "A edtech multi tenant saas. connecting the best teahers with students from anywhere",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className="h-full antialiased"
      data-scroll-behavior="smooth"
    >

      <body className="min-h-full flex flex-col">{children}</body>

    </html>
  );
}
