/*
 * @Author: Yandel Yan
 * @Date: 2024-07-07 00:56:38
 * @LastEditTime: 2024-09-13 10:14:32
 * @LastEditors: Yandel
 * @Description: 
 * @FilePath: /nextjs-dashboard/app/layout.tsx
 * 知之者不如好之者，好之者不如乐之者
 */
import '@/app/ui/global.css';
import { inter } from '@/app/ui/fonts';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
