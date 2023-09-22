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
          <a href='https://www.freepik.com/free-vector/online-shopping-concept-landing-page_5358350.htm#query=online%20shopping&position=1&from_view=keyword&track=ais'>
            Image by pikisuperstar
          </a>{' '}
          on Freepik
        </footer>
      </body>
    </html>
  );
}
