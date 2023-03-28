import AdminLayout from "@/Layouts/AdminLayout";
import InputError from "@/Components/InputError";
import TextInput from "@/Components/TextInput";
import PrimaryButton from '@/Components/PrimaryButton';
import { Head, Link, useForm } from "@inertiajs/react";
import Select from "react-select";

export default function FormUserA(props) {
    
    const { data, setData, post, processing, errors } = useForm({
        name: "",
        username: "",
        fonction: "",
        email: "",
    });
    
    const fonction = [
        { label: "Développeur(se)", value: "developpeur" },
        
    ];
    
    const onFonctionChange = (selectedOption) => {
        setData('fonction', selectedOption.label);
    };

    const onHandleChange = (event) => {
        setData(event.target.name, event.target.type === 'checkbox' ? event.target.checked : event.target.value);
    };

    const submit = (e) => {
        e.preventDefault();

        post(route('admin.createUser'));
    };

    return (
        <AdminLayout
            auth={props.auth}
            errors={props.errors}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Créer un utilisateur
                </h2>
            }
        >
            <Head title="Création d'un utilisateur" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <form onSubmit={submit} class="w-full"> 
                        <div class="flex flex-wrap -mx-3 mb-6">
                            <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                                <label
                                    class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                    for="name"
                                >
                                    Nom
                                </label>
                                <input
                                    className="appearance-none block w-full text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                    id="name"
                                    name="name"
                                    type="text"
                                    value={data.name}
                                    autoComplete="name"
                                    onChange={onHandleChange}
                                    isfo
                                    
                                />
                                <InputError message={errors.name} className="mt-2" />
                                
                            </div>
                            <div class="w-full md:w-1/2 px-3">
                                <label
                                    class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                    for="username"
                                >
                                    Prénom
                                </label>
                                <input
                                    class="appearance-none block w-full text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                    id="username"
                                    name="username"
                                    type="text"
                                    value={data.username}
                                    autoComplete="username"
                                    onChange={onHandleChange}
                                />
                                <InputError message={errors.username} className="mt-2"/>
                            </div>
                        </div>
                        <div class="flex flex-wrap -mx-3 mb-6">
                            <div class="w-full px-3">
                                <label
                                    class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                    for="email"
                                >
                                    Email
                                </label>
                                <input
                                    class="appearance-none block w-full text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                    id="email"
                                    name="email"
                                    type="emal"
                                    value={data.email}
                                    autoComplete="email"
                                    onChange={onHandleChange}
                                />
                                <InputError message={errors.email} className="mt-2" />
                            </div>
                        </div>
                        <div class="flex flex-wrap -mx-3 mb-6">
                            <div class="w-full px-3">
                                <label
                                    class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                    for="grid-password"
                                >
                                    Fonction
                                </label>
                                <Select options={fonction} onChange={onFonctionChange}/>
                                <InputError message={errors.fonction} className="mt-2" />
                            </div>
                        </div>
                        <PrimaryButton processing={processing}>
                         Enregistrer
                        </PrimaryButton>
                    </form>
                </div>
            </div>
        </AdminLayout>
    );
}
