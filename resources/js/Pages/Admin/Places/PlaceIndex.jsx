import AdminLayout from '@/Layouts/AdminLayout';
import { Head, Link } from '@inertiajs/react';
import Table from '@/components/Table';
import TableRow from '@/components/TableRow';
import TableHeadCell from '@/components/TableHeadCell';
import TableDataCell from '@/components/TableDataCell';
import React from 'react';
import { Inertia } from "@inertiajs/inertia";



export default function PlaceIndex(props) {
    
    
    const { placeCounts } = props;


    return (
        <AdminLayout
            auth={props.auth}
            errors={props.errors}
        >
            <Head title="Création d'une place" />
            <div className="py-4">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <Link href={route('etageadmin.create')} class="px-3 py-2 text-white font-semibold bg-sky-600 hover:bg-sky-700 rounded">Ajouter un nouvel étage</Link>
            
                    <div className="mt-6">
                    <Table captionText="Liste des places par étage" header={<TableRow>
                            <TableHeadCell>Numéro étage</TableHeadCell>
                            <TableHeadCell>Nombre de places</TableHeadCell>
                            <TableHeadCell>Actions</TableHeadCell>
                        </TableRow>}>
                        {placeCounts.map((placeCount) => (
                            <TableRow className="bg-slate-200 border-b border-indigo-200 dark:bg-gray-900 dark:border-gray-700">
                                <TableDataCell>{placeCount.numetage}</TableDataCell>
                                <TableDataCell>{placeCount.place_count}</TableDataCell>
                                <TableDataCell>
                                    <Link 
                                        href={route('etageadmin.edit', placeCount.numetage)} 
                                        class="text-green-400 hover:text-green-600">
                                        Editer
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
