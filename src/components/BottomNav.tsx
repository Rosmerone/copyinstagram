import { Home, Search, PlusSquare, User, Film } from 'lucide-react';

export const BottomNav = () => {
    return (
        <div className="md:hidden fixed bottom-0 left-0 right-0 h-12 bg-black border-t border-gray-800 flex items-center justify-around px-4 z-50 text-white">
            <NavIcon icon={<Home size={24} />} active />
            <NavIcon icon={<Search size={24} />} />
            <NavIcon icon={<PlusSquare size={24} />} />
            <NavIcon icon={<Film size={24} />} />
            <NavIcon icon={<User size={24} />} />
        </div>
    );
};

const NavIcon = ({ icon, active }: { icon: React.ReactNode; active?: boolean }) => {
    return (
        <button className={`p-2 ${active ? 'text-white' : 'text-gray-400'}`}>
            {icon}
        </button>
    );
};
