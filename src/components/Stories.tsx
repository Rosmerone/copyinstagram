import { STORIES } from '../data/mockData';

export const Stories = () => {
    return (
        <div className="flex gap-4 overflow-x-auto p-4 bg-black border-b border-gray-800 scrollbar-hide">
            {STORIES.map((story) => (
                <div key={story.id} className="flex flex-col items-center gap-1 min-w-[70px] cursor-pointer">
                    <div className={`p-[3px] rounded-full bg-gradient-to-tr from-yellow-400 to-fuchsia-600`}>
                        <div className="p-[2px] bg-black rounded-full">
                            <img
                                src={story.user.avatar}
                                alt={story.user.username}
                                className="w-14 h-14 rounded-full object-cover"
                            />
                        </div>
                    </div>
                    <span className="text-xs text-white truncate w-full text-center">
                        {story.user.username}
                    </span>
                </div>
            ))}
        </div>
    );
};
