import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, usePage } from "@inertiajs/react";

export default function ReservationCollegue(props) {
    const { resultatSearch } = usePage().props;

    return (
        <AuthenticatedLayout
            auth={props.auth}
            errors={props.errors}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Resultat de la recherche:
                </h2>
            }
        >
            <Head title="Resultat de la recherche" />

            <div className="py-12">
            <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
  {resultatSearch.length > 0 ? (
    <div>
      <div class="w-full max-w-4xl mx-auto p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
        <div class="flex items-center justify-between mb-4">
          <h5 class="text-xl font-bold leading-none text-gray-900 dark:text-white">
            {resultatSearch.length} {resultatSearch.length > 1 ? "réservations" : "réservation"}   
            {resultatSearch.length > 1 ? " trouvés" : " trouvé"}  
            {" pour " + resultatSearch[0].username}
            {resultatSearch.length > 0 ? " :" : ""}
            {}
          </h5>
        </div>
        <div class="flow-root">
          <ul role="list" class="divide-y divide-gray-200 dark:divide-gray-700">
            {resultatSearch.map((reservation) => (
              <li class="py-3 sm:py-4">
                <div class="flex items-center space-x-4">
                  <div class="flex-1 min-w-0">
                    <p class="text-sm font-medium text-gray-900 truncate dark:text-white">
                    {reservation.matin && reservation.apresmidi ? "Journée" : reservation.matin ? "Matin" : "Après-midi"}
                    </p>
                    <p class="text-sm text-gray-500 truncate dark:text-gray-400">
                      {new Date(reservation.date).toLocaleString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' })}
                    </p>
                  </div>
                  <div class="grid grid-rows-2 gap-2">
                  <div class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                     Place {reservation.numplace}
                  </div>
                  <span
                        class={`${
                        reservation.numetage === 2
                            ? 'bg-green-100 text-green-800 dark:bg-green-800 dark:text-green-100'
                            : 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300'
                        } text-sm font-medium mr-2 px-2.5 py-0.5 rounded`}
                    >
                         Etage {reservation.numetage}
                    </span>
                </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  ) : (
    <div>
      <p className="p-5 bg-gray-900 text-white">
        Il n'y a aucune réservation.
      </p>
    </div>
  )}
</div>


            </div>
        </AuthenticatedLayout>
    );
}
