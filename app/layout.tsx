import './globals.css';
import { Metadata } from 'next';
import { Providers } from './providers';

export const metadata: Metadata = {
  title: 'eBazar | Home',
  description: 'A minimal store for your needs'
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html className='dark' lang='en'>
      <body>
        <Providers>{children}</Providers>
        <footer className='h-10 flex items-center place-content-center'>
          <a href='https://storyset.com/shopping'>
            Shopping illustrations by Storyset
          </a>
        </footer>
      </body>
    </html>
  );
}
