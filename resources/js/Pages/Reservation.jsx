import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, usePage } from "@inertiajs/react";
import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Place from "@/components/Place";
import ReservationLayout from "@/Layouts/ReservationLayout";
import { Inertia } from "@inertiajs/inertia";

export default function Reservation(props) {
    // permet d'accéder aux propriétés envoyées à la page du côté
    // serveur depuis le côté client en utilisant le hook React usePage()
    // contient les informations sur les places récupérées
    // depuis la base de données grâce au contrôleur Laravel

    const { places, reservations } = usePage().props;
    // console.log(places);
    // places.map(place => console.log(place.numplace));

    const [horairerecup, setHoraireRecup] = useState("");
    const [etagerecup, setEtagerecup] = useState("1");
    const [placerecup, setPlaceRecup] = useState("");
    const [selectedPlaceId, setSelectedPlaceId] = useState(null);

    // permet de définir les données du formulaire
    // et de les initialiser avec des valeurs par défaut
    const [data, setData] = useState({
        date: new Date().toISOString().substring(0, 10),
        matin: false,
        apresmidi: false,
        id_place: selectedPlaceId,
    });


    // permet de gérer le changement de l'horaire
    const horaireChange = (event) => {
        const choice = event.target.value;
        setHoraireRecup(choice);
    };

    // permet de gérer le clic sur le bouton de la journée
    // et de mettre à jour les valeurs de matin et apresmidi
    const handleJourneeClick = (event) => {
        const choice = event.target.value;
        setHoraireRecup(choice);
        setData((prevState) => ({
            ...prevState,
            matin: true,
            apresmidi: true
        }));
    }


    // permet de gérer le changement de l'étage
    const etageChange = (event) => {{
            const choice = event.target.value;
            setEtagerecup(choice);
        }
    };
    
    // permet de gérer la sélection d'une place
    const handlePlaceSelect = (idPlace) => {
        setSelectedPlaceId(idPlace);
        setData((prevState) => ({
          ...prevState,
          id_place: idPlace,
        }));
      };
      

    // méthode prevState pour maintenir les anciennes valeurs de données 
    // inchangées et mettre à jour seulement la valeur qui a été modifiée.
    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setData((prevState) => ({
            ...prevState,
            [name]: type === 'checkbox' ? checked : value,
            id_place: selectedPlaceId,
        }));
        };
    

    const handleSubmit = (e) => {
        e.preventDefault();
        Inertia.post("/reservationplace", data);
        console.log(data);
    };


    return (
        <AuthenticatedLayout
            auth={props.auth}
            errors={props.errors}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Réservation
                </h2>
            }
        >
            <Head title="Reservation" />

            <div className="pt-5 flex flex-wrap">
                <div className="w-full md:w-1/3 px-4 mb-4">
                    <div className="flex flex-col rounded-lg shadow-lg overflow-hidden">
                        <div className="bg-white px-6 py-3 border-b">
                            <h3 className="text-lg font-medium text-gray-900">
                                Réservation
                            </h3>
                            <h2>L'id de la place est {placerecup}</h2>
                        </div>
                        <form onSubmit={handleSubmit}>
                            <div className="flex flex-col py-4 px-6 bg-gray-50">
                                <div className="mb-2 text-sm font-medium text-gray-500 uppercase tracking-wide pt-5">
                                    Date
                                </div>
                                <div className="flex flex-colbg-gray-50">
                                    <input
                                        type="date" 
                                        name="date" 
                                        value={data.date} 
                                        onChange={handleChange} 
                                        className="w-full py-2 px-3 rounded-lg border border-gray-300 mb-4 shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-transparent"
                                        required
                                    />
                                </div>

                                <div className="mb-2 text-sm font-medium text-gray-500 uppercase tracking-wide pt-5">
                                    Horaires
                                </div>
                                <ul class="items-center w-full text-sm font-medium text-red-900 bg-white border border-gray-200 rounded-lg sm:flex">
                                    <li class="w-full border-b border-gray-200 sm:border-b-0 sm:border-r ">
                                        <div class="flex items-center pl-3">
                                            <input 
                                            id="matin" 
                                            name="matin"
                                            type="checkbox" 
                                            checked={data.matin}
                                            onChange={handleChange} 
                                            onClick={horaireChange}
                                            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 "/>
                                            <label for="matin" class="w-full py-3 ml-2 text-sm font-medium text-gray-900">Matin</label>
                                        </div>
                                    </li>
                                    <li class="w-full border-b border-gray-200 sm:border-b-0 sm:border-r ">
                                        <div class="flex items-center pl-3">
                                            <input id="apresmidi"
                                            name="apresmidi" 
                                            type="checkbox" 
                                            checked={data.apresmidi}
                                            onChange={handleChange}
                                            onClick={horaireChange}
                                            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 "/>
                                            <label for="apresmidi" class="w-full py-3 ml-2 text-sm font-medium text-gray-900">Après-midi</label>
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

                                <div className="mb-2 text-sm font-medium text-gray-500 uppercase tracking-wide pt-5">
                                    Étage
                                </div>
                                <select
                                    className="w-full py-2 px-3 rounded-lg border border-gray-300 mb-4 shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-transparent"
                                    id="monselect"
                                    onChange={etageChange}
                                >
                                    <option value="1">Étage 1</option>
                                    <option value="2">Étage 2</option>
                                    <option value="3">Étage 3</option>
                                </select>
                                <button className="w-full text-center py-2 mt-4 bg-black text-white rounded-md hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-opacity-75">
                                    Réserver
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="w-full md:w-2/3 px-4 mb-4">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">Choisissez une place</div>
                    </div>
                    <div className="py-4 px-6 w-50 bg-gray-50">
                        {horairerecup == "" ? (
                            <div className="w-50 h-50 bg-success ">
                                <div
                                    className="container border border-dark flex justify-center"
                                    style={{ padding: 25 }}
                                >
                                    <p>
                                        Veuillez choisir votre tranche horaire
                                    </p>
                                </div>
                            </div>
                        ) : (
                            <ReservationLayout>
                                <div>
                                    {places.map((place, index) => (
                                        <div key={index}>
                                            {etagerecup == place.numetage ? (
                                                <>
                                                    <Place
                                                        key={place.idplace} 
                                                        modifyparentstatevalue={
                                                            setPlaceRecup
                                                        }
                                                        placeid={place.idplace}
                                                        numplace={place.numplace}
                                                        onPlaceSelect={handlePlaceSelect}
                                                        colorPlace={reservations.map(
                                                            (reservation) =>
                                                                reservation.id_place ===
                                                                place.idplace ? "grey" : ""
                                                        )}
                                                    />
                                                </>
                                            ) : (
                                                ""
                                            )}
                                        </div>
                                    ))}
                                </div>
                            </ReservationLayout>
                        )}
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
