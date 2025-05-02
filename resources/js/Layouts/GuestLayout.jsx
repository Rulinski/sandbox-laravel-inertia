import Navigation from "@/Components/Navigation.jsx";
import {Head} from '@inertiajs/react';

export default function GuestLayout({children}) {
    return (
        <>
            <Head title="Linkedin Learning"/>

            <div className="flex flex-col items-center bg-gray-100 pt-6 sm:justify-center sm:pt-0">
                <Navigation/>

                <div className="mt-6 w-full overflow-hidden bg-white px-6 py-4 shadow-md sm:rounded-lg">
                    {children}
                </div>
            </div>
        </>
    );
}
