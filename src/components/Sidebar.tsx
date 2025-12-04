import { Home, Search, Compass, Heart, PlusSquare, User, Menu, Film, Smile } from 'lucide-react';

interface SidebarProps {
    currentView: string;
    onNavigate: (view: string) => void;
}

export const Sidebar = ({ currentView, onNavigate }: SidebarProps) => {
    return (
        <div className="hidden md:flex flex-col w-64 h-screen px-4 pt-8 pb-5 border-r border-gray-800 fixed left-0 top-0 bg-black text-white">
            <div className="mb-8 px-4">
                <h1 className="text-2xl font-bold font-instagram">Instagram</h1>
            </div>

            <nav className="flex-1 flex flex-col gap-2">
                <NavItem
                    icon={<Home size={24} />}
                    label="Home"
                    active={currentView === 'home'}
                    onClick={() => onNavigate('home')}
                />
                <NavItem icon={<Search size={24} />} label="Search" />
                <NavItem icon={<Compass size={24} />} label="Explore" />
                <NavItem icon={<Film size={24} />} label="Reels" />
                <NavItem icon={<Heart size={24} />} label="Notifications" />
                <NavItem icon={<PlusSquare size={24} />} label="Create" />
                <NavItem icon={<PlusSquare size={24} />} label="Rafa" />

                <NavItem
                    icon={<Smile size={24} />}
                    label="Neil"
                    active={currentView === 'neil'}
                    onClick={() => onNavigate('neil')}
                />
                <NavItem icon={<User size={24} />} label="Profile" />
            </nav>

            <div className="mt-auto">
                <NavItem icon={<Menu size={24} />} label="More" />
            </div>
        </div>
    );
};

const NavItem = ({ icon, label, active, onClick }: { icon: React.ReactNode; label: string; active?: boolean; onClick?: () => void }) => {
    return (
        <button
            onClick={onClick}
            className={`flex items-center gap-4 p-3 rounded-lg hover:bg-gray-900 transition-all duration-200 group ${active ? 'font-bold' : ''}`}
        >
            <div className="group-hover:scale-105 transition-transform duration-200">
                {icon}
            </div>
            <span className="text-base group-hover:translate-x-1 transition-transform duration-200">{label}</span>
        </button>
    );
};
