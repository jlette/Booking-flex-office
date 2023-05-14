import ApplicationLogo from '@/Components/ApplicationLogo';
import { Link } from '@inertiajs/react';

export default function Guest({ children }) {
    return (
        <div className="min-h-screen flex flex-col sm:justify-center items-center pt-6 sm:pt-0 bg-gray-100">

            <div>
<<<<<<< HEAD
                <img src={'img/logo-text.png'} className="block h-24 w-auto fill-current text-gray-800"></img>
=======
                <img src={'img/logo-text.png'} className="block h-28 w-auto fill-current text-gray-800"></img>
>>>>>>> 296000b2fe9975e0f0cad2a30555030f9a6dad80
            </div>
            <div className="w-full sm:max-w-md">

                {children}
            </div>
        </div>
    );
}
