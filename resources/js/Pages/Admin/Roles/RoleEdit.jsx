import AdminLayout from "@/Layouts/AdminLayout";
import InputError from "@/components/InputError";
import InputLabel from "@/components/InputLabel";
import TextInput from "@/components/TextInput";
import { Inertia } from "@inertiajs/inertia";
import { Head, Link, useForm, usePage } from "@inertiajs/react";


export default function RoleEdit(props) {


    const { roles } = usePage().props;

    const { data, setData, put, processing, errors } = useForm({
        role_name: roles.role_name,
    });

    const submit = (e) => {
        e.preventDefault();
        put(route('roles.update', roles.role_id));
    }
    
return(
        <AdminLayout
            auth={props.auth}
            errors={props.errors}
        >
            <Head title="Edit User" />

            <div className="mt-6 max-w-6xl mx-auto bg-slate-100 shadow-lg rounded-lg p-6">
                <h2 class="text-2xl font-semibold text-indigo-700">Modifier rôle</h2>

            <form onSubmit={submit}>
                <div className='mt-5'>
                    <InputLabel htmlFor="role_name" value="Nom du rôle" />
                    <TextInput
                        id="role_name"
                        type="text"
                        name="role_name"
                        value={data.role_name}
                        className="mt-1 block w-full"
                        autoComplete="role_name"
                        isFocused={true}
                        onChange={(e) =>
                            setData("role_name", e.target.value)
                        }
                    />
                    <InputError message={errors.role_name} className="mt-2" />
                </div>

                <div className="flex items-center justify-end mt-4">
                    <Link
                        href={route("roles.index")}
                        className="underline text-sm text-gray-600 hover:text-gray-900"
                    >
                        Retour
                    </Link>
                    <button 
                        type="submit"
                        className="ml-4 bg-indigo-700 text-white py-2 px-4 rounded hover:bg-indigo-500"
                        disabled={processing}
                    >
                        Modifier
                    </button>
                </div>
            </form>
            </div>

        </AdminLayout>
)
}