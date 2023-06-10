import AdminLayout from '@/Layouts/AdminLayout';
import DeleteUserFormAdmin from './PartialsAdmin/DeleteUserFormAdmin';
import UpdatePasswordFormAdmin from './PartialsAdmin/UpdatePasswordFormAdmin';
import UpdateProfileInformationFormAdmin from './PartialsAdmin/UpdateProfileInformationFormAdmin';
import { Head } from '@inertiajs/react';

export default function EditAdmin({ auth, mustVerifyEmail, status }) {
    return (
        <AdminLayout
            auth={auth}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight ">Profil</h2>}
        >
            <Head title="Profil" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 space-y-6">
                    <div className="p-4 sm:p-8 bg-white shadow sm:rounded-lg dark:bg-slate-900">
                        <UpdateProfileInformationFormAdmin
                            mustVerifyEmail={mustVerifyEmail}
                            status={status}
                            className="max-w-xl dark:text-gray-900"
                        />
                    </div>

                    <div className="p-4 sm:p-8 bg-white shadow sm:rounded-lg dark:bg-slate-900">
                        <UpdatePasswordFormAdmin className="max-w-xl" />
                    </div>

                    <div className="p-4 sm:p-8 bg-white shadow sm:rounded-lg dark:bg-slate-900">
                        <DeleteUserFormAdmin className="max-w-xl" />
                    </div>
                </div>
            </div>
        </AdminLayout>
    );
}
