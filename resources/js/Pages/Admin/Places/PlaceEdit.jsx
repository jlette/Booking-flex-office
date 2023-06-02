import AdminLayout from '@/Layouts/AdminLayout';
import { Head, Link, useForm, usePage } from '@inertiajs/react';
import React, { useEffect, useState } from "react";

import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';


export default function PlaceEdit(props) {

    const { places } = usePage().props;

    const { data, setData, put, processing, errors } = useForm({
        numplace: places.numplace,
        numetage: places.numetage,

    });
    console.log(places.numetage);

        
    const submit = (e) => {
        e.preventDefault();
        put(route('placeadmin.update', places.idplace));
    };
    

    return (
        <AdminLayout
            auth={props.auth}
            errors={props.errors}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Gérer les utilisateurs</h2>}
        >
            <Head title="Update place" />

            <div className="py-4">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                   
                    <div className="mt-6 max-w-6xl mx-auto bg-slate-200 shadow-lg rounded-lg p-6 dark:bg-slate-900">
                    <h1 class="text-2xl font-semibold dark:text-white">Mettre à jour la place</h1>

                    <form onSubmit={submit}>
                        <div className='mt-5'>
                            <InputLabel htmlFor="numplace" value="Numéro place" className='dark:text-white'/>
                            <TextInput
                                id="numplace"
                                type="text"
                                name="numplace"
                                value={data.numplace}
                                className="mt-1 block w-full dark:text-gray-900"
                                autoComplete="numplace"
                                isFocused={true}
                                onChange={(e) =>
                                    setData("numplace", e.target.value)
                                }
                            />
                            <InputError message={errors.numplace} className="mt-2" />
                        </div>
                        <div className='mt-5'>
                            <InputLabel htmlFor="numetage" value="Numéro étage" className='dark:text-white'/>
                            <TextInput
                                id="numetage"
                                type="text"
                                name="numetage"
                                value={data.numetage}
                                className="mt-1 block w-full dark:text-gray-900"
                                autoComplete="numetage"
                                onChange={(e) =>
                                    setData("numetage", e.target.value)
                                }
                            />
                            <InputError message={errors.numetage} className="mt-2" />
                        </div>

                        <div className="flex items-center justify-end mt-4">
                            <Link
                                href={route("placeadmin.index")}
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
