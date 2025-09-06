'use client';

import { Inter } from 'next/font/google';
import { ToastContainer } from 'react-toastify';

import AntdRegistry from './AntdRegistry';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={inter.className}>
        <AntdRegistry>{children}</AntdRegistry>
        <ToastContainer />
      </body>
    </html>
  );
}
