import { Inter } from 'next/font/google';
import Navbar from '@/components/mui/Navbar';
import './globals.css';
import { AuthProvider } from '@/context/auth';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'TodoTrek',
  description: 'for managing your tasks and todos',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthProvider>
          <Navbar />
          {children}
        </AuthProvider>
      </body>
    </html>
  );
}
