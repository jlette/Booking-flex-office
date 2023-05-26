import AdminLayout from '@/Layouts/AdminLayout';
import { Head, Link, usePage } from '@inertiajs/react';
import Table from '@/components/Table';
import TableRow from '@/components/TableRow';
import TableHeadCell from '@/components/TableHeadCell';
import TableDataCell from '@/components/TableDataCell';
import React from 'react';
import { Inertia } from "@inertiajs/inertia";


export default function ReservationIndex(props) {

    const { reservationsUser } = usePage().props;


    return (
        <AdminLayout
            auth={props.auth}
            errors={props.errors}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Gérer les réservations</h2>}
        >
            <Head title="AdminR" />

            <div className="py-4">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <Link href={route('placeadmin.create')} class="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">Ajouter des places</Link>
            
                    <div className="mt-6">
                    <Table captionText="Liste des réservations" header={<TableRow>
                            <TableHeadCell>Reservation id</TableHeadCell>
                            <TableHeadCell>Horaires</TableHeadCell>
                            <TableHeadCell>Date</TableHeadCell>
                            {/* <TableHeadCell>id Utilisateur</TableHeadCell> */}
                            <TableHeadCell>Utilisateur</TableHeadCell>
                            <TableHeadCell>Suppression</TableHeadCell>
                            <TableHeadCell>Numero de la place</TableHeadCell>
                            <TableHeadCell>Numéro de l'étage </TableHeadCell>
                        </TableRow>}>
                        {reservationsUser.map((reservationUser) => (
                            
                        <TableRow key={reservationUser.idreservation} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                <TableHeadCell>{reservationUser.idreservation}</TableHeadCell>
                                <TableDataCell>{reservationUser.matin && reservationUser.apresmidi 
                                ? "Journée" : reservationUser.matin ? "Matin" : "Après-midi"}
                                </TableDataCell>
                                <TableDataCell>{new Date(reservationUser.date).toLocaleString('fr-FR', 
                                { day: 'numeric', month: 'long', year: 'numeric' })}
                                </TableDataCell>
                                {/* <TableDataCell>{reservation.id_user}</TableDataCell> */}
                                <TableDataCell>{reservationUser.username}</TableDataCell>
                                <TableDataCell>
                                <Link 
                                        className="text-red-400 hover:text-red-600"
                                        onClick={() => {
                                            if (confirm("Voulez-vous vraiment supprimer cette place ?")) {
                                                Inertia.delete(route('reservationadmin.destroy', reservationUser.idreservation))
                                            }
                                        }}
                                    >
                                        Supprimer
                                    </Link>
                                </TableDataCell>
                                <TableDataCell>{reservationUser.numplace}</TableDataCell>
                                <TableDataCell>{reservationUser.numetage}</TableDataCell>
                        </TableRow>
                        ))}
                    </Table>
                    </div>
                </div>
            </div>
        </AdminLayout>
    );
}
