import AdminLayout from "@/Layouts/AdminLayout";
import InputError from "@/Components/InputError";
import TextInput from "@/Components/TextInput";
import PrimaryButton from '@/Components/PrimaryButton';
import { Head, useForm, Link, usePage } from "@inertiajs/react";
import Table from "@/components/Table";
import TableRow from "@/components/TableRow";
import TableHeadCell from "@/components/TableHeadCell";



export default function PlaceCreate(props) {
    
    const { data, setData, post, processing, errors, reset } = useForm({
        nbplace: '',
        numetage: '',
    });

    const { places } = usePage().props;

    const etage = [
        { label: "Premier étage", value: "1" },
        { label: "Deuxième étage", value: "2" },
        { label: "Troisième étage", value: "3" },
        
    ];
    
    const onEtageChange = (selectedOption) => {
        setData('numetage', selectedOption.value);
    };
    

    const onHandleChange = (event) => {
        setData(event.target.name, event.target.type === 'checkbox' ? event.target.checked : event.target.value);
    };

    const etages = Array.from(new Set(places.map(place => place.numetage)));
    const etagesTries = etages.sort((a, b) => a - b);

    const submit = (e) => {
        e.preventDefault();

        post(route('etageadmin.store'), data);
        console.log(data);
    };

    return (
        <AdminLayout
            auth={props.auth}
            errors={props.errors}
        >
            <Head title="Création d'une place" />

            <div className="py-6">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="mt-6 max-w-6xl mx-auto bg-slate-200 shadow-lg rounded-lg p-6 dark:bg-slate-900">
                        <h2 class="text-2xl font-semibold text-gray-800 dark:text-white">Création d'une place par étage</h2>
                        <form onSubmit={submit} class="w-full"> 

                            <div class="flex flex-wrap -mx-3 mb-2 mt-5">
                            <div class="w-full md:w-1/2 px-3">
                                        <label
                                            class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 dark:text-white"
                                            for="numetage"
                                        >
                                            Numéro d'étage
                                        </label>
                                        <input
                                            class="appearance-none block w-full text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                            id="numetage"
                                            type="numetage"
                                            name="numetage"
                                            value={data.numetage}
                                            autoComplete="numetage"
                                            onChange={onHandleChange}
                                            
                                        />
                                        {/* <Select options={etage} onChange={onEtageChange}/> */}

                                        <InputError message={errors.numetage} className="mt-2" />
                                    </div>
                                    <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                                        <label
                                            class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 dark:text-white"
                                            for="nbplace"
                                        >
                                            Nombre de places
                                        </label>
                                        <input
                                            className="appearance-none block w-full text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight"
                                            id="nbplace"
                                            name="nbplace"
                                            //value={data.nbplace}
                                            autoComplete="nbplace"
                                            onChange={onHandleChange}                                        
                                        />
                                        <InputError message={errors.nbplace} className="mt-2" />
                                    </div>
                            </div>

                            <div className="flex items-center justify-end mt-4">
                                <Link
                                    href={route("etageadmin.index")}
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
                    <div className="mt-6 max-w-6xl mx-auto bg-slate-200 shadow-lg rounded-lg p-6 dark:bg-slate-900">
                        <h2 class="text-2xl font-semibold text-gray-800 dark:text-white">Liste des étages existant:</h2>
                        <ul class="flex flex-col sm:flex-row mt-2">
                            {etagesTries.map((etage) => (
                            <li class="inline-flex items-center gap-x-2.5 py-3 px-4 text-sm font-medium bg-white first:rounded-t-lg first:mt-0 last:rounded-b-lg sm:-ml-px sm:mt-0 sm:first:rounded-tr-none sm:first:rounded-bl-lg sm:last:rounded-bl-none sm:last:rounded-tr-lg dark:bg-gray-800 dark:border-gray-700 dark:text-white">
                                {etage}
                            </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </AdminLayout>
    );
}