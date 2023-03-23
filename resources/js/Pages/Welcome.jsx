import { Link, Head } from '@inertiajs/react';

export default function Welcome(props) {
    return (
        <>
            <Head title="Welcome" />
            <div className="relative sm:flex sm:justify-center sm:items-center min-h-screen  bg-center bg-gray-100 dark:bg-dots-lighter dark:bg-gray-900 selection:bg-red-500 selection:text-white">
            <div className="fixed top-0 right-0 px-6 py-4 sm:block">
                    {props.auth.user ? (
                <>
                    {props.auth.user.roles === 'admin' ? (
                        <Link href={route('admin.dashboard')} className="text-sm text-gray-700 dark:text-gray-500 underline">
                            DashboardAdmin
                        </Link>
                    ) : props.auth.user.roles === 'manager' ? (
                        <Link href={route('dashboard')} className="text-sm text-gray-700 dark:text-gray-500 underline">
                            DashboardManager
                        </Link>
                    ) : (
                        <Link href={route('dashboard')} className="text-sm text-gray-700 dark:text-gray-500 underline">
                            Dashboard
                        </Link>
                    )}
                </>
                    ) : (
                        <>
                            <Link
                                href={route('login')}
                                className="font-semibold text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"
                            >
                                Log in
                            </Link>

                            <Link
                                href={route('register')}
                                className="ml-4 font-semibold text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"
                            >
                                Register
                            </Link>
                        </>
                    )}
                </div>

                <div class="max-w-sm rounded overflow-hidden shadow-lg">
                    <img class="w-full" src="/img/BFO-logo.png" alt="Sunset in the mountains"/>
                    <div class="px-6 py-4 bg-stone-50">
                        <div class="font-bold text-xl mb-2 text-center">Booking Flex Office</div>
                    </div>
                </div>
            </div>

        </>
        
    );
}
