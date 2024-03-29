import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, usePage, Link } from '@inertiajs/react';
import Table from '@/components/Table';
import TableRow from '@/components/TableRow';
import TableHeadCell from '@/components/TableHeadCell';
import TableDataCell from '@/components/TableDataCell';
import { Inertia } from "@inertiajs/inertia";




export default function MesReservations(props) {
    const {places, reservations } = usePage().props;   

    return (
        <AuthenticatedLayout
            auth={props.auth}
            errors={props.errors}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight dark:text-white">Mes réservations</h2>}
        >
            <Head title="Mes reservations" className="dark:text-white"/>

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    Vous avez {reservations.length} réservation(s) en cours

                <div className="mt-6">
                    {reservations.length > 0 ? (
                        <Table captionText="Liste des réservations" header={<TableRow>
                                <TableHeadCell>Créneaux horaire</TableHeadCell>
                                <TableHeadCell>Date</TableHeadCell>
                                <TableHeadCell>Place choisi</TableHeadCell>
                                <TableHeadCell>À l'étage</TableHeadCell>
                                <TableHeadCell>Suppression</TableHeadCell>
                            </TableRow>}>
                            {reservations.map((reservation) => {
                                const place = places.find((place) => place.idplace === reservation.id_place);
                                const numeroPlace = place ? place.numplace : 'Inconnu';
                                const numeroEtage = place ? place.numetage : 'Inconnu';
                                return (
                            <TableRow key={reservation.idreservation} className="bg-slate-200 border-b border-indigo-200 dark:bg-gray-900 dark:border-gray-700">
                                <TableDataCell> {
                                reservation.h1 ? "08:00 - 10:00" 
                                : reservation.h2 ? "10:00 - 12:00" 
                                : reservation.h3 ? "13:00 - 15:00" 
                                : reservation.h4 ? "15:00 - 17:00" 
                                : reservation.journee ? "Journée" 
                                : reservation.matin ? "Matin" 
                                : reservation.apresmidi ? "Après-midi" 
                                :"" }
                                </TableDataCell>
                                <TableDataCell>{new Date(reservation.date).toLocaleString('fr-FR',
                                    { day: 'numeric', month: 'long', year: 'numeric' })}
                                </TableDataCell>
                                <TableDataCell>{numeroPlace}</TableDataCell>
                                <TableDataCell>{numeroEtage}</TableDataCell>
                                <TableDataCell>
                                <Link 
                                    className="text-red-400 hover:text-red-600"
                                    onClick={() => {
                                        if (confirm("Voulez-vous vraiment supprimer cette réservation ?")) {
                                            Inertia.delete(route('reservation.destroy', reservation.idreservation))
                                        }
                                    }}
                                >
                                    Supprimer
                                </Link>
                                </TableDataCell>
                                
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
                </div>
            </div>
        </AuthenticatedLayout>
    );
}


