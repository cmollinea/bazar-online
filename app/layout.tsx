import './globals.css';
import { Metadata } from 'next';
import { Providers } from './providers';
import Cart from './components/Cart';

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
        <footer className='h-20 flex flex-col gap-2 border-t border-slate-200/20 rounded-t-xl items-center place-content-center'>
          <p className='text-sm'>
            Made with 💙 by{' '}
            <a className='underline hover:text-primary-400 cursor-pointer'>
              @procastinatorDev
            </a>
          </p>
          <a
            className='text-xs underline hover:text-primary-400 cursor-pointer'
            href='https://storyset.com/shopping'
          >
            Shopping illustrations by Storyset
          </a>
        </footer>
        <Cart />
      </body>
    </html>
  );
}
