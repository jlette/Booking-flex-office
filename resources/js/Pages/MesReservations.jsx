import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, usePage } from '@inertiajs/react';

export default function MesReservations(props) {
    const {places, reservations } = usePage().props;


    return (
        <AuthenticatedLayout
            auth={props.auth}
            errors={props.errors}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Mes réservations</h2>}
        >
            <Head title="Mes reservations" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">

                    <div class="relative overflow-x-auto shadow-md sm:rounded-lg mt-2">
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
                                <p className='p-5 bg-gray-900 text-white'>Vous n'avez aucune réservation.</p>                                
                            </div>
                          )}
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}


