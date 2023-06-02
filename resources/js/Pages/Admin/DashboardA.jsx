import AdminLayout from '@/Layouts/AdminLayout';
import { Head, Link } from '@inertiajs/react';
import { MdEventSeat } from 'react-icons/md';
import classNames from 'classnames';
import { ImUsers } from 'react-icons/im';
import { BsCalendar2Event } from 'react-icons/bs';
import { IoCalendarSharp } from "react-icons/io5";
import { useState } from 'react';



export default function DashboardA(props) {

    const {
        statUserLastMonth, 
        statUserLastWeek, 
        statReservationLastMonth, 
        statReservationLastWeek,
        statListUserLast,
        statListReservationLast,
        statPlaceLast
    } = props;


    // pagination
    const [PageCourante, setPageCourante] = useState(1); // page courante
    const reservationParPage = 4; // nombre de reservation par page


    // Courante reservations
    const indexOfLastReservation = PageCourante * reservationParPage; // index de la derniere reservation
    const indexOfFirstReservation = indexOfLastReservation - reservationParPage; // index de la premiere reservation
    const couranteReservation = statListReservationLast.slice(indexOfFirstReservation, indexOfLastReservation);   // reservation courante

    // Total pages
    const totalReservation = statListReservationLast.length; // nombre total de reservation
    const totalPageReservation = Math.ceil(totalReservation / reservationParPage); // nombre total de page

    // Change page
    const paginate = pageNumber => setPageCourante(pageNumber); // changer de page
    
    // genere les numeros de page
    const pageNumbers = [];
    for (let i = 1; i <= totalPageReservation; i++) {
        pageNumbers.push(i);
    }

    return (
        <AdminLayout
            auth={props.auth}
            errors={props.errors}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Dashboard Admin</h2>}
        >
            <Head title="AdminD" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 ">
                    <div class="flex flex-wrap">
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
                                        <div class="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 shadow-lg rounded-full bg-indigo-500">
                                            <ImUsers className='w-5 h-5'/>
                                        </div>
                                    </div>
                                    </div>
                                    <p class="text-sm text-blueGray-500 mt-4">
                                    <span
                                        class={`${
                                        userWeek.pourcentage_utilisateurs_inscrits_semaine < 50
                                            ? 'text-red-500 mr-2'
                                            : 'text-emerald-500 mr-2'
                                        }`}
                                    >
                                    {userWeek.pourcentage_utilisateurs_inscrits_semaine}%
                                    </span>
                                        <span class="whitespace-nowrap">Depuis le début de la semaine</span>
                                    </p>
                                    
                                    <div className="relative w-full mt-2">
                                        <div className="overflow-hidden h-2 text-xs flex rounded bg-red-200">
                                            <div className={classNames({
                                                'bg-green-500': userWeek.pourcentage_utilisateurs_inscrits_semaine >= 50,
                                                'bg-red-500': userWeek.pourcentage_utilisateurs_inscrits_semaine < 50
                                            })}
                                            style={{ width: `${userWeek.pourcentage_utilisateurs_inscrits_semaine}%` }}
                                            ></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            ))}
                        </div>
                        <div class="w-full lg:w-3/12 xl:w-3/12 px-4">    
                            {statUserLastMonth.map((userMonth) => (
                            <div class="relative flex flex-col min-w-0 break-words bg-white rounded-lg mb-6 xl:mb-0 shadow-lg">
                                <div class="flex-auto p-4">
                                    <div class="flex flex-wrap">
                                    <div class="relative w-full pr-4 max-w-full flex-grow flex-1">
                                        <h5 class="text-blueGray-400 uppercase font-bold text-xs">Nouveaux utilisateurs</h5>
                                        <p>depuis le début du mois</p>
                                        <span class="font-bold text-xl"> {userMonth.nombre_utilisateurs_inscrits_mois}</span>
                                    </div>
                                    <div class="relative w-auto pl-4 flex-initial">
                                        <div class="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 shadow-lg rounded-full bg-blue-500">
                                        <ImUsers className="w-5 h-5" />
                                        </div>
                                    </div>
                                    </div>
                                    <p class="text-sm text-blueGray-500 mt-4">
                                    <span
                                        class={`${
                                        userMonth.pourcentage_utilisateurs_inscrits_mois < 50
                                            ? 'text-red-500 mr-2'
                                            : 'text-emerald-500 mr-2'
                                        }`}
                                    >
                                    {userMonth.pourcentage_utilisateurs_inscrits_mois}%
                                    </span>
                                        <span class="whitespace-nowrap">du total des utilisateurs</span>
                                    </p>
                                    <div class="relative w-full mt-2">
                                        <div class="overflow-hidden h-2 text-xs flex rounded bg-red-200">
                                        <div className={classNames({
                                            'bg-red-500': userMonth.pourcentage_utilisateurs_inscrits_mois < 50,
                                            'bg-green-500': userMonth.pourcentage_utilisateurs_inscrits_mois >= 50,
                                        })}
                                            style={{ width: `${userMonth.pourcentage_utilisateurs_inscrits_mois}%` }}
                                            class="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-green-500"
                                        >
                                        </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            ))}
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
                                        <div class="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 shadow-lg rounded-full bg-pink-500">
                                            <IoCalendarSharp className='w-5 h-5'/>
                                        </div>
                                    </div>
                                    </div>
                                    <p class="text-sm text-blueGray-500 mt-4">
                                    <span
                                        class={`${
                                            reservationWeek.pourcentage_reservation_semaine < 50
                                            ? 'text-red-500 mr-2'
                                            : 'text-emerald-500 mr-2'
                                        }`}
                                    >
                                    {reservationWeek.pourcentage_reservation_semaine}%
                                    </span>
                                        <span class="whitespace-nowrap">Depuis la semaine dernière</span>
                                    </p>
                                    
                                    <div className="relative w-full mt-2">
                                        <div className="overflow-hidden h-2 text-xs flex rounded bg-red-200">
                                            <div className={classNames({
                                                'bg-green-500': reservationWeek.pourcentage_reservation_semaine >= 50,
                                                'bg-red-500': reservationWeek.pourcentage_reservation_semaine < 50
                                            })}
                                            style={{ width: `${reservationWeek.pourcentage_reservation_semaine}%` }}
                                            ></div>
                                        </div>
                                    </div>
                                </div>
                                ))}
                            </div>
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
                                        <div class="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 shadow-lg rounded-full bg-purple-500">
                                            <IoCalendarSharp className='w-5 h-5'/>
                                        </div>
                                    </div>
                                    </div>
                                    <p class="text-sm text-blueGray-500 mt-4">
                                    <span
                                        class={`${
                                            reservationMonth.pourcentage_reservation_mois < 50
                                            ? 'text-red-500 mr-2'
                                            : 'text-emerald-500 mr-2'
                                        }`}
                                    >
                                    {reservationMonth.pourcentage_reservation_mois}%
                                    </span>
                                        <span class="whitespace-nowrap">Depuis le mois dernier</span>
                                    </p>
                                    <div className="relative w-full mt-2">
                                        <div className="overflow-hidden h-2 text-xs flex rounded bg-red-200">
                                            <div className={classNames({
                                                'bg-green-500': reservationMonth.pourcentage_reservation_mois >= 50,
                                                'bg-red-500': reservationMonth.pourcentage_reservation_mois < 50
                                            })}
                                                style={{
                                                    width: `${reservationMonth.pourcentage_reservation_mois}%`,
                                                }}
                                            ></div>
                                        </div>
                                    </div>
                                </div>
                                ))}
                            </div>
                        </div>                                     
                    </div>
                    <div class="grid grid-cols-1 lg:grid-cols-2 p-4 gap-4">

                        <div class="w-full min-w-0 p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8">
                            <div class="flex items-center justify-between mb-4">
                                <h5 class="text-xl font-bold leading-none text-gray-900">Derniers Clients</h5>
                                <Link href={route('useradmin.index')} class="text-sm font-medium text-blue-600 hover:underline">
                                    Voir tout
                                </Link>
                            </div>
                            <div class="flow-root">
                                    <ul role="list" class="divide-y divide-gray-200">
                                        {statListUserLast.map((userLast) => (
                                        <li class="py-3 sm:py-4">
                                            <div class="flex items-center space-x-4">
                                                <div class="flex-shrink-0">
                                                    <img class="w-8 h-8 rounded-full" src={'/img/avatar.svg'} alt="Neil image"/>
                                                </div>
                                                <div class="flex-1 min-w-0">
                                                    <p class="text-sm font-medium text-gray-900 truncate">
                                                        {userLast.name}
                                                    </p>
                                                    <p class="text-sm text-gray-500 truncate">
                                                        {userLast.email}
                                                    </p>
                                                </div>
                                                <div class="inline-flex items-center text-base font-semibold text-gray-900">
                                                    {userLast.fonction}
                                                </div>
                                            </div>
                                        </li>
                                        ))}
                                    </ul>
                            </div>
                        </div>
                        <div class="w-full min-w-0 p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8">
                            <div class="flex items-center justify-between mb-4">
                                <h5 class="text-xl font-bold leading-none text-gray-900">Dernière Réservation</h5>
                                <Link href={route('reservationadmin.index')} class="text-sm font-medium text-blue-600 hover:underline">
                                    Voir tout
                                </Link>
                            </div>
                            <div class="flow-root">
                                    <ul role="list" class="divide-y divide-gray-200">
                                        {couranteReservation.map((reservationLast) => (
                                        <li class="py-3 sm:py-4">
                                            <div class="flex items-center space-x-4">
                                                <div class="flex-shrink-0">
                                                <BsCalendar2Event className="w-6 h-6" />
                                                </div>
                                                <div class="flex-1 min-w-0">
                                                    <p class="text-sm font-medium text-gray-900 truncate">
                                                        {reservationLast.name}
                                                    </p>
                                                    <p class="text-sm text-gray-500 truncate">
                                                        {reservationLast.email}
                                                    </p>
                                                    <p class="text-sm text-gray-500 truncate">
                                                        {`Place ${reservationLast.numplace}`} 
                                                    </p>
                                                </div>
                                                <div class="inline-flex items-center text-base font-semibold text-gray-900">
                                                    {reservationLast.matin && reservationLast.apresmidi ? "Journée" : reservationLast.matin ? "Matin" : "Apres-midi"} 
                                                </div>
                                            </div>
                                        </li>
                                        ))}
                                    </ul>
                            </div>
                            {/* Pagination */}
                        <nav aria-label="Page navigation example">
                        <ul class="flex justify-center mt-2 -space-x-px">
                            <li>
                            <button 
                            disabled={PageCourante === 1}
                            onClick={() => paginate(PageCourante - 1)}
                            className="px-3 py-2 ml-0 leading-tight text-white-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                            Précédent
                            </button>
                            </li>
                            {pageNumbers.map((number) => (
                                <li key={number}>
                                <button
                                    className={`px-3 py-2 leading-tight text-gray-500 border border-gray-300 dark:bg-gray-800 ${
                                    number === PageCourante 
                                    ? 'bg-gray-300 text-gray-900 dark:bg-green-700 dark:text-white'
                                    : 'hover:bg-gray-100 hover:text-gray-700 dark:hover:bg-gray-700 dark:hover:text-white'
                                }`}
                                    onClick={() => paginate(number)}
                                >
                                    {number}
                                </button>
                                </li>
                            ))}
                            <li>
                            <button
                            disabled={PageCourante === totalPageReservation}
                            onClick={() => paginate(PageCourante + 1)}
                            className="px-3 py-2 leading-tight text-white-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">Suivant</button>
                            </li>
                        </ul>
                        </nav>

                        </div>
                    </div>

                    <div class="w-full min-w-0 p-4">
                        <div className='border border-gray-200 rounded-lg shadow sm:p-8 bg-white'>
                            <div class="flex items-center justify-between mb-4">
                                <h5 class="text-xl font-bold leading-none text-gray-900">Dernières places ajoutées</h5>
                                <Link href={route('placeadmin.index')} class="text-sm font-medium text-blue-600 hover:underline">
                                    Voir tout
                                </Link>
                            </div>
                            <div class="flow-root">
                                    <ul role="list" class="divide-y divide-gray-200">
                                        {statPlaceLast.map((placeLast) => (
                                        <li class="py-3 sm:py-4">
                                            <div class="flex items-center space-x-4">
                                                <div class="flex-shrink-0">
                                                    <MdEventSeat className="w-6 h-6" />
                                                </div>
                                                <div class="flex-1 min-w-0">
                                                    <p class="text-sm text-gray-500 truncate">
                                                        {`Place ${placeLast.numplace}`} 
                                                    </p>
                                                </div>
                                                <span className='bg-green-100 text-green-800 dark:bg-green-800 dark:text-green-100 text-sm font-medium mr-2 px-2.5 py-0.5 rounded'>
                                                    {`Etage ${placeLast.numetage}`}
                                                </span>
                                                
                                            </div>
                                        </li>
                                        ))}
                                    </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AdminLayout>
    );
}
