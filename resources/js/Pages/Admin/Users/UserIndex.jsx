import AdminLayout from '@/Layouts/AdminLayout';
import { Head, Link } from '@inertiajs/react';
import Table from '@/components/Table';
import TableRow from '@/components/TableRow';
import TableHeadCell from '@/components/TableHeadCell';
import TableDataCell from '@/components/TableDataCell';
import React from 'react';



export default function UserIndex(props) {
    const { users } = props;


    return (
        <AdminLayout
            auth={props.auth}
            errors={props.errors}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Gérer les utilisateurs</h2>}
        >
            <Head title="UserIndex" />

            <div className="py-4">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <Link href={route('useradmin.create')} class="px-3 py-2 text-white font-semibold bg-sky-600 hover:bg-sky-700 rounded">Ajouter un nouveau utilisateur</Link>
            
                    <div className="mt-6">
                    <Table captionText="Liste des utilisateurs" header={<TableRow>
                            <TableHeadCell>User id</TableHeadCell>
                            <TableHeadCell>Nom</TableHeadCell>
                            <TableHeadCell>Prenom</TableHeadCell>
                            <TableHeadCell>Email</TableHeadCell>
                            <TableHeadCell>Fonction</TableHeadCell>
                            <TableHeadCell>Actions</TableHeadCell>
                        </TableRow>}>
                        {users.map((user) => (
                        <TableRow key={user.iduser} className="bg-slate-200 border-b border-indigo-200 dark:bg-gray-900 dark:border-gray-700">
                                <TableHeadCell>{user.iduser}</TableHeadCell>
                                <TableDataCell>{user.name}</TableDataCell>
                                <TableDataCell>{user.username}</TableDataCell>
                                <TableDataCell>{user.email}</TableDataCell>
                                <TableDataCell>{user.fonction}</TableDataCell>
                                <TableDataCell>
                                    <Link 
                                        href={route('useradmin.show', user.iduser)} 
                                        class="text-red-400 hover:text-red-600">
                                        Voir
                                    </Link>
                                    <Link 
                                        href={route('useradmin.edit', user.iduser)} 
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
