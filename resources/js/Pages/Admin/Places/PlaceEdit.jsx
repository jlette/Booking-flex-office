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
        >
            <Head title="Update place" />

            <div className="py-4">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                   
                    <div className="mt-6 max-w-6xl mx-auto bg-slate-100 shadow-lg rounded-lg p-6">
                    <h1 class="text-2xl font-semibold text-indigo-700">Mettre à jour la place</h1>

                    <form onSubmit={submit}>
                        <div className='mt-5'>
                            <InputLabel htmlFor="numplace" value="Numéro place" />
                            <TextInput
                                id="numplace"
                                type="text"
                                name="numplace"
                                value={data.numplace}
                                className="mt-1 block w-full"
                                autoComplete="numplace"
                                isFocused={true}
                                onChange={(e) =>
                                    setData("numplace", e.target.value)
                                }
                            />
                            <InputError message={errors.numplace} className="mt-2" />
                        </div>
                        <div className='mt-5'>
                            <InputLabel htmlFor="numetage" value="Numéro étage" />
                            <TextInput
                                id="numetage"
                                type="text"
                                name="numetage"
                                value={data.numetage}
                                className="mt-1 block w-full"
                                autoComplete="numetage"
                                onChange={(e) =>
                                    setData("numetage", e.target.value)
                                }
                            />
                            <InputError message={errors.numetage} className="mt-2" />
                        </div>

                        <div className="flex items-center justify-end mt-4">
                    <Link
                        href={route("etageadmin.index")}
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
                </div>
            </div>
        </AdminLayout>
    );
}