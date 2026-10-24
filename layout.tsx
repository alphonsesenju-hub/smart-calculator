import type { Metadata } from 'next';
import './globals.css';
export const metadata: Metadata = { title: 'SmartCalc Australia | Free Money & Business Calculators', description: 'Simple, free Australian GST, mortgage, salary, profit margin and hourly rate calculators. Understand the numbers that matter.', robots: { index: true, follow: true } };
export default function RootLayout({children}:{children:React.ReactNode}) { return <html lang="en-AU"><body>{children}</body></html> }
