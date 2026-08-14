import type { Metadata } from 'next';
import './globals.css';
import { LiveBackground } from '../components/LiveBackground';

export const metadata: Metadata = {
  title: 'Claude Plan Provisioning — Anthropic Internal',
  description: 'Enterprise admin console for managing Claude plan grants across the organization.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('iam-theme');if(t){document.documentElement.dataset.theme=t}var p=localStorage.getItem('iam-bg-preset');if(p){document.documentElement.dataset.bgPreset=p}var m=localStorage.getItem('iam-bg-motion');if(m){document.documentElement.dataset.bgMotion=m}}catch(e){}})()`,
          }}
        />
        <link
          rel="preconnect"
          href="https://fonts.googleapis.com"
        />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body suppressHydrationWarning>
        <LiveBackground />
        {children}
      </body>
    </html>
  );
}
