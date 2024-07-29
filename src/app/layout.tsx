import "./globals.css";
import { TopBar } from "@/components/TopBar";
import { Footer } from "@/components/Footer";
import MarkPopup from "@/components/MarkPopup";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <TopBar itemCount={0} />
        <main> {children}</main>
        <MarkPopup />
        <Footer />
      </body>
    </html>
  );
}
