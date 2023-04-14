import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, usePage } from '@inertiajs/react';

export default function MesReservations(props) {
    const { auth, reservations } = usePage().props;

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
                                        Matin
                                    </th>
                                    <th scope="col" class="px-6 py-3">
                                        Après-midi
                                    </th>
                                    <th scope="col" class="px-6 py-3">
                                        Date
                                    </th>
                                    <th scope="col" class="px-6 py-3">
                                        Id User
                                    </th>
                                    <th scope="col" class="px-6 py-3">
                                        Id Place
                                    </th>
                                    
                                </tr>
                            </thead>
                            {reservations.length > 0 ? (
    <tbody>
        {reservations.map((reservation) => (
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700" key={reservation.key}>
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    {reservation.idreservation}
                </th>
                <td class="px-6 py-4">
                    {reservation.matin}
                </td>
                <td class="px-6 py-4">
                    {reservation.apresMidi}
                </td>
                <td class="px-6 py-4">
                    {reservation.date}
                </td>
                <td class="px-6 py-4">
                    {reservation.id_user}
                </td>
                <td class="px-6 py-4">
                    {reservation.id_place}
                </td>
            </tr>
        ))}
    </tbody>
) : (
    <p className='p-3 bg-gray-800'>Aucune réservation trouvée.</p>
)}

                                    
                        </table>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}


