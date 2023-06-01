import AdminLayout from '@/Layouts/AdminLayout';
import { Head, Link, useForm, usePage } from '@inertiajs/react';
import React, { useEffect, useState } from "react";


import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';


export default function UserEdit(props) {

    const { users } = usePage().props;

    const { data, setData, put, processing, errors } = useForm({
        name: users.name,
        username: users.username,
        email: users.email,

    });

    console.log(users.name);

        
    const submit = (e) => {
        e.preventDefault();
        put(route('useradmin.update', users.iduser));
    };
    

    return (
        <AdminLayout
            auth={props.auth}
            errors={props.errors}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Gérer les utilisateurs</h2>}
        >
            <Head title="Update user" />

            <div className="py-4">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">                   
                    <div className="mt-6 max-w-6xl mx-auto bg-slate-100 shadow-lg rounded-lg p-6 dark:bg-slate-900">
                    <h1 class="text-2xl font-semibold text-gray-800 dark:text-white">Mettre à jour l'utilisateur</h1>

                    <form onSubmit={submit}>
                        <div className='mt-5'>
                            <InputLabel htmlFor="name" value="Nom" className='dark:text-white'/>
                            <TextInput
                                id="name"
                                type="text"
                                name="name"
                                value={data.name}
                                className="mt-1 block w-full dark:text-gray-900"
                                autoComplete="name"
                                isFocused={true}
                                onChange={(e) =>
                                    setData("name", e.target.value)
                                }
                            />
                            <InputError message={errors.name} className="mt-2" />
                        </div>
                        <div className='mt-5'>
                            <InputLabel htmlFor="username" value="Prénom" className='dark:text-white'/>
                            <TextInput
                                id="name"
                                type="text"
                                name="username"
                                value={data.username}
                                className="mt-1 block w-full dark:text-gray-900"
                                autoComplete="username"
                                onChange={(e) =>
                                    setData("username", e.target.value)
                                }
                            />
                            <InputError message={errors.username} className="mt-2" />
                        </div>

                        <div className='mt-5'>
                            <InputLabel htmlFor="email" value="Email" className='dark:text-white'/>
                            <TextInput
                                id="email"
                                type="text"
                                name="email"
                                value={data.email}
                                className="mt-1 block w-full dark:text-gray-900"
                                autoComplete="email"
                                onChange={(e) =>
                                    setData("email", e.target.value)
                                }
                            />
                            <InputError message={errors.email} className="mt-2" />
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
