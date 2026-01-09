export interface Post {
    id: number;
    title: string;
    body: string;
    user_id: number;
    user?: User;
    comments?: Comment[];
    likes?: Like[];
    likes_count?: number;
    created_at: string;
    updated_at: string;
}

export interface User {
    id: number;
    name: string;
    email: string;
    posts?: Post[];
    comments?: Comment[];
    created_at: string;
    updated_at: string;
}

export interface Comment {
    id: number;
    body: string;
    post_id: number;
    user_id: number;
    user?: User;
    post?: Post;
    created_at: string;
    updated_at: string;
}

export interface Like {
    id: number;
    post_id: number;
    user_agent: string;
    ip_address: string;
    created_at: string;
    updated_at: string;
}

export interface PostLikesData {
    count: number;
    user_has_liked: boolean;
}

export interface PageProps {
    user: User | null;
    [key: string]: any;
}
