import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, usePage, Link } from '@inertiajs/react';

import Table from '@/components/Table';
import TableRow from '@/components/TableRow';
import TableHeadCell from '@/components/TableHeadCell';
import TableDataCell from '@/components/TableDataCell';

export default function MesReservations(props) {
    const {places, reservations } = usePage().props;


    return (
        <AuthenticatedLayout
            auth={props.auth}
            errors={props.errors}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight dark:text-white">Mes réservations</h2>}
        >
            <Head title="Mes reservations" className="dark: text-white"/>

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="mt-6">
                    {reservations.length > 0 ? (
                        <Table captionText="Liste des réservations" header={<TableRow>
                                <TableHeadCell>Reservation id</TableHeadCell>
                                <TableHeadCell>Créneaux horaire</TableHeadCell>
                                <TableHeadCell>Date</TableHeadCell>
                                <TableHeadCell>Place choisi</TableHeadCell>
                                <TableHeadCell>À l'étage</TableHeadCell>
                            </TableRow>}>
                            {reservations.map((reservation) => {
                                const place = places.find((place) => place.idplace === reservation.id_place);
                                const numeroPlace = place ? place.numplace : 'Inconnu';
                                const numeroEtage = place ? place.numetage : 'Inconnu';
                                return (
                            <TableRow key={reservation.idreservation} className="bg-slate-200 border-b border-indigo-200 dark:bg-gray-900 dark:border-gray-700">
                                <TableHeadCell>{reservation.idreservation}</TableHeadCell>
                                <TableDataCell>{reservation.matin && reservation.apresmidi
                                    ? "Journée" : reservation.matin ? "Matin" : "Après-midi"}
                                </TableDataCell>
                                <TableDataCell>{new Date(reservation.date).toLocaleString('fr-FR',
                                    { day: 'numeric', month: 'long', year: 'numeric' })}
                                </TableDataCell>
                                <TableDataCell>{numeroPlace}</TableDataCell>
                                <TableDataCell>{numeroEtage}</TableDataCell>
                            </TableRow>
                                );
                                })}
                        </Table>
                    ) : (
                        <div className="flex flex-col items-center justify-center">
                            <p className="text-gray-500 dark:text-gray-400">Vous n'avez pas encore de réservation</p>

                            <Link href={route('reservation')} className="mt-4 px-4 py-2 text-sm font-medium text-white bg-sky-600 rounded-md shadow-sm hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:bg-sky-600 dark:hover:bg-sky-700 dark:focus:bg-indigo-700">Réserver une place</Link>
                        </div>
                    )}
                    </div>

                    {/* <div class="relative overflow-x-auto shadow-md sm:rounded-lg mt-2">
                    {reservations.length > 0 ? (
                        <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                            <caption class="p-5 text-lg font-semibold text-left text-gray-900 bg-white dark:text-white dark:bg-gray-800">
                                Mes réservations
                                </caption>
                            <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                <tr>
                                    <th scope="col" class="px-6 py-3">
                                        Reservation Id
                                    </th>
                                    <th scope="col" class="px-6 py-3">
                                        Créneaux horaire
                                    </th>
                                    <th scope="col" class="px-6 py-3">
                                        Date
                                    </th>
                                    
                                    <th scope="col" class="px-6 py-3">
                                        Place choisi
                                    </th>

                                    <th scope="col" class="px-6 py-3">
                                    À l'étage
                                    </th>
                                    
                                </tr>
                            </thead>
                            
                            <tbody>
                                {reservations.map((reservation) => {
                                    // si tu trouve une place qui a l'id de la place de la reservation, tu me retourne la place
                                    const place = places.find((place) => place.idplace === reservation.id_place);
                                    const numeroPlace = place ? place.numplace : 'Inconnu';
                                    const numeroEtage = place ? place.numetage : 'Inconnu';
                                    return (
                                    <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700" key={reservation.key}>
                                        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                            {reservation.idreservation}
                                        </th>
                                        <td class="px-6 py-4">
                                        {reservation.matin && reservation.apresmidi ? "Journée" : reservation.matin ? "Matin" : "Après-midi"}
                                        </td>
                                        <td class="px-6 py-4">
                                        {new Date(reservation.date).toLocaleString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' })}
                                        </td>
                                        
                                        <td class="px-6 py-4">
                                            {numeroPlace}
                                        </td>
                                        <td class="px-6 py-4">
                                            {numeroEtage}
                                        </td>
                                    </tr>
)}                               )}
                            </tbody>
                        </table>
                        ) : (
                            <div>
                                <p className='p-5 bg-slate-200 border-indigo-200 dark:bg-gray-900 dark:border-gray-700 rounded'>Vous n'avez aucune réservation.</p>                                
                            </div>
                          )}
                    </div> */}
                </div>
            </div>
        </AuthenticatedLayout>
    );
}


