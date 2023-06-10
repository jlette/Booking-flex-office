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
                    <div className="mt-6">
                    {reservationsUser.length > 0 ? (
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
                            <TableRow key={reservationUser.idreservation} className="bg-slate-200 border-b border-indigo-200 dark:bg-gray-900 dark:border-gray-700">
                                    <TableHeadCell>{reservationUser.idreservation}</TableHeadCell>
                                    <TableDataCell>
                                    { reservationUser.h1 ? "08:00 - 10:00" 
                                    : reservationUser.h2 ? "10:00 - 12:00" 
                                    : reservationUser.h3 ? "13:00 - 15:00" 
                                    : reservationUser.h4 ? "15:00 - 17:00" 
                                    : reservationUser.journee ? "Journée" 
                                    : reservationUser.matin ? "Matin" 
                                    : reservationUser.apresmidi ? "Après-midi"
                                    : "" }
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
                                                if (confirm("Voulez-vous vraiment supprimer cette réservation ?")) {
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
                        ) : (
                            <div>
                                <p className='p-5 bg-slate-200 border-indigo-200 dark:bg-gray-900 dark:border-gray-700 rounded'>Vous n'avez aucune réservation.</p>                                
                            </div>
                    )}
                    </div>
                </div>
            </div>
        </AdminLayout>
    );
}
