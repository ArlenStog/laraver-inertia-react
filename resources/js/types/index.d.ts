export interface Post {
    id: number;
    title: string;
    body: string;
    user_id: number;
    user?: User;
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
