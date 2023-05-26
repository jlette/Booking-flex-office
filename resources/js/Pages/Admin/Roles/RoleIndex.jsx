import AdminLayout from '@/Layouts/AdminLayout';
import { Head, useForm, usePage } from '@inertiajs/react';
import { Inertia } from '@inertiajs/inertia';
import { Link } from '@inertiajs/inertia-react';

import PrimaryButton from '@/Components/PrimaryButton';
import InputLabel from '@/Components/InputLabel';
import TextInput from "@/Components/TextInput";
import InputError from '@/components/InputError';
import Table from '@/components/Table';
import TableRow from '@/components/TableRow';
import TableHeadCell from '@/components/TableHeadCell';
import TableDataCell from '@/components/TableDataCell';


export default function RoleIndex(props) {

    const { roles } = usePage().props;

    const { data, setData, post, processing, errors } = useForm({
        role_name: '',
    });

    const onHandleChange = (event) => {
        setData(event.target.name, event.target.type === 'checkbox' ? event.target.checked : event.target.value);
    };

    const submit = (e) => {
        e.preventDefault();
        post(route('roles.store', data));
        console.log(data);
    };



    return (
        <AdminLayout
            auth={props.auth}
            errors={props.errors}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Rôle index</h2>}
        >
            <Head title="Rôle index" />

            <div className="py-12">

                <div className="mt-6 max-w-6xl mx-auto bg-slate-100 shadow-lg rounded-lg p-6">
                    <h2 class="text-2xl font-semibold text-indigo-700">Création d'un rôle</h2>
                        
                    <form onSubmit={submit}>
                        <div className='mt-5'>
                            <InputLabel htmlFor="role_name" value="Nom" />
                            <TextInput
                                id="role_name"
                                type="text"
                                name="role_name"
                                value={data.role_name}
                                className="mt-1 block w-full"
                                autoComplete="role_name"
                                onChange={onHandleChange}
                                isFocused={true}
                            />
                            <InputError message={errors.role_name} className='mt-2'/>
                        </div>
                        
                        <div className="flex items-center mt-4">
                            <PrimaryButton disabled={processing}>
                                Créer
                            </PrimaryButton>
                        </div>
                    </form>
                    </div>


                    <div className='mt-6 max-w-6xl mx-auto'>
                    <Table captionText="Liste des roles" 
                        header={<TableRow>
                            <TableHeadCell>User id</TableHeadCell>
                            <TableHeadCell>Nom</TableHeadCell>
                            <TableHeadCell>Edition</TableHeadCell>
                            <TableHeadCell>Suprression</TableHeadCell>
                        </TableRow>}>
                        {roles.map((role) => (
                        <TableRow key={role.id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                <TableHeadCell>{role.role_id}</TableHeadCell>
                                <TableDataCell>{role.role_name}</TableDataCell>
                                <TableDataCell>
                                    <Link 
                                        href={route('roles.edit', role.role_id)} 
                                        class="text-green-400 hover:text-green-600">
                                        Editer
                                    </Link>
                                </TableDataCell>
                                <TableDataCell>
                                    <Link 
                                        className="text-red-400 hover:text-red-600"
                                        onClick={() => {
                                            if (confirm("Voulez-vous vraiment supprimer cette place ?")) {
                                                Inertia.delete(route('roles.destroy', role.role_id))
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
        </AdminLayout>
    );
}