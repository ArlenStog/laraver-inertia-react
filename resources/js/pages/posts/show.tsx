import AppLayout from "@/layouts/app-layout";
import { Comment, Post } from "@/types";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import CommentForm from "@/components/comment-form";
import { Deferred, usePoll } from "@inertiajs/react";
import { useEffect, useRef } from "react";
import CommentList from "@/components/comment-list";
import { toast } from "sonner";

interface PostsShowProps {
    post: Post;
    comments: Comment[];
}

export default function PostsShow({ post, comments }: PostsShowProps) {
    const ref = useRef<HTMLDivElement>(null);
    const commentCountRef = useRef(comments?.length ?? 0);
    const iAmWrittingComment = useRef(false);

    const scrollToComments = () => {
        setTimeout(() => {
            ref.current?.scrollIntoView({
                behavior: "smooth",
                block: "start",
            });
        }, 100);
    };

    usePoll(3000, {
        only: ["comments"],
    });

    useEffect(() => {
        const newCommentCount = comments?.length ?? 0;

        if (
            newCommentCount > commentCountRef.current &&
            commentCountRef.current > 0 &&
            !iAmWrittingComment.current
        ) {
            toast("New comments available", {
                duration: 6000,
                action: {
                    label: "View Comments",
                    onClick: scrollToComments,
                },
            });
        }
        commentCountRef.current = newCommentCount;
        iAmWrittingComment.current = false;
    }, [comments]);

    const onCommentAdded = () => {
        iAmWrittingComment.current = true;
        toast("Comment has been added", {
            description: "Your comment is already live and visible",
        });
    };

    return (
        <AppLayout>
            <div className="space-y-6">
                {/* Post Content */}
                <Card className="rounded-none">
                    <CardHeader>
                        <CardTitle className="text-2xl">{post.title}</CardTitle>
                        <CardDescription>
                            By {post.user?.name} on{" "}
                            {new Date(post.created_at).toLocaleDateString()}
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <p className="text-gray-700 whitespace-pre-wrap">
                            {post.body}
                        </p>
                    </CardContent>
                </Card>

                {/* Comment Form */}
                <CommentForm postId={post.id} onCommentAdded={onCommentAdded} />

                {/* Comments Section */}
                <div ref={ref}>
                    <Deferred
                        data="comments"
                        fallback={<CommentList comments={comments ?? []} />}
                    >
                        <CommentList comments={comments} />
                    </Deferred>
                </div>
            </div>
        </AppLayout>
    );
}
