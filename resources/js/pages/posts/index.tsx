import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import AppLayout from "@/layouts/app-layout";
import { Post } from "@/types";
import { Link } from "@inertiajs/react";
import { Heart } from "lucide-react";

interface PostsIndexProps {
    posts: Post[];
}

const PostsIndex = ({ posts }: PostsIndexProps) => {
    return (
        <AppLayout>
            <div className="space-y-6">
                <h1 className="text-2xl font-bold text-gray-900">Posts</h1>
                {posts.length === 0 ? (
                    <div className="text-center py-8">
                        <p className="text-gray-500">No posts found.</p>
                    </div>
                ) : (
                    <div>
                        {posts.map((post) => (
                            <Card
                                key={post.id}
                                className=" border-b border-gray-200 py-6 last:border-b-0 last:pb-0 rounder-none border-bottom-b-0 last:border-b-amber-300"
                            >
                                <CardHeader>
                                    <CardTitle>
                                        <Link href={`/posts/${post.id}`}>
                                            {post.title}
                                        </Link>
                                    </CardTitle>
                                    <CardDescription>
                                        By {post?.user?.name}
                                    </CardDescription>
                                </CardHeader>
                                <CardContent className="space-y-4">
                                    <p>
                                        {post.body.substring(0, 200)}
                                        {post.body.length > 200 && "..."}
                                    </p>
                                    <div className="flex items-center gap-2 text-sm text-gray-500">
                                        <Heart
                                            size={16}
                                            className="text-gray-400"
                                        />
                                        <span>
                                            {post.likes_count ?? 0} likes
                                        </span>
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                )}
            </div>
        </AppLayout>
    );
};

export default PostsIndex;
