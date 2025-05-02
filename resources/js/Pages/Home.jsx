import {Index as Posts} from "./Posts/Index";
import GuestLayout from "@/Layouts/GuestLayout.jsx";

export default function Home({posts}) {
    return (
        <GuestLayout>
            <h1 className="my-5 text-xl font-semibold text-center">
                Welcome to my Blog
            </h1>

            <Posts posts={posts}/>
        </GuestLayout>
    )
}
