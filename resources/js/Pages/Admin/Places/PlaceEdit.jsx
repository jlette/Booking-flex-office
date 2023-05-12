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
        date_place: places.date_place,
        numplace: places.numplace,
        horaire_matin: places.horaire_matin,
        horaire_apresmidi: places.horaire_apresmidi,
        numetage: places.numetage,
        horaire: places.horaire,

    });
    console.log(places.date_place);

        
    const submit = (e) => {
        e.preventDefault();
        put(route('placeadmin.update', places.idplace));
    };
    

    return (
        <AdminLayout
            auth={props.auth}
            errors={props.errors}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Gérer les places</h2>}
        >
            <Head title="Update place" />

            <div className="py-4">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className='flex justify-between'>
                        <Link href={route('placeadmin.index')} class="px-3 py-2 text-white font-semibold bg-indigo-500 hover:bg-indigo-700 rounded">Retour vers place</Link>
                    </div>
                   
                    <div className="mt-6 max-w-6xl mx-auto bg-slate-100 shadow-lg rounded-lg p-6">
                    <h1 class="text-2xl font-semibold text-indigo-700">Mettre à jour la place</h1>

                    <form onSubmit={submit}>
                        <div>
                            <InputLabel htmlFor="date_place" value="Date place" />
                            <TextInput
                                id="date_place"
                                type="date"
                                name="date_place"
                                value={data.date_place}
                                className="mt-1 block w-full"
                                autoComplete="date_place"
                                isFocused={true}
                                onChange={(e) =>
                                    setData("date_place", e.target.value)
                                }
                            />
                            <InputError message={errors.date_place} className="mt-2" />
                        </div>


                        <div className='mt-5'>
                            <InputLabel htmlFor="numplace" value="Numéro place" />
                            <TextInput
                                id="numplace"
                                type="text"
                                name="numplace"
                                value={data.numplace}
                                className="mt-1 block w-full"
                                autoComplete="numplace"
                                onChange={(e) =>
                                    setData("numplace", e.target.value)
                                }
                            />
                            <InputError message={errors.numplace} className="mt-2" />
                        </div>

                        <div className="mt-5">
                            <InputLabel htmlFor="horaires" value="Horaires" />
                                <ul class="items-center w-full text-sm font-medium text-red-900 bg-white border border-gray-200 rounded-lg sm:flex">
                                    <li class="w-full border-b border-gray-200 sm:border-b-0 sm:border-r ">
                                        <div class="flex items-center pl-3">
                                            <input 
                                            id="horaire_matin" 
                                            name="horaire_matin"
                                            type="checkbox" 
                                            checked={data.horaire_matin}
                                            onChange={(e) => setData("horaire_matin", e.target.checked)}
                                            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 "/>
                                            <label for="horaire_matin" class="w-full py-3 ml-2 text-sm font-medium text-gray-900">Matin</label>
                                        </div>
                                    </li>
                                    <li class="w-full border-b border-gray-200 sm:border-b-0 sm:border-r ">
                                        <div class="flex items-center pl-3">
                                            <input id="horaire_apresmidi"
                                            name="horaire_apresmidi" 
                                            type="checkbox" 
                                            checked={data.horaire_apresmidi}
                                            onChange={(e) => setData("horaire_apresmidi", e.target.checked)}
                                            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 "/>
                                            <label for="horaire_apresmidi" class="w-full py-3 ml-2 text-sm font-medium text-gray-900">Après-midi</label>
                                        </div>
                                    </li>
                                </ul>
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

                        <div className="flex items-center mt-4">
                            
                            <PrimaryButton disabled={processing}>
                                Update
                            </PrimaryButton>
                        </div>
                    </form>
                    </div>
                </div>
            </div>
        </AdminLayout>
    );
}
