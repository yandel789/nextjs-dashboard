/*
 * @Author: Yandel Yan
 * @Date: 2024-09-13 15:46:10
 * @LastEditTime: 2024-09-13 15:46:15
 * @LastEditors: Yandel
 * @Description: 
 * @FilePath: /nextjs-dashboard/app/dashboard/layout.tsx
 * 知之者不如好之者，好之者不如乐之者
 */
import SideNav from '@/app/ui/dashboard/sidenav';
 
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
      <div className="w-full flex-none md:w-64">
        <SideNav />
      </div>
      <div className="flex-grow p-6 md:overflow-y-auto md:p-12">{children}</div>
    </div>
  );
}