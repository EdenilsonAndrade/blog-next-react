import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'The blog - Este é um blog com Next.js',
  description: 'Blog feito com Next.js, TypeScript e Tailwind CSS',
};

type RootLayoutProps = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: Readonly<RootLayoutProps>) {
  return (
    <html lang='pt-BR'>
      <body>{children}</body>
    </html>
  );
}
