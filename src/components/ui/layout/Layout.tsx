'use client'
import Sidebar from "../organisms/sidebar/Sidebar";
interface ILayoutProps {
    children: React.ReactNode;
}

export default function Layout({ children }: ILayoutProps) {
    return (
        <div className="flex h-screen bg-gray-100">
            <Sidebar />
            <main className="flex-1 p-8 overflow-auto">
                {children}
            </main>
        </div>
    )
}