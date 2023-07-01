import { Inter } from 'next/font/google';

import ToasterContext from './context/ToasterContext';

import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Messenger Clone',
  description: 'Messenger Clone: description',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <ToasterContext />
        {children}
      </body>
    </html>
  );
}
