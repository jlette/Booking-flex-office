    import { useState } from 'react';
    import { Link } from '@inertiajs/react';
    import SidebarLink from '@/Components/SidebarLink';
    import { MdSupervisedUserCircle } from 'react-icons/md';
    import { MdEventSeat } from 'react-icons/md';
    import ResponsiveNavLink from '@/Components/ResponsiveNavLink';

    export default function AdminLayout({ auth, header, children }) {
        const [showingNavigationDropdown, setShowingNavigationDropdown] = useState(false);


        return (
            <div className="w-full h-full">
                <aside class="ml-[-100%] fixed z-10 top-0 pb-3 px-6 w-full flex flex-col justify-between h-screen border-r bg-white transition duration-300 md:w-4/12 lg:ml-0 lg:w-[25%] xl:w-[20%] 2xl:w-[15%]">
                    <div>
                        <div class="-mx-6 px-6 py-4">
                            <a href="#" title="home">
                            <img src={'../img/logo-text.png'} className="block h-9 w-auto fill-current text-gray-800"></img>
                            </a>
                        </div>

                        <div class="mt-8 text-center">
                            <img src={'../img/BFO-logo.png'} alt="" class="w-10 h-10 m-auto rounded-full object-cover lg:w-28 lg:h-28"/>
                            <h5 class="hidden mt-4 text-xl font-semibold text-gray-600 lg:block"> Je suis l'{auth.user.username}</h5>
                            <span class="hidden text-gray-400 lg:block">Admin</span>
                        </div>

                        <ul class="space-y-2 tracking-wide mt-8">
                            <li>
                                <SidebarLink href={route('admin.dashboard')} active={route().current('admin.dashboard')} >
                                    <svg class="-ml-1 h-6 w-6" viewBox="0 0 24 24" fill="none">
                                        <path d="M6 8a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V8ZM6 15a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2v-1Z" class="fill-current text-cyan-400 dark:fill-slate-600"></path>
                                        <path d="M13 8a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2V8Z" class="fill-current text-cyan-200 group-hover:text-cyan-300"></path>
                                        <path d="M13 15a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-1Z" class="fill-current group-hover:text-sky-300"></path>
                                    </svg>
                                    <span class="-mr-1 font-medium">Dashboard</span>
                                </SidebarLink>
                            </li>
                            <li>
                                <SidebarLink href={route('useradmin.index')} active={route().current('useradmin.index')}>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
                                </svg>
                                    <span class="-mr-1 font-medium">User</span>
                                </SidebarLink>
                            </li>
                            <li>
                                <SidebarLink href={route('reservationadmin.index')} active={route().current('reservationadmin.index')}>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12a7.5 7.5 0 0015 0m-15 0a7.5 7.5 0 1115 0m-15 0H3m16.5 0H21m-1.5 0H12m-8.457 3.077l1.41-.513m14.095-5.13l1.41-.513M5.106 17.785l1.15-.964m11.49-9.642l1.149-.964M7.501 19.795l.75-1.3m7.5-12.99l.75-1.3m-6.063 16.658l.26-1.477m2.605-14.772l.26-1.477m0 17.726l-.26-1.477M10.698 4.614l-.26-1.477M16.5 19.794l-.75-1.299M7.5 4.205L12 12m6.894 5.785l-1.149-.964M6.256 7.178l-1.15-.964m15.352 8.864l-1.41-.513M4.954 9.435l-1.41-.514M12.002 12l-3.75 6.495" />
                                </svg>
                                    <span class="-mr-1 font-medium">Réservation</span>
                                </SidebarLink>
                            </li>
                            <li>
                                <SidebarLink href={route('placeadmin.index')} active={route().current('placeadmin.index')}>
                                    <MdEventSeat className="w-6 h-6" />
                                    <span class="-mr-1 font-medium">Place</span>
                                </SidebarLink>
                            </li>

                            <li>
                                <SidebarLink href={route('roles.index')} active={route().current('roles.index')}>
                                    <MdSupervisedUserCircle className="w-6 h-6" />
                                    <span class="-mr-1 font-medium">Role</span>
                                </SidebarLink>
                            </li>
                            
                        </ul>
                    </div>

                    <div class="px-6 -mx-6 pt-4 flex flex-col items-start border-t">
                        <Link href={route('adminprofile.edit')} class="px-4 py-3 flex items-center space-x-4 rounded-md text-gray-600 group hover:text-red-700">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                        </svg>

                            <span class="group-hover:text-red-700">Profil</span>
                        </Link>
                        <Link href={route('logout')} method="post" as='button' class="px-4 py-3 flex items-center space-x-4 rounded-md text-gray-100 bg-red-500 w-full">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                            </svg>
                            <span class="group-hover:text-red-700">Logout</span>
                        </Link>
                    </div>
                </aside>
    
            <div class="ml-auto mb-6 lg:w-[75%] xl:w-[80%] 2xl:w-[85%] ">
                <div class="sticky z-10 top-0 h-16 border-b bg-white lg:py-2.5">
                    <div class="px-6 flex items-center justify-between space-x-4 2xl:container">
                        <h5 hidden class="text-2xl text-gray-600 font-medium lg:block">Administrateur Dashboard</h5>
                        <button class="w-12 h-16 -mr-2 border-r lg:hidden" onClick={() => setShowingNavigationDropdown((previousState) => !previousState)}>
                            <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                                    <path
                                        className={!showingNavigationDropdown ? 'inline-flex' : 'hidden'}
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M4 6h16M4 12h16M4 18h16"
                                    />
                                    <path
                                        className={showingNavigationDropdown ? 'inline-flex' : 'hidden'}
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>
                        </button>
                        
                        <div class="flex space-x-4">
                            <div hidden class="md:block">
                                <div class="relative flex items-center text-gray-400 focus-within:text-cyan-400">
                                    <span class="absolute left-4 h-6 flex items-center pr-3 border-r border-gray-300">
                                    <svg xmlns="http://ww50w3.org/2000/svg" class="w-4 fill-current" viewBox="0 0 35.997 36.004">
                                        <path id="Icon_awesome-search" data-name="search" d="M35.508,31.127l-7.01-7.01a1.686,1.686,0,0,0-1.2-.492H26.156a14.618,14.618,0,1,0-2.531,2.531V27.3a1.686,1.686,0,0,0,.492,1.2l7.01,7.01a1.681,1.681,0,0,0,2.384,0l1.99-1.99a1.7,1.7,0,0,0,.007-2.391Zm-20.883-7.5a9,9,0,1,1,9-9A8.995,8.995,0,0,1,14.625,23.625Z"></path>
                                    </svg>
                                    </span>
                                    <input type="search" name="leadingIcon" id="leadingIcon" placeholder="Recherche ici" class="w-full pl-14 pr-4 py-2.5 rounded-xl text-sm text-gray-600 outline-none border border-gray-300 focus:border-cyan-300 transition"/>
                                </div>
                            </div>
                            <button aria-label="search" class="w-10 h-10 rounded-xl border bg-gray-100 focus:bg-gray-100 active:bg-gray-200 md:hidden">
                                <svg xmlns="http://ww50w3.org/2000/svg" class="w-4 mx-auto fill-current text-gray-600" viewBox="0 0 35.997 36.004">
                                    <path id="Icon_awesome-search" data-name="search" d="M35.508,31.127l-7.01-7.01a1.686,1.686,0,0,0-1.2-.492H26.156a14.618,14.618,0,1,0-2.531,2.531V27.3a1.686,1.686,0,0,0,.492,1.2l7.01,7.01a1.681,1.681,0,0,0,2.384,0l1.99-1.99a1.7,1.7,0,0,0,.007-2.391Zm-20.883-7.5a9,9,0,1,1,9-9A8.995,8.995,0,0,1,14.625,23.625Z"></path>
                                </svg>
                            </button>
                            <button aria-label="chat" class="w-10 h-10 rounded-xl border bg-gray-100 focus:bg-gray-100 active:bg-gray-200">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 m-auto text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
                                </svg>
                            </button>
                            <button aria-label="notification" class="w-10 h-10 rounded-xl border bg-gray-100 focus:bg-gray-100 active:bg-gray-200">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 m-auto text-gray-600" viewBox="0 0 20 20" fill="currentColor">
                                    <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>

                {/* le menu burger */}
                <div class={`${showingNavigationDropdown ? 'block' : 'hidden'} lg:hidden`}>
                <div className="pt-2 pb-3 space-y-1">
                        <ResponsiveNavLink href={route('admin.dashboard')} active={route().current('admin.dashboard')}>
                            Dashboard
                        </ResponsiveNavLink>
                        <ResponsiveNavLink href={route('useradmin.index')} active={route().current('useradmin.index')}>
                            User
                        </ResponsiveNavLink>
                        <ResponsiveNavLink href={route('reservationadmin.index')} active={route().current('reservationadmin.index')}>
                            Réservation
                        </ResponsiveNavLink>
                        <ResponsiveNavLink href={route('placeadmin.index')} active={route().current('placeadmin.index')}>
                            Place
                        </ResponsiveNavLink>
                    </div>

                    <div className="pt-4 pb-1 border-t border-gray-200">
                        <div className="px-4">
                            <div className="font-medium text-base text-gray-800">
                                {auth.user.name}
                            </div>
                            <div className="font-medium text-sm text-gray-500">{auth.user.email}</div>
                        </div>

                        <div className="mt-3 space-y-1">
                            <ResponsiveNavLink href={route('adminprofile.edit')}>Profil</ResponsiveNavLink>
                            <ResponsiveNavLink method="post" href={route('logout')} as="button">
                                Se déconnecter
                            </ResponsiveNavLink>
                        </div>
                    </div>
                </div>
                
                
                <div class="px-6 pt-6 2xl:container">
                    <main>{children}</main>
                </div>
            </div>

        </div>
        );
    }
