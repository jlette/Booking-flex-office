import AdminLayout from '@/Layouts/AdminLayout';
import { Head } from '@inertiajs/react';

export default function DashboardA(props) {
    return (
        <AdminLayout
            auth={props.auth}
            errors={props.errors}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Dashboard Admin</h2>}
        >
            <Head title="AdminD" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div class="flex flex-wrap">
                        <div class="w-full lg:w-4/12 xl:w-4/12 px-4">
                            <div class="relative flex flex-col min-w-0 break-words bg-white rounded-lg mb-6 xl:mb-0 shadow-lg">
                                <div class="flex-auto p-4">
                                    <div class="flex flex-wrap">
                                    <div class="relative w-full pr-4 max-w-full flex-grow flex-1">
                                        <h5 class="text-blueGray-400 uppercase font-bold text-xs">Traffic</h5>
                                        <span class="font-bold text-xl">350,897</span>
                                    </div>
                                    <div class="relative w-auto pl-4 flex-initial">
                                        <div class="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 shadow-lg rounded-full bg-red-500"><i class="far fa-chart-bar"></i></div>
                                    </div>
                                    </div>
                                    <p class="text-sm text-blueGray-500 mt-4"><span class="text-emerald-500 mr-2"><i class="fas fa-arrow-up"></i> 3.48%</span><span class="whitespace-nowrap">Since last month</span></p>
                                </div>
                            </div>
                        </div>
                        <div class="w-full lg:w-4/12 xl:w-4/12 px-4">
                            <div class="relative flex flex-col min-w-0 break-words bg-white rounded-lg mb-6 xl:mb-0 shadow-lg">
                                <div class="flex-auto p-4">
                                    <div class="flex flex-wrap">
                                    <div class="relative w-full pr-4 max-w-full flex-grow flex-1">
                                        <h5 class="text-blueGray-400 uppercase font-bold text-xs">NEW USERS</h5>
                                        <span class="font-bold text-xl">2,356</span>
                                    </div>
                                    <div class="relative w-auto pl-4 flex-initial">
                                        <div class="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 shadow-lg rounded-full bg-orange-500"><i class="fas fa-chart-pie"></i></div>
                                    </div>
                                    </div>
                                    <p class="text-sm text-blueGray-500 mt-4"><span class="text-red-500 mr-2"><i class="fas fa-arrow-down"></i> 3.48%</span><span class="whitespace-nowrap">Since last week</span></p>
                                </div>
                            </div>
                        </div>                                     
                        <div class="w-full lg:w-4/12 xl:w-4/12 px-4">
                            <div class="relative flex flex-col min-w-0 break-words bg-white rounded-lg mb-6 xl:mb-0 shadow-lg">
                                <div class="flex-auto p-4">
                                    <div class="flex flex-wrap">
                                    <div class="relative w-full pr-4 max-w-full flex-grow flex-1">
                                        <h5 class="text-blueGray-400 uppercase font-bold text-xs">NEW USERS</h5>
                                        <span class="font-bold text-xl">2,356</span>
                                    </div>
                                    <div class="relative w-auto pl-4 flex-initial">
                                        <div class="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 shadow-lg rounded-full bg-orange-500"><i class="fas fa-chart-pie"></i></div>
                                    </div>
                                    </div>
                                    <p class="text-sm text-blueGray-500 mt-4"><span class="text-red-500 mr-2"><i class="fas fa-arrow-down"></i> 3.48%</span><span class="whitespace-nowrap">Since last week</span></p>
                                </div>
                            </div>
                        </div>                   
                    </div>
                    <div class="grid grid-cols-1 lg:grid-cols-2 p-4 gap-4">
                        <div class="relative flex flex-col min-w-0 mb-4 lg:mb-0 break-words bg-gray-300 w-full shadow-lg rounded">
                            <div class="flex-auto p-4">
                                <div class="flex flex-wrap">
                                    <div class="relative w-full pr-4 max-w-full flex-grow flex-1">
                                        <h5 class="text-blueGray-400 uppercase font-bold text-xs">Places</h5>
                                        <span class="font-semibold text-xl text-blueGray-700">350,897</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="relative flex flex-col min-w-0 break-words bg-gray-50 dark:bg-gray-800 w-full shadow-lg rounded">
                            <div class="flex-auto p-4">
                                <div class="flex flex-wrap">
                                    <div class="relative w-full pr-4 max-w-full flex-grow flex-1">
                                        <h5 class="text-blueGray-400 uppercase font-bold text-xs">Places</h5>
                                        <span class="font-semibold text-xl text-blueGray-700">350,897</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AdminLayout>
    );
}
