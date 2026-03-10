import "./globals.css";
import { Providers } from "@/components/Providers";

export const metadata = {
  title: "ResumeAI - Smart Interview Assistant",
  description: "AI-powered resume analysis and interview preparation",
  icons: {
    icon: "/favicon.ico",
    apple: "/favicon.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
