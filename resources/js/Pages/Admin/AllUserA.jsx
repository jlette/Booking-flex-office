import AdminLayout from '@/Layouts/AdminLayout';
import { Head } from '@inertiajs/react';

export default function AllUserA(props) {
    const { users } = props;

    return (
        <AdminLayout
            auth={props.auth}
            errors={props.errors}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Gerer les utilisateurs</h2>}
        >
            <Head title="AdminU" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <a href={route('admin.createFormUser')}><button class="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">
                    Ajouter un nouveau utilisateur
                    </button></a>

                    <div class="relative overflow-x-auto shadow-md sm:rounded-lg mt-2">
                        <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                            <caption class="p-5 text-lg font-semibold text-left text-gray-900 bg-white dark:text-white dark:bg-gray-800">
                                Listes des utilisateurs
                                </caption>
                            <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                <tr>
                                    <th scope="col" class="px-6 py-3">
                                        User Id
                                    </th>
                                    <th scope="col" class="px-6 py-3">
                                        Nom
                                    </th>
                                    <th scope="col" class="px-6 py-3">
                                        Prénom
                                    </th>
                                    <th scope="col" class="px-6 py-3">
                                        Email
                                    </th>
                                    <th scope="col" class="px-6 py-3">
                                        Fonction
                                    </th>
                                    <th scope="col" class="px-6 py-3">
                                        <a href="#" class="font-medium">Editer</a>
                                    </th>
                                    <th scope="col" class="px-6 py-3 items-center">
                                        <a href="#" class="font-medium">Supprimer</a>
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {users.map((user) => (

                                <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700" key={user.key}>
                                    <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        {user.iduser}
                                    </th>
                                    <td class="px-6 py-4">
                                        {user.name}
                                    </td>
                                    <td class="px-6 py-4">
                                        {user.username}
                                    </td>
                                    <td class="px-6 py-4">
                                        {user.email}
                                    </td>
                                    <td class="px-6 py-4">
                                        {user.fonction}
                                    </td>

                                    <td class="px-6 py-4">
                                        <a href="#">
                                            <button type="button">
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                                <path stroke-linecap="round" stroke-linejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                                                </svg>
                                            </button>
                                        </a>
                                    </td>

                                    <td class="px-6 py-3">
                                        <a href="#">
                                            <button type="button">
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                                    <path stroke-linecap="round" stroke-linejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                </svg>
                                            </button>
                                        </a>

                                    </td>
                                </tr>
                                
                                ))}
                            </tbody>
                                    
                        </table>
                    </div>
                </div>
            </div>
        </AdminLayout>
    );
}
