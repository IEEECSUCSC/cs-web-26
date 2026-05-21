import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "IEEE Computer Society — UCSC Student Branch Chapter",
  description:
    "Empowering the next generation of computing professionals at the University of Colombo School of Computing. We build. We innovate. We lead.",
  keywords: [
    "IEEE",
    "Computer Society",
    "UCSC",
    "Sri Lanka",
    "student chapter",
    "computing",
    "technology",
  ],
  openGraph: {
    title: "IEEE CS UCSC — Student Branch Chapter",
    description:
      "The official IEEE Computer Society Student Branch Chapter at the University of Colombo School of Computing.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      <body className="min-h-full antialiased">{children}</body>
    </html>
  );
}
