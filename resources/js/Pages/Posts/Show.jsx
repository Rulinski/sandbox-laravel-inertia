import {Link} from "@inertiajs/react";
import GuestLayout from "@/Layouts/GuestLayout.jsx";

export default function Show({post}) {
    return (
        <GuestLayout>
            <div className="flex flex-col space-y-10">
                <h1 className="mx-auto text-xl">{post.title}</h1>

                <span
                    className="relative z-10 mb-3 items-center text-sm text-zinc-400 dark:text-zinc-500 pl-3.5">By {post.author}</span>

                <div className="leading-7 text-left">{post.body}</div>
            </div>

            <Link
                href={route("home")}
                className="inline-block px-4 py-2 mt-10 text-black border rounded-md hover:bg-gray-200"
            >
                Go back
            </Link>
        </GuestLayout>
    )
}
