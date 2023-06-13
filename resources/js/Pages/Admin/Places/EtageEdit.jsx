import AdminLayout from '@/Layouts/AdminLayout';
import { Head, Link, useForm, usePage } from '@inertiajs/react';
import React, { useEffect, useState } from "react";

import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import { Inertia } from "@inertiajs/inertia";


export default function EtageEdit(props) {

    const { placeIds, placeReservedIds, reservations} = props;

    const { data, setData, put, processing, errors} = useForm({
        numetage: props.numetage,
        nbplace: props.placeCount,
        placesToAdd: 0,
        placesToRemove: [],
    });
    const nbplace_reserved = props.placeReservedIds ? props.placeReservedIds.length : 0;

    console.log("place_reserved_ids : " , placeReservedIds);
    console.log("place_ids : " , placeIds);
    console.log("reservations:", reservations);
    console.log("nbplace_reserved:", nbplace_reserved);
    console.log("nbplace:", data.nbplace);


    const adjustPlaces = () => {
        let placesToRemove = [];
        let placesToAdd = 0;
    
        console.log("placeIds.length:", placeIds.length);
        console.log("data.nbplace:", data.nbplace);

        // Si la longueur de placeIds est supérieure au nombre de place
        if (placeIds.length > data.nbplace) {
            const placesToKeep = data.nbplace;
            let keptPlaces = [];
    
            // trier les ids de place pour que les places réservées soient conservées
            const sortedPlaceIds = placeIds.sort((a, b) => placeReservedIds.includes(b) - placeReservedIds.includes(a));
            console.log("sortedPlaceIds:", sortedPlaceIds)
            
            // pour chaque placeId
            for (const placeId of sortedPlaceIds) {
                console.log("=====================================")
                console.log("treating place id:", placeId)
                console.log("keptPlaces:", keptPlaces.length)
            
                // si le nombre de places conservées est égal au nombre de places à conserver
                if(placeReservedIds.includes(placeId)){
                    // si la place est réservée, on la compte dans keptPlaces (si elle n'est pas déjà comptée)
                    if(!keptPlaces.includes(placeId)){
                        console.log('cet place est réservé, nous le comptons dans les places gardées', placeId);
                        // on compte la place dans keptPlaces
                        keptPlaces.push(placeId);
                    }
                // sinon si la place n'est pas réservée
                } else {
                    // si le nombre de places conservées est inférieur au nombre de places à conserver
                    if(keptPlaces.length < placesToKeep){
                        // we keep this place
                        console.log("nous pouvons garder cet place car il n'est pas réservé et il y a encore de la place à garder", placeId);
                        // on compte la place dans keptPlaces
                        keptPlaces.push(placeId);
                    // sinon si le nombre de places conservées est supérieur au nombre de places à conserver
                    } else {
                        // on ne conserve pas cette place
                        console.log("nous ne gardons pas cet place", placeId)
                        placesToRemove.push(placeId);
                        console.log("nous poussons placeId pour supprimer:", placeId);
                    }
                }
            }
            
            
        } else if (placeIds.length < data.nbplace) {
            placesToAdd = data.nbplace - placeIds.length;
        }
        console.log("placesToRemove:", placesToRemove);
        console.log("placesToAdd:", placesToAdd);
        return { placesToRemove, placesToAdd };
    }
    

    const submit = (e) => {
        e.preventDefault();
    
        if (data.nbplace < nbplace_reserved) {
            alert(`Nombre de places déjà réservées : ${nbplace_reserved}\nVeuillez choisir un nombre de places supérieur à ce nombre.`);
            return;
        }
        
    
        let { placesToRemove, placesToAdd } = adjustPlaces();
        console.log("placesToRemove in submit:", placesToRemove);
        console.log("placesToAdd in submit:", placesToAdd);

        data.placesToAdd = placesToAdd; // Mettre à jour la valeur de placesToAdd dans data
        data.placesToRemove = placesToRemove; // Mettre à jour la valeur de placesToRemove dans data

        const updatedData = {
            numetage: data.numetage,
            nbplace: data.nbplace,
            placesToAdd: data.placesToAdd,
            placesToRemove: data.placesToRemove,
        };

        console.log("data in submit:", data);
        put(route('etageadmin.update', {id: numetage}), updatedData);
    };
           
    
    
    return (
        <AdminLayout
            auth={props.auth}
            errors={props.errors}
        >
            <Head title="Update place" />

            <div className="py-4">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                   
                <div className="mt-6 max-w-6xl mx-auto bg-slate-200 shadow-lg rounded-lg p-6 dark:bg-slate-900">
                    <h1 class="text-2xl font-semibold dark:text-white">Modifier le nombre de place à cet étage</h1>

                    <form onSubmit={submit}>
                        <div className='mt-5'>
                            <InputLabel htmlFor="nbplace" value="Nombre de places" className='dark:text-white'/>
                            <TextInput
                                id="nbplace"
                                type="number"
                                name="nbplace"
                                value={data.nbplace}
                                className="mt-1 block w-full dark:text-gray-900"
                                autoComplete="nbplace"
                                isFocused={true}
                                onChange={(e) =>
                                    setData("nbplace", e.target.value)
                                }
                            />
                            <InputError message={errors.nbplace} className="mt-2" />
                        </div>
                        <div className='mt-5'>
                            <InputLabel htmlFor="numetage" value="Numéro étage" className='dark:text-white'/>
                            <TextInput
                                id="numetage"
                                type="number"
                                name="numetage"
                                value={data.numetage}
                                className="mt-1 block w-full dark:text-gray-900 bg-gray-300"
                                autoComplete="numetage"
                                disabled={true}
                            />
                            <InputError message={errors.numetage} className="mt-2" />
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