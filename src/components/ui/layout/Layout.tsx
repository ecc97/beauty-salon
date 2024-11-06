'use client'
import Sidebar from "../organisms/sidebar/Sidebar";
import Header from "../organisms/header/Header";
interface ILayoutProps {
    children: React.ReactNode;
}

export default function Layout({ children }: ILayoutProps) {
    return (
        <div className="flex h-screen bg-gray-100">
            <Header />
            <main className="flex-1 p-8 overflow-auto">
                {children}
            </main>
        </div>
    )
}