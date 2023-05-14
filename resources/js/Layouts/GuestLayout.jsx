import ApplicationLogo from '@/Components/ApplicationLogo';
import { Link } from '@inertiajs/react';

export default function Guest({ children }) {
    return (
        <div className="min-h-screen flex flex-col sm:justify-center items-center pt-6 sm:pt-0 bg-gray-100">

            <div>
                <img src={'img/logo-text.png'} className="block h-24 w-auto fill-current text-gray-800"></img>
            </div>
            <div className="w-full sm:max-w-md">

                {children}
            </div>
        </div>
    );
}
