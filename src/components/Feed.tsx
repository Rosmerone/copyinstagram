import { Post } from './Post';
import { POSTS } from '../data/mockData';

export const Feed = () => {
    return (
        <div className="max-w-[470px] mx-auto w-full">
            {POSTS.map((post) => (
                <Post key={post.id} post={post} />
            ))}
        </div>
    );
};
