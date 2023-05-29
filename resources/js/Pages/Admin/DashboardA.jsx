import AdminLayout from '@/Layouts/AdminLayout';
import { Head } from '@inertiajs/react';

export default function DashboardA(props) {


    const { statUserLastMonth, statUserLastWeek, statPlace, statReservationLastMonth, statReservationLastWeek } = props;



    return (
        <AdminLayout
            auth={props.auth}
            errors={props.errors}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Dashboard Admin</h2>}
        >
            <Head title="AdminD" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div class="flex flex-wrap">
                        <div class="w-full lg:w-3/12 xl:w-3/12 px-4">    
                            {statUserLastMonth.map((userMonth) => (
                            <div class="relative flex flex-col min-w-0 break-words bg-white rounded-lg mb-6 xl:mb-0 shadow-lg">
                                <div class="flex-auto p-4">
                                    <div class="flex flex-wrap">
                                    <div class="relative w-full pr-4 max-w-full flex-grow flex-1">
                                        <h5 class="text-blueGray-400 uppercase font-bold text-xs">Nouveaux utilisateurs</h5>
                                        <span class="font-bold text-xl"> {userMonth.nombre_utilisateurs_inscrits_mois}</span>
                                    </div>
                                    <div class="relative w-auto pl-4 flex-initial">
                                        <div class="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 shadow-lg rounded-full bg-red-500"><i class="far fa-chart-bar"></i></div>
                                    </div>
                                    </div>
                                    <p class="text-sm text-blueGray-500 mt-4"><span class="text-emerald-500 mr-2"><i class="fas fa-arrow-up"></i> {userMonth.pourcentage_utilisateurs_inscrits_mois}%</span><span class="whitespace-nowrap">Depuis le mois dernier</span></p>
                                </div>
                            </div>
                            ))}
                        </div>
                        <div class="w-full lg:w-3/12 xl:w-3/12 px-4">
                        {statUserLastWeek.map((userWeek) => (
                            <div class="relative flex flex-col min-w-0 break-words bg-white rounded-lg mb-6 xl:mb-0 shadow-lg">
                                <div class="flex-auto p-4">
                                    <div class="flex flex-wrap">
                                    <div class="relative w-full pr-4 max-w-full flex-grow flex-1">
                                        <h5 class="text-blueGray-400 uppercase font-bold text-xs">Nouveaux utilisateurs</h5>
                                        <span class="font-bold text-xl">{userWeek.nombre_utilisateurs_inscrits_semaine}</span>
                                    </div>
                                    <div class="relative w-auto pl-4 flex-initial">
                                        <div class="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 shadow-lg rounded-full bg-orange-500"><i class="fas fa-chart-pie"></i></div>
                                    </div>
                                    </div>
                                    <p class="text-sm text-blueGray-500 mt-4"><span class="text-red-500 mr-2"><i class="fas fa-arrow-down"></i> {userWeek.pourcentage_utilisateurs_inscrits_semaine}%</span><span class="whitespace-nowrap">Depuis la semaine dernière </span></p>
                                </div>
                            </div>
                            ))}
                        </div>                                     
                        <div class="w-full lg:w-3/12 xl:w-3/12 px-4">
                            <div class="relative flex flex-col min-w-0 break-words bg-white rounded-lg mb-6 xl:mb-0 shadow-lg">
                                {statReservationLastMonth.map((reservationMonth) => (
                                <div class="flex-auto p-4">
                                    <div class="flex flex-wrap">
                                    <div class="relative w-full pr-4 max-w-full flex-grow flex-1">
                                        <h5 class="text-blueGray-400 uppercase font-bold text-xs">Nouvelle Réservation</h5>
                                        <span class="font-bold text-xl">{reservationMonth.nombre_reservation_mois}</span>
                                    </div>
                                    <div class="relative w-auto pl-4 flex-initial">
                                        <div class="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 shadow-lg rounded-full bg-orange-500"><i class="fas fa-chart-pie"></i></div>
                                    </div>
                                    </div>
                                    <p class="text-sm text-blueGray-500 mt-4"><span class="text-red-500 mr-2"><i class="fas fa-arrow-down"></i> {reservationMonth.pourcentage_reservation_mois}%</span><span class="whitespace-nowrap">Depuis le mois dernier</span></p>
                                </div>
                                ))}
                            </div>
                        </div>                   
                        <div class="w-full lg:w-3/12 xl:w-3/12 px-4">
                            <div class="relative flex flex-col min-w-0 break-words bg-white rounded-lg mb-6 xl:mb-0 shadow-lg">
                                {statReservationLastWeek.map((reservationWeek) => (
                                <div class="flex-auto p-4">
                                    <div class="flex flex-wrap">
                                    <div class="relative w-full pr-4 max-w-full flex-grow flex-1">
                                        <h5 class="text-blueGray-400 uppercase font-bold text-xs">Nouvelle Réservation</h5>
                                        <span class="font-bold text-xl"> {reservationWeek.nombre_reservation_semaine} </span>
                                    </div>
                                    <div class="relative w-auto pl-4 flex-initial">
                                        <div class="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 shadow-lg rounded-full bg-orange-500"><i class="fas fa-chart-pie"></i></div>
                                    </div>
                                    </div>
                                    <p class="text-sm text-blueGray-500 mt-4"><span class="text-red-500 mr-2"><i class="fas fa-arrow-down"></i> {reservationWeek.pourcentage_reservation_semaine}%</span><span class="whitespace-nowrap"></span></p>
                                </div>
                                ))}
                            </div>
                        </div>                   
                    </div>
                    <div class="grid grid-cols-1 lg:grid-cols-2 p-4 gap-4">

                          <div class="w-full min-w-0 p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
                            <div class="flex items-center justify-between mb-4">
                                <h5 class="text-xl font-bold leading-none text-gray-900 dark:text-white">Latest Customers</h5>
                                <a href="#" class="text-sm font-medium text-blue-600 hover:underline dark:text-blue-500">
                                    View all
                                </a>
                        </div>
                        <div class="flow-root">
                                <ul role="list" class="divide-y divide-gray-200 dark:divide-gray-700">
                                    <li class="py-3 sm:py-4">
                                        <div class="flex items-center space-x-4">
                                            <div class="flex-shrink-0">
                                                <img class="w-8 h-8 rounded-full" src={'/img/avatar.svg'} alt="Neil image"/>
                                            </div>
                                            <div class="flex-1 min-w-0">
                                                <p class="text-sm font-medium text-gray-900 truncate dark:text-white">
                                                    Neil Sims
                                                </p>
                                                <p class="text-sm text-gray-500 truncate dark:text-gray-400">
                                                    email@windster.com
                                                </p>
                                            </div>
                                            <div class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                                                $320
                                            </div>
                                        </div>
                                    </li>
                                    <li class="py-3 sm:py-4">
                                        <div class="flex items-center space-x-4">
                                            <div class="flex-shrink-0">
                                                <img class="w-8 h-8 rounded-full" src="/docs/images/people/profile-picture-3.jpg" alt="Bonnie image"/>
                                            </div>
                                            <div class="flex-1 min-w-0">
                                                <p class="text-sm font-medium text-gray-900 truncate dark:text-white">
                                                    Bonnie Green
                                                </p>
                                                <p class="text-sm text-gray-500 truncate dark:text-gray-400">
                                                    email@windster.com
                                                </p>
                                            </div>
                                            <div class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                                                $3467
                                            </div>
                                        </div>
                                    </li>
                                    <li class="py-3 sm:py-4">
                                        <div class="flex items-center space-x-4">
                                            <div class="flex-shrink-0">
                                                <img class="w-8 h-8 rounded-full" src="/docs/images/people/profile-picture-2.jpg" alt="Michael image"/>
                                            </div>
                                            <div class="flex-1 min-w-0">
                                                <p class="text-sm font-medium text-gray-900 truncate dark:text-white">
                                                    Michael Gough
                                                </p>
                                                <p class="text-sm text-gray-500 truncate dark:text-gray-400">
                                                    email@windster.com
                                                </p>
                                            </div>
                                            <div class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                                                $67
                                            </div>
                                        </div>
                                    </li>
                                    <li class="py-3 sm:py-4">
                                        <div class="flex items-center space-x-4">
                                            <div class="flex-shrink-0">
                                                <img class="w-8 h-8 rounded-full" src="/docs/images/people/profile-picture-4.jpg" alt="Lana image"/>
                                            </div>
                                            <div class="flex-1 min-w-0">
                                                <p class="text-sm font-medium text-gray-900 truncate dark:text-white">
                                                    Lana Byrd
                                                </p>
                                                <p class="text-sm text-gray-500 truncate dark:text-gray-400">
                                                    email@windster.com
                                                </p>
                                            </div>
                                            <div class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                                                $367
                                            </div>
                                        </div>
                                    </li>
                                    <li class="pt-3 pb-0 sm:pt-4">
                                        <div class="flex items-center space-x-4">
                                            <div class="flex-shrink-0">
                                                <img class="w-8 h-8 rounded-full" src="/docs/images/people/profile-picture-5.jpg" alt="Thomas image"/>
                                            </div>
                                            <div class="flex-1 min-w-0">
                                                <p class="text-sm font-medium text-gray-900 truncate dark:text-white">
                                                    Thomes Lean
                                                </p>
                                                <p class="text-sm text-gray-500 truncate dark:text-gray-400">
                                                    email@windster.com
                                                </p>
                                            </div>
                                            <div class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                                                $2367
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                        </div>
                        </div>
                        <div class="w-full min-w-0 p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
                            <div class="flex items-center justify-between mb-4">
                                <h5 class="text-xl font-bold leading-none text-gray-900 dark:text-white">Latest Customers</h5>
                                <a href="#" class="text-sm font-medium text-blue-600 hover:underline dark:text-blue-500">
                                    View all
                                </a>
                        </div>
                        <div class="flow-root">
                                <ul role="list" class="divide-y divide-gray-200 dark:divide-gray-700">
                                    <li class="py-3 sm:py-4">
                                        <div class="flex items-center space-x-4">
                                            <div class="flex-shrink-0">
                                                <img class="w-8 h-8 rounded-full" src="/docs/images/people/profile-picture-1.jpg" alt="Neil image"/>
                                            </div>
                                            <div class="flex-1 min-w-0">
                                                <p class="text-sm font-medium text-gray-900 truncate dark:text-white">
                                                    Neil Sims
                                                </p>
                                                <p class="text-sm text-gray-500 truncate dark:text-gray-400">
                                                    email@windster.com
                                                </p>
                                            </div>
                                            <div class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                                                $320
                                            </div>
                                        </div>
                                    </li>
                                    <li class="py-3 sm:py-4">
                                        <div class="flex items-center space-x-4">
                                            <div class="flex-shrink-0">
                                                <img class="w-8 h-8 rounded-full" src="/docs/images/people/profile-picture-3.jpg" alt="Bonnie image"/>
                                            </div>
                                            <div class="flex-1 min-w-0">
                                                <p class="text-sm font-medium text-gray-900 truncate dark:text-white">
                                                    Bonnie Green
                                                </p>
                                                <p class="text-sm text-gray-500 truncate dark:text-gray-400">
                                                    email@windster.com
                                                </p>
                                            </div>
                                            <div class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                                                $3467
                                            </div>
                                        </div>
                                    </li>
                                    <li class="py-3 sm:py-4">
                                        <div class="flex items-center space-x-4">
                                            <div class="flex-shrink-0">
                                                <img class="w-8 h-8 rounded-full" src="/docs/images/people/profile-picture-2.jpg" alt="Michael image"/>
                                            </div>
                                            <div class="flex-1 min-w-0">
                                                <p class="text-sm font-medium text-gray-900 truncate dark:text-white">
                                                    Michael Gough
                                                </p>
                                                <p class="text-sm text-gray-500 truncate dark:text-gray-400">
                                                    email@windster.com
                                                </p>
                                            </div>
                                            <div class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                                                $67
                                            </div>
                                        </div>
                                    </li>
                                    <li class="py-3 sm:py-4">
                                        <div class="flex items-center space-x-4">
                                            <div class="flex-shrink-0">
                                                <img class="w-8 h-8 rounded-full" src="/docs/images/people/profile-picture-4.jpg" alt="Lana image"/>
                                            </div>
                                            <div class="flex-1 min-w-0">
                                                <p class="text-sm font-medium text-gray-900 truncate dark:text-white">
                                                    Lana Byrd
                                                </p>
                                                <p class="text-sm text-gray-500 truncate dark:text-gray-400">
                                                    email@windster.com
                                                </p>
                                            </div>
                                            <div class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                                                $367
                                            </div>
                                        </div>
                                    </li>
                                    <li class="pt-3 pb-0 sm:pt-4">
                                        <div class="flex items-center space-x-4">
                                            <div class="flex-shrink-0">
                                                <img class="w-8 h-8 rounded-full" src="/docs/images/people/profile-picture-5.jpg" alt="Thomas image"/>
                                            </div>
                                            <div class="flex-1 min-w-0">
                                                <p class="text-sm font-medium text-gray-900 truncate dark:text-white">
                                                    Thomes Lean
                                                </p>
                                                <p class="text-sm text-gray-500 truncate dark:text-gray-400">
                                                    email@windster.com
                                                </p>
                                            </div>
                                            <div class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                                                $2367
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </AdminLayout>
    );
}
