import type { Metadata } from "next";
import {
  Inter,
  JetBrains_Mono,
  Fraunces,
  Source_Sans_3,
  DM_Sans,
  Fira_Code,
  Space_Grotesk,
  Space_Mono,
} from "next/font/google";
import { ThemeProvider } from "@/providers/ThemeProvider";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
});
const fraunces = Fraunces({ subsets: ["latin"], variable: "--font-fraunces" });
const sourceSans = Source_Sans_3({
  subsets: ["latin"],
  variable: "--font-source-sans",
});
const dmSans = DM_Sans({ subsets: ["latin"], variable: "--font-dm-sans" });
const firaCode = Fira_Code({
  subsets: ["latin"],
  variable: "--font-fira-code",
});
const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
});
const spaceMono = Space_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-space-mono",
});

export const metadata: Metadata = {
  title: "Ethereum SF",
  description:
    "San Francisco's decentralized Ethereum community calendar and hub",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${inter.variable} ${jetbrainsMono.variable} ${fraunces.variable} ${sourceSans.variable} ${dmSans.variable} ${firaCode.variable} ${spaceGrotesk.variable} ${spaceMono.variable}`}
    >
      <body className="min-h-screen flex flex-col">
        <ThemeProvider>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
