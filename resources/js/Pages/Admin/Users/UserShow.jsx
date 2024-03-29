import AdminLayout from '@/Layouts/AdminLayout';
import { Head, Link, useForm, usePage } from '@inertiajs/react';
import React, { useEffect, useState } from "react";


export default function UserShow(props) {

    const { users, reservations, } = usePage().props;

    const { data, setData, put, processing, errors } = useForm({
        name: users.name,
        username: users.username,
        email: users.email,
        fonction: users.fonction,

    });

    // console.log(users.name);

    

    return (
        <AdminLayout
            auth={props.auth}
            errors={props.errors}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Gérer les utilisateurs</h2>}
        >
            <Head title="Update user" />

            <div className="py-4">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className='flex justify-between'>
                        <Link href={route('useradmin.index')} class="px-3 py-2 text-white font-semibold bg-sky-600 hover:bg-sky-700 rounded">Retour vers user</Link>
                    </div>
                   
                    <div className="mt-6 max-w-6xl mx-auto bg-slate-200 shadow-lg rounded-lg p-6 dark:bg-slate-900">
                        <h1 class="text-2xl font-semibold text-gray-800 dark:text-white">Fiche client de <span className='capitalize'>{data.username}</span></h1>
                        <div class="bg-gray-300 p-6 rounded-lg shadow-md mt-4 dark:bg-slate-800">
                            <div class="flex flex-col md:flex-row md:justify-between mb-4">
                                <div class="flex-1">
                                    <p class="text-gray-600 dark:text-stone-400">Nom :</p>
                                    <p class="font-semibold">{data.name}</p>
                                </div>
                                <div class="flex-1">
                                    <p class="text-gray-600 dark:text-stone-400">Prénom :</p>
                                    <p class="font-semibold">{data.username}</p>
                                </div>
                            </div>
                            <div class="flex flex-col md:flex-row md:justify-between mb-4">
                                <div class="flex-1">
                                    <p class="text-gray-600 dark:text-stone-400">Email :</p>
                                    <p class="font-semibold">{data.email}</p>
                                </div>
                                <div class="flex-1">
                                    <p class="text-gray-600 dark:text-stone-400">Fonction :</p>
                                    <p class="font-semibold">{data.fonction}</p>
                                </div>
                            </div>
                            <div class="mb-4">
                                <h3 class="text-lg font-semibold dark:text-stone-400 mb-2">Réservations:</h3>
                                {reservations.length > 0 ? (
                                    <div class="flex flex-wrap">
                                    <div class="w-1/2 pr-4">
                                        <ul class="list-disc list-inside">
                                        {reservations
                                            .filter((reservation) => reservation.numplace % 2 !== 0)
                                            .map((reservation) => (
                                            <li>
                                                {new Date(reservation.date).toLocaleString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' })} -
                                                {reservation.matin && reservation.apresmidi ? " En Journée" : reservation.matin ? " Le Matin" : " En Après-midi"} - 
                                                À la place {reservation.numplace} - À l'étage {reservation.numetage}
                                            </li>
                                            ))
                                        }
                                        </ul>
                                    </div>
                                    <div class="w-1/2 pl-4">
                                        <ul class="list-disc list-inside">
                                        {reservations
                                            .filter((reservation) => reservation.numplace % 2 === 0)
                                            .map((reservation) => (
                                            <li>
                                                {new Date(reservation.date).toLocaleString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' })} -
                                                {reservation.h1 ? "08:00 - 10:00" 
                                                    : reservation.h2 ? "10:00 - 12:00" 
                                                    : reservation.h3 ? "13:00 - 15:00" 
                                                    : reservation.h4 ? "15:00 - 17:00" 
                                                    : reservation.journee ? "Journée" 
                                                    : reservation.matin ? "Matin" 
                                                    : reservation.apresmidi ? "Après-midi" 
                                                    :""} - 
                                                À la place {reservation.numplace} - À l'étage {reservation.numetage}
                                            </li>
                                            ))
                                        }
                                        </ul>
                                    </div>
                                    </div>
                                ) : (
                                    <p>Aucune réservation</p>
                                )}
                                </div>


                        </div>
                    </div>
                </div>
            </div>
        </AdminLayout>
    );
}
