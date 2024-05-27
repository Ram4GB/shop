import { Toaster } from '@/components/ui/sonner';
import { recursive } from '@/configs/fonts';
import AppProvider from '@/provider/AppProvider';
import type { Metadata } from 'next';
import { handleGetCart } from './(cwa)/actions';
import './globals.css';

export const metadata: Metadata = {
  title: 'Coffee Shop',
  description: `Discover Coffee Shop, HCM's cozy coffee shop offering freshly roasted coffee, artisanal drinks, and delicious pastries. Perfect for relaxing, working, or catching up with friends.`,
  openGraph: {
    images: ['/logo.png'],
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const cart = await handleGetCart();

  return (
    <html lang="en">
      <body className={recursive.className}>
        <AppProvider initialCart={cart}>{children}</AppProvider>
      </body>
      <Toaster
        position="top-center"
        richColors
        duration={2000}
        style={{ ...recursive.style }}
        toastOptions={{ style: {} }}
      />
    </html>
  );
}
