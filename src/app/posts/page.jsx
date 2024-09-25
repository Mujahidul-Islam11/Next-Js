import { getPostsData } from "@/services/getPosts";
import Link from "next/link";
import React from "react";

const PostPage = async () => {
  const postsData = await getPostsData();

  return (
    <div>
      <h2>All Posts</h2>
      <div className="grid grid-cols-1 md:grid-cols-4 px-6 gap-12">
        {postsData?.slice(0, 20).map((post) => (
          <div key={post?.id} className="border p-3">
            <h3 className="font-bold">{post?.title}</h3>
            <h3 className="">{post?.body}</h3>
            <div className="flex justify-center mt-6">
            <Link href={`/posts/${post.id}`}>
              <button className="bg-red-500 px-3 py-2 text-white">
                View Details
              </button>
            </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PostPage;
