import { Heart, MessageCircle, Send, Bookmark, MoreHorizontal } from 'lucide-react';

interface PostProps {
    post: {
        id: string;
        user: {
            username: string;
            avatar: string;
        };
        image: string;
        likes: number;
        caption: string;
        comments: number;
        timestamp: string;
    };
}

export const Post = ({ post }: PostProps) => {
    return (
        <div className="border-b border-gray-800 pb-4 mb-4">
            {/* Header */}
            <div className="flex items-center justify-between p-3">
                <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-yellow-400 to-fuchsia-600 p-[2px]">
                        <div className="bg-black rounded-full p-[1px] w-full h-full">
                            <img
                                src={post.user.avatar}
                                alt={post.user.username}
                                className="w-full h-full rounded-full object-cover"
                            />
                        </div>
                    </div>
                    <span className="font-semibold text-sm">{post.user.username}</span>
                    <span className="text-gray-500 text-sm">• {post.timestamp}</span>
                </div>
                <button>
                    <MoreHorizontal size={20} />
                </button>
            </div>

            {/* Image */}
            <div className="w-full aspect-square bg-gray-900">
                <img
                    src={post.image}
                    alt="Post"
                    className="w-full h-full object-cover"
                />
            </div>

            {/* Actions */}
            <div className="p-3">
                <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-4">
                        <button className="hover:text-gray-400 transition-colors hover:scale-110 active:scale-90 duration-200">
                            <Heart size={24} />
                        </button>
                        <button className="hover:text-gray-400 transition-colors hover:scale-110 active:scale-90 duration-200">
                            <MessageCircle size={24} />
                        </button>
                        <button className="hover:text-gray-400 transition-colors hover:scale-110 active:scale-90 duration-200">
                            <Send size={24} />
                        </button>
                    </div>
                    <button className="hover:text-gray-400 transition-colors hover:scale-110 active:scale-90 duration-200">
                        <Bookmark size={24} />
                    </button>
                </div>

                <div className="font-semibold text-sm mb-2">{post.likes.toLocaleString()} likes</div>

                <div className="text-sm mb-2">
                    <span className="font-semibold mr-2">{post.user.username}</span>
                    {post.caption}
                </div>

                <button className="text-gray-500 text-sm mb-2">
                    View all {post.comments} comments
                </button>

                <div className="flex items-center gap-2">
                    <input
                        type="text"
                        placeholder="Add a comment..."
                        className="bg-transparent text-sm w-full focus:outline-none"
                    />
                </div>
            </div>
        </div>
    );
};
