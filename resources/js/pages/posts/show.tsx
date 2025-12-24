import AppLayout from "@/layouts/app-layout";
import { Post } from "@/types";

interface PostShowProps {
    post: Post;
}

const PostsShow = ({ post }: PostShowProps) => {
    return (
        <AppLayout>
            <h1>{post.title}</h1>
            <div>{post.body}</div>
        </AppLayout>
    );
};

export default PostsShow;
