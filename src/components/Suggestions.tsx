import { SUGGESTIONS, USERS } from '../data/mockData';

export const Suggestions = () => {
    const currentUser = USERS[0]; // Mock current user

    return (
        <div className="hidden lg:block w-[320px] pl-10 pt-8 fixed right-0 top-0 h-screen">
            <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                    <img
                        src={currentUser.avatar}
                        alt={currentUser.username}
                        className="w-11 h-11 rounded-full object-cover"
                    />
                    <div className="flex flex-col">
                        <span className="font-semibold text-sm">{currentUser.username}</span>
                        <span className="text-gray-500 text-sm">{currentUser.name}</span>
                    </div>
                </div>
                <button className="text-blue-500 text-xs font-semibold hover:text-white">Switch</button>
            </div>

            <div className="flex items-center justify-between mb-4">
                <span className="text-gray-500 font-semibold text-sm">Suggested for you</span>
                <button className="text-xs font-semibold hover:text-gray-400">See All</button>
            </div>

            <div className="flex flex-col gap-4">
                {SUGGESTIONS.map((suggestion) => (
                    <div key={suggestion.id} className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                            <img
                                src={suggestion.avatar}
                                alt={suggestion.username}
                                className="w-11 h-11 rounded-full object-cover"
                            />
                            <div className="flex flex-col">
                                <span className="font-semibold text-sm hover:underline cursor-pointer">
                                    {suggestion.username}
                                </span>
                                <span className="text-gray-500 text-xs">{suggestion.relation}</span>
                            </div>
                        </div>
                        <button className="text-blue-500 text-xs font-semibold hover:text-white">
                            Follow
                        </button>
                    </div>
                ))}
            </div>

            <div className="mt-8 flex flex-wrap gap-x-1 gap-y-0 text-xs text-gray-500">
                {['About', 'Help', 'Press', 'API', 'Jobs', 'Privacy', 'Terms', 'Locations', 'Language', 'Meta Verified'].map((link, index) => (
                    <span key={link}>
                        <a href="#" className="hover:underline">{link}</a>
                        {index !== 9 && <span className="mx-1">.</span>}
                    </span>
                ))}
            </div>

            <div className="mt-4 text-xs text-gray-500">
                © 2023 INSTAGRAM FROM META
            </div>
        </div>
    );
};
