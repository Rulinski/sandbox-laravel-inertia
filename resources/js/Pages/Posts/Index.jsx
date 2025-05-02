import {Link} from "@inertiajs/react";

export function Index({posts}) {

    return (
        <div>
            <div className="flex">
                <Link
                    href={route("posts.create")}
                    className="px-4 py-2 mt-4 text-white bg-blue-500 rounded-md hover:bg-blue-600 cursor-pointer"
                >
                    Create new post
                </Link>
            </div>

            {posts && posts.map(post => (
                <div key={post.id} className="p-5 my-5 border rounded-md shadow-sm text-left">
                    <h2 className="mb-5 font-bold">
                        <Link
                            href={route("posts.show", post.id)}
                        >
                            {post.title}
                        </Link>
                    </h2>
                    <p className="relative z-10 order-first mb-3 flex items-center text-sm text-zinc-400 dark:text-zinc-500 pl-3.5">{post.author}</p>
                    <p>id: {post.id}</p>
                    <p>{post.body}</p>

                    <div className="space-x-5 space-y-5 my-3">
                        <Link
                            href={route("posts.edit", post.id)}
                            className="px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600"
                        >
                            Edit Post
                        </Link>

                        <button
                            className="px-4 py-2 text-white bg-gray-400 rounded-md hover:bg-gray-500 cursor-pointer">
                            Delete Post
                        </button>
                    </div>
                </div>
            ))}
        </div>
    )
}
