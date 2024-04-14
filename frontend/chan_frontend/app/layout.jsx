import { Inter } from 'next/font/google'
import './globals.css'
import { APP_NAME, APP_DESCRIPTION } from '@/utils/consts';
import ClientLayout from './Web3Provider';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: APP_NAME,
  description: APP_DESCRIPTION
}

export default function RootLayout({ children }) {
  return (
    <html data-theme="theme" lang="en">
      <body className={inter.className}>
        <ClientLayout>
          {children}  
        </ClientLayout>
      </body>
    </html>
  )
}
