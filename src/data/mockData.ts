export const USERS = [
    {
        id: '1',
        username: 'johndoe',
        name: 'John Doe',
        avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150&h=150&fit=crop',
    },
    {
        id: '2',
        username: 'janedoe',
        name: 'Jane Doe',
        avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop',
    },
    {
        id: '3',
        username: 'traveler_mike',
        name: 'Mike Smith',
        avatar: 'https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=150&h=150&fit=crop',
    },
    {
        id: '4',
        username: 'artistic_anna',
        name: 'Anna Bell',
        avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop',
    },
    {
        id: '5',
        username: 'tech_guru',
        name: 'Tech Guru',
        avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop',
    },
];

export const STORIES = USERS.map(user => ({
    id: user.id,
    user: user,
    isSeen: Math.random() > 0.5,
}));

export const POSTS = [
    {
        id: '1',
        user: USERS[0],
        image: 'https://images.unsplash.com/photo-1682687220742-aba13b6e50ba?w=800&auto=format&fit=crop',
        likes: 1234,
        caption: 'Beautiful sunset! 🌅 #nature #sunset',
        comments: 42,
        timestamp: '2h',
    },
    {
        id: '2',
        user: USERS[1],
        image: 'https://images.unsplash.com/photo-1682687221038-404670f01d03?w=800&auto=format&fit=crop',
        likes: 856,
        caption: 'Exploring the mountains 🏔️',
        comments: 15,
        timestamp: '5h',
    },
    {
        id: '3',
        user: USERS[2],
        image: 'https://images.unsplash.com/photo-1682686581854-5e71f58e7e3f?w=800&auto=format&fit=crop',
        likes: 2300,
        caption: 'City lights at night 🌃',
        comments: 89,
        timestamp: '1d',
    },
];

export const SUGGESTIONS = [
    {
        id: '6',
        username: 'photo_lover',
        name: 'Photography Lover',
        avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop',
        relation: 'New to Instagram',
    },
    {
        id: '7',
        username: 'foodie_adventures',
        name: 'Foodie',
        avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop',
        relation: 'Followed by johndoe + 2 others',
    },
];
