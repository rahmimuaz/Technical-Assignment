import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "LoanTracker AI | Application",
  description: "A modern React application for managing borrower pipelines and loan processing workflows",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-background text-foreground antialiased">
        {children}
      </body>
    </html>
  );
}
