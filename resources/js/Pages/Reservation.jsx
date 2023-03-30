import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';

export default function Reservation(props) {
    return (
        <AuthenticatedLayout
            auth={props.auth}
            errors={props.errors}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Réservation</h2>}
        >
            <Head title="Reservation" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">Page de Reservation</div>
                    </div>
                </div>
            </div>

            <div className="pt-5 flex flex-wrap">
                <div className="w-full md:w-1/3 px-4 mb-4">
                    <div className="flex flex-col rounded-lg shadow-lg overflow-hidden">
                        <div className="bg-white px-6 py-3 border-b">
                            <h3 className="text-lg font-medium text-gray-900">Réservation</h3>
                        </div>

                        <div className="flex flex-col py-4 px-6 bg-gray-50">
                            <div className="mb-2 text-sm font-medium text-gray-500 uppercase tracking-wide">Horaires</div>
                            <div className="flex">
                                <button className="w-1/3 flex-1 text-center py-2 rounded-l-md border border-gray-300 bg-white text-gray-700 hover:bg-gray-50 focus:bg-black focus:text-white">Matin</button>
                                <button className="w-1/3 flex-1 text-center py-2 border border-gray-300 bg-white text-gray-700 hover:bg-gray-50 focus:bg-black focus:text-white">Après-midi</button>
                                <button className="w-1/3 flex-1 text-center py-2 rounded-r-md border border-gray-300 bg-white text-gray-700 hover:bg-gray-50 focus:bg-black focus:text-white">Journée</button>
                            </div>
                            <div className="mb-2 text-sm font-medium text-gray-500 uppercase tracking-wide pt-5">Bâtiment</div>
                            <select className="w-full py-2 px-3 rounded-lg border border-gray-300 mb-4 shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-transparent">
                                <option value="batiment1">Bâtiment 1</option>
                                <option value="batiment2">Bâtiment 2</option>
                                <option value="batiment3">Bâtiment 3</option>
                            </select>
                            <div className="mb-2 text-sm font-medium text-gray-500 uppercase tracking-wide pt-5">Étage</div>
                            <select className="w-full py-2 px-3 rounded-lg border border-gray-300 mb-4 shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-transparent">
                                <option value="etage1">Étage 1</option>
                                <option value="etage2">Étage 2</option>
                                <option value="etage3">Étage 3</option>
                            </select>
                            <div className="mb-2 text-sm font-medium text-gray-500 uppercase tracking-wide pt-5">Bureau</div>
                            <select className="w-full py-2 px-3 rounded-lg border border-gray-300 mb-4 shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-transparent">
                                <option value="bureau1">Bureau 1</option>
                                <option value="bureau2">Bureau 2</option>
                                <option value="bureau3">Bureau 3</option>
                            </select>
                            <button className="w-full text-center py-2 mt-4 bg-black text-white rounded-md hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-opacity-75">Réserver</button>
                        </div>

                    </div>
                </div>



                <div className="w-full md:w-2/3 px-4 mb-4">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">Filter</div>
                    </div>

                    
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        
                    </div>
                </div>
            </div>








        </AuthenticatedLayout>
    );
}