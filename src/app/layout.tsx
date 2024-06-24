import './globals.css';
import { TopBar } from '@/components/TopBar';
import ProductSection from '@/components/ProductSection';
import { Footer } from '@/components/Footer';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <TopBar />
        <ProductSection
          title="T-shirts collections"
          description=" Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque
            praesentium cumque iure dicta incidunt est ipsam, officia dolor
            fugit natus?"
        />

        <Footer />
      </body>
    </html>
  );
}
