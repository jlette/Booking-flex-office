import AdminLayout from "@/Layouts/AdminLayout";
import InputError from "@/Components/InputError";
import TextInput from "@/Components/TextInput";
import PrimaryButton from '@/Components/PrimaryButton';
import { useEffect } from 'react';
import { Head, useForm } from "@inertiajs/react";
import Select from "react-select";
import React, { useState } from "react";



export default function PlaceCreate(props) {
    
    const { data, setData, post, processing, errors, reset } = useForm({
        date_place: '',
        numplace: '',
        horaire_matin: '',
        horaire_apresmidi: '',
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

    const [horairerecup, setHoraireRecup] = useState("");

    // permet de gérer le changement de l'horaire
    const horaireChange = (event) => {
        const choice = event.target.value;
        setHoraireRecup(choice);
    };

    const handleJourneeClick = (event) => {
        const choice = event.target.value;
        setHoraireRecup(choice);
        setData((prevState) => ({
            ...prevState,
            horaire_matin: true,
            horaire_apresmidi: true,
        }));
    }


    const onHandleChange = (event) => {
        setData(event.target.name, event.target.type === 'checkbox' ? event.target.checked : event.target.value);
    };

    const submit = (e) => {
        e.preventDefault();
        if (!data.horaire_matin && !data.horaire_apresmidi) {
            document.getElementById("message-horaire").style.display = "block";
            return;
        }

        post(route('placeadmin.store'), data);
        console.log('data:', data);
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
                                <div class="w-full px-3">
                                    <label
                                        class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                        for="date_place"
                                    >
                                        Date place
                                    </label>
                                    <input
                                        class="appearance-none block w-full text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                        id="date"
                                        name="date_place"
                                        type="date"
                                        value={data.date_place}
                                        autoComplete="date"
                                        onChange={onHandleChange}
                                    />
                                    <InputError message={errors.date_place} className="mt-2" />
                                </div>
                                <div class="mt-2 w-full md:w-1/2 px-3 mb-6 md:mb-0">
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
                                <div class="mt-3 w-full md:w-1/2 px-3">
                                    <label
                                        class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                        for="numetage"
                                    >
                                        Numéro d'étage
                                    </label>
                                    <Select options={etage} onChange={onEtageChange}/>

                                    <InputError message={errors.numetage} className="mt-2" />
                                </div>
                                 <div className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 pt-5">
                                    Horaires
                                </div>
                                <ul class="w-full text-sm font-medium text-red-900 bg-white border border-gray-200 rounded-lg sm:flex">
                                    <li class="w-full border-b border-gray-200 sm:border-b-0 sm:border-r ">
                                        <div class="flex items-center pl-3">
                                            <input 
                                            id="horaire_matin" 
                                            name="horaire_matin"
                                            type="checkbox" 
                                            checked={data.horaire_matin}
                                            onChange={onHandleChange} 
                                            onClick={horaireChange}
                                            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 "/>
                                            <label for="horaire_matin" class="w-full py-3 ml-2 text-sm font-medium text-gray-900">Matin</label>
                                        </div>
                                    </li>
                                    <li class="w-full border-b border-gray-200 sm:border-b-0 sm:border-r ">
                                        <div class="flex items-center pl-3">
                                            <input id="apresmidi"
                                            name="horaire_apresmidi" 
                                            type="checkbox" 
                                            checked={data.horaire_apresmidi}
                                            onChange={onHandleChange}
                                            onClick={horaireChange}
                                            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 "/>
                                            <label for="horaire_apresmidi" class="w-full py-3 ml-2 text-sm font-medium text-gray-900">Après-midi</label>
                                        </div>
                                    </li>
                                    <li class="w-full dark:border-gray-900">
                                        <div class="flex items-center pl-3">
                                            <input id="journee" 
                                            type="checkbox" 
                                            value="journee" 
                                            onClick={handleJourneeClick}
                                            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"/>
                                            <label for="journee" class="w-full py-3 ml-2 text-sm font-medium text-gray-900">Journée</label>
                                        </div>
                                    </li>
                                </ul>
                                <div id="message-horaire" style={{display: 'none'}} className="text-sm text-red-600 mt-1">Veuillez sélectionner une horaire</div>
                                
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
