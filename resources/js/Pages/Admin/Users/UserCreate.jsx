import AdminLayout from "@/Layouts/AdminLayout";
import InputError from "@/Components/InputError";
import PrimaryButton from '@/Components/PrimaryButton';
import { useEffect } from 'react';
import { Head, useForm, Link } from "@inertiajs/react";
import Select from "react-select";

export default function UserCreate(props) {
    
    const { data, setData, post, processing, errors, reset } = useForm({
        name: '',
        email: '',
        username: '',
        fonction: '',
        password: '',
        password_confirmation: '',
    });
    
    //  ce code permet de nettoyer les valeurs de deux champs de mot de passe 
    //  lorsqu'un composant est démonté ou que les dépendances du hook changent.
    useEffect(() => {
        return () => {
            reset('password', 'password_confirmation');
        };
    }, []);

    const fonction = [
        { label: "Architecte logiciel", value: "architecte logiciel" },
        { label: "Artiste", value: "artiste" },
        { label: "Avocat(e)", value: "avocat" },
        { label: "Chef de projet", value: "chef de projet" },
        { label: "Comptable", value: "comptable" },
        { label: "Développeur(se)", value: "developpeur" },
        { label: "Designer graphique", value: "designer graphique" },
        { label: "Enseignant(e)", value: "enseignant" },
        { label: "Ingénieur(e) en génie civil", value: "ingenieur genie civil" },
        { label: "Ingénieur(e) en informatique", value: "ingenieur informatique" },
        { label: "Infirmier(ère)", value: "infirmier" },
        { label: "Médecin", value: "medecin" },
        { label: "Photographe", value: "photographe" },
        { label: "Autre(s)", value: "autres" },
      ];
      
    
    const onFonctionChange = (selectedOption) => {
        setData('fonction', selectedOption.label);
    };


    const onHandleChange = (event) => {
        setData(event.target.name, event.target.type === 'checkbox' ? event.target.checked : event.target.value);
    };

    const submit = (e) => {
        e.preventDefault();

        post(route('useradmin.store'));
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

            <div className="py-6">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    
                    <div className="mt-6 max-w-6xl mx-auto bg-slate-200 shadow-lg rounded-lg p-6 dark:bg-slate-900">
                    <h1 class="text-2xl font-semibold text-gray-800 dark:text-white">Ajouter un utilisateur</h1>


                        <form onSubmit={submit} class="mt-5 w-full"> 
                            <div class="flex flex-wrap -mx-3 mb-6">
                                <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                                    <label
                                        class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 dark:text-white"
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
                                        
                                    />
                                    <InputError message={errors.name} className="mt-2" />
                                    
                                </div>
                                <div class="w-full md:w-1/2 px-3">
                                    <label
                                        class="block uppercase tracking-wide text-gray-700 text-xs font-bold dark:text-white mb-2"
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
                                        class="block uppercase tracking-wide text-gray-700 text-xs font-bold dark:text-white mb-2"
                                        for="email"
                                    >
                                        Email
                                    </label>
                                    <input
                                        class="appearance-none block w-full text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                        id="email"
                                        name="email"
                                        type="email"
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
                                        class="block uppercase tracking-wide text-gray-700 text-xs font-bold dark:text-white mb-2"
                                        for="fonction"
                                    >
                                        Fonction
                                    </label>
                                    <Select options={fonction} onChange={onFonctionChange} className="dark:text-gray-900"/>
                                    <InputError message={errors.fonction} className="mt-2" />
                                </div>
                            </div>

                            <div class="flex flex-wrap -mx-3 mb-6">
                                <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                                    <label
                                        class="block uppercase tracking-wide text-gray-700 text-xs font-bold dark:text-white mb-2"
                                        for="password"
                                    >
                                        Mot de passe
                                    </label>
                                    <input
                                        className="appearance-none block w-full text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                        id="password"
                                        name="password"
                                        type="password"
                                        value={data.password}
                                        autoComplete="new-password"
                                        onChange={onHandleChange}
                                        required
                                        
                                    />
                                    <InputError message={errors.password} className="mt-2" />
                                </div>

                                <div class="w-full md:w-1/2 px-3">
                                    <label
                                        class="block uppercase tracking-wide text-gray-700 text-xs font-bold dark:text-white mb-2"
                                        for="password_confirmation"
                                    >
                                        Confirmez mot de passe
                                    </label>
                                    <input
                                        class="appearance-none block w-full text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                        id="password_confirmation"
                                        type="password"
                                        name="password_confirmation"
                                        value={data.password_confirmation}
                                        autoComplete="new-password"
                                        onChange={onHandleChange}
                                        required
                                    />
                                    <InputError message={errors.password_confirmation} className="mt-2" />
                                </div>
                            </div>
                            <div className="flex items-center justify-end mt-4">
                            <Link
                                href={route("useradmin.index")}
                                className="underline text-sm text-gray-600 hover:text-gray-900 dark:hover:text-white dark:text-white"
                            >
                                Retour
                            </Link>
                            <button 
                                type="submit"
                                className="ml-4 inline-flex items-center px-4 py-2 bg-gray-800 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-gray-700 focus:bg-gray-700 active:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition ease-in-out duration-150"
                                disabled={processing}
                            >
                                Enregistrer
                            </button>
                        </div>
                        </form>
                    </div>
                </div>
            </div>
        </AdminLayout>
    );
}
