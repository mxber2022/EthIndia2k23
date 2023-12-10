import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Nav from './components/Nav';
import { Web3Modal } from "../context/Web3Modal";
import { WakuNode } from "../context/WakuNode";
import WakuNodeProvider from '@/context/WakuNodeProvider';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'PeerPowerDao',
  description: 'ETH India',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    
    // <WakuNode>
    <WakuNodeProvider>
      <Web3Modal>
        <html lang="en" >
          <body className={inter.className}>
            <Nav />
            {children}
          </body>
        </html>
      </Web3Modal>
    </WakuNodeProvider>
    // </WakuNode>
    
  )
}

