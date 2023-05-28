import './globals.css';
import {Poppins} from 'next/font/google';

const poppins = Poppins({weight: '400', subsets: ['latin']});

export const metadata = {
  title: 'Todo App | Next13',
  description: 'Created by Piyush',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en">
      <body className={`${poppins.className} container mx-auto bg-slate-700 text-white`}>
        {children}
      </body>
    </html>
  );
}
