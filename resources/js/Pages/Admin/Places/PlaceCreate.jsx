import AdminLayout from "@/Layouts/AdminLayout";
import InputError from "@/Components/InputError";
import TextInput from "@/Components/TextInput";
import PrimaryButton from '@/Components/PrimaryButton';
import { useEffect } from 'react';
import { Head, useForm } from "@inertiajs/react";
import Select from "react-select";
import InputLabel from "@/components/InputLabel";

export default function PlaceCreate(props) {
    
    const { data, setData, post, processing, errors, reset } = useForm({
        numplace: '',
        numetage: '',
    });

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

    const submit = (e) => {
        e.preventDefault();

        post(route('placeadmin.store'), data);
        console.log(data);
    };

    return (
        <AdminLayout
            auth={props.auth}
            errors={props.errors}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                   Création d'une place
                </h2>
            }
        >
            <Head title="Création d'une place" />

            <div className="py-6">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                <div className="mt-6 max-w-6xl mx-auto bg-slate-200 shadow-lg rounded-lg p-6">

                    <form onSubmit={submit} class="w-full"> 

                        <div class="flex flex-wrap -mx-3 mb-2">
                                <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                                    <label
                                        class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                        for="numplace"
                                    >
                                        Numéro de place
                                    </label>
                                    <input
                                        className="appearance-none block w-full text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                        id="numplace"
                                        name="numplace"
                                        type="numplace"
                                        value={data.numplace}
                                        autoComplete="numplace"
                                        onChange={onHandleChange}
                                        
                                    />
                                    <InputError message={errors.numplace} className="mt-2" />
                                </div>

                                <div class="w-full md:w-1/2 px-3">
                                    <label
                                        class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
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
                                    {/* <Select options={fonction} onChange={onFonctionChange}/> */}

                                    <InputError message={errors.numetage} className="mt-2" />
                                </div>
                        </div>

                        <PrimaryButton processing={processing} className="mt-4">
                         Enregistrer
                        </PrimaryButton>
                    </form>
                </div>
                </div>
            </div>
        </AdminLayout>
    );
}
