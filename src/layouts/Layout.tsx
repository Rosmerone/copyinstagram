import { Sidebar } from '../components/Sidebar';
import { BottomNav } from '../components/BottomNav';

interface LayoutProps {
    children: React.ReactNode;
    currentView: string;
    onNavigate: (view: string) => void;
}

export const Layout = ({ children, currentView, onNavigate }: LayoutProps) => {
    return (
        <div className="min-h-screen bg-black text-white flex flex-col md:flex-row">
            <Sidebar currentView={currentView} onNavigate={onNavigate} />
            <main className="flex-1 md:ml-64 pb-12 md:pb-0">
                <div className="max-w-4xl mx-auto w-full">
                    {children}
                </div>
            </main>
            <BottomNav />
        </div>
    );
};
