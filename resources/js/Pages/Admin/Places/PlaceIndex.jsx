import AdminLayout from '@/Layouts/AdminLayout';
import { Head, Link } from '@inertiajs/react';
import Table from '@/components/Table';
import TableRow from '@/components/TableRow';
import TableHeadCell from '@/components/TableHeadCell';
import TableDataCell from '@/components/TableDataCell';
import React from 'react';
import { Inertia } from "@inertiajs/inertia";



export default function PlaceIndex(props) {
    
    
    const { places } = props;

    return (
        <AdminLayout
            auth={props.auth}
            errors={props.errors}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                   Gérer les places
                </h2>
            }
        >
            <Head title="Création d'une place" />
            <div className="py-4">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <Link href={route('placeadmin.create')} class="px-3 py-2 text-white font-semibold bg-sky-600 hover:bg-sky-700 rounded">Ajouter une nouvelle place</Link>
            
                    <div className="mt-6">
                    <Table captionText="Liste des places" header={<TableRow>
                            <TableHeadCell>Numéro place</TableHeadCell>
                            <TableHeadCell>Numéro étage</TableHeadCell>
                            <TableHeadCell>Actions</TableHeadCell>
                        </TableRow>}>
                        {places.map((place) => (
                        <TableRow key={place.id} className="bg-slate-200 border-b border-indigo-200 dark:bg-gray-900 dark:border-gray-700">
                                <TableHeadCell>{place.numplace}</TableHeadCell>
                                <TableDataCell>{place.numetage}</TableDataCell>
                                <TableDataCell>
                                    <Link 
                                        href={route('placeadmin.edit', place.idplace)} 
                                        class="text-green-400 hover:text-green-600">
                                        Editer
                                    </Link>
                                    <Link 
                                        className="text-red-400 hover:text-red-600"
                                        onClick={() => {
                                            if (confirm("Voulez-vous vraiment supprimer cette place ?")) {
                                                Inertia.delete(route('placeadmin.destroy', place.idplace))
                                            }
                                        }}
                                    >
                                        Supprimer
                                    </Link>

                                </TableDataCell>
                        </TableRow>
                        ))}
                    </Table>
                    </div>
                </div>
            </div>
        </AdminLayout>
    );
}
