import './globals.css';
import Script from 'next/script';

export const metadata = {
  title: 'Nux Express',
  description: 'Track your parcel in seven languages with Nux Express.',
  openGraph: { title: 'Nux Express - Track your shipment', description: 'Enter your tracking number to see where your parcel is. Available in 7 languages.', type: 'website' },
  icons: { icon: '/favicon.svg' },
};
export const viewport = { width: 'device-width', initialScale: 1, viewportFit: 'cover', themeColor: '#0b1f4d' };

export default function RootLayout({ children }) {
  return (
    <html lang="en" dir="ltr" suppressHydrationWarning>
      <head>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;600;800&family=Sora:wght@600;800&family=Noto+Color+Emoji&family=Noto+Sans+Arabic:wght@400;600;800&family=Noto+Sans+SC:wght@400;600;800&display=swap" />
      </head>
      <body>
        <a className="skip" href="#app">Skip to content</a>
        <div id="sp" suppressHydrationWarning />
        <noscript><p style={{ padding: 24, fontFamily: 'sans-serif' }}>Please enable JavaScript to track your shipment.</p></noscript>
        {children}
        <Script src="/app.js" strategy="afterInteractive" />
        <Script src="https://cdnjs.cloudflare.com/ajax/libs/html2canvas/1.4.1/html2canvas.min.js" strategy="lazyOnload" />
        <Script src="https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js" strategy="lazyOnload" />
      </body>
    </html>
  );
}
