import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, usePage } from "@inertiajs/react";
import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Place from "@/components/Place";
import ReservationLayout from "@/Layouts/ReservationLayout";
import { Inertia } from "@inertiajs/inertia";
import SearchBar from "@/components/SearchBar";
import { FaHeart } from 'react-icons/fa';
import { Link } from "@inertiajs/inertia-react";


export default function Reservation(props) {
    // permet d'accéder aux propriétés envoyées à la page du côté
    // serveur depuis le côté client en utilisant le hook React usePage()
    // contient les informations sur les places récupérées
    // depuis la base de données grâce au contrôleur Laravel

    const { places, reservations, searchUser } = usePage().props;
    console.log(searchUser);
    // console.log(places);
    // places.map(place => console.log(place.numplace));

    const [horairerecup, setHoraireRecup] = useState("");
    const [horaire, setHoraire] = useState("");
    const [etagerecup, setEtagerecup] = useState("1");
    const [placerecup, setPlaceRecup] = useState("");
    const [selectedPlaceId, setSelectedPlaceId] = useState(null);
    const [daterecup,setDaterecup] = useState(new Date().toISOString().substring(0, 10));
    const [search, setSearch] = useState('');
    const [searchResults, setSearchResults] = useState([]);


    // permet de définir les données du formulaire
    // et de les initialiser avec des valeurs par défaut
    const [data, setData] = useState({
        date: new Date().toISOString().substring(0, 10),
        h1: false,
        h2: false,
        h3: false,
        h4: false,
        matin: false,
        apresmidi: false,
        journee: false,
        id_place: selectedPlaceId,
    });

    // permet de gérer le changement de l'horaire
    const horaireChange = (event) => {
        const choice = event.target.value;
        setHoraireRecup(choice);
        setHoraire(event.target.value);
        console.log(event.target.value);
        setData((prevState) => ({
            ...prevState,
            h1: choice === 'h1',
            h2: choice === 'h2',
            h3: choice === 'h3',
            h4: choice === 'h4',
            matin: choice === 'matin',
            apresMidi: choice === 'apresMidi',
            journee: choice === 'journee',
          }));
    };

    // Récuperation des étages
    const etages = Array.from(new Set(places.map(place => place.numetage)));
    const etagesTries = etages.sort((a, b) => a - b);

    // permet de gérer le changement de l'étage
    const etageChange = (event) => {
        {
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
            [name]: type === "radio" ? checked : value,
            id_place: selectedPlaceId,
        }));
    };
    const handleChangedate = (e) => {
        setDaterecup(e.target.value);
        console.log(e.target.value);
        const { name, value, type, checked } = e.target;
        setData((prevState) => ({
            ...prevState,
            date: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        Inertia.post("/reservationplace", data);
        console.log(data);
    };

    const onChangeSearch = (value) => {
        setSearch(value);
        const results = searchUser.filter((user) => {
            return user.username.toLowerCase().includes(value.toLowerCase());
        });
        setSearchResults(results);
      };
      
    return (
        <AuthenticatedLayout
            auth={props.auth}
            errors={props.errors}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight dark:text-white">
                    Réservation
                </h2>
            }
        >
            <Head title="Reservation" />

            <div className="max-w-5xl mx-auto flex flex-col rounded-lg shadow-lg overflow-hidden pt-3">
                    <h3 className="text-lg font-medium text-gray-900 dark:text-white">
                        <SearchBar onChangeSearch={onChangeSearch} focus/>
                    </h3>
                {search &&(
                    <div className="bg-white rounded-lg shadow-lg overflow-hidden mt-2">
                        <ul className="divide-y divide-gray-200">
                            {searchResults.map((user) => (
                                <li key={user.id}>
                                <Link href={route('reservationClient', user.iduser)}
                                        className="flex items-center px-4 py-4 hover:bg-gray-700"
                                    >
                                        <div className="flex flex-col">
                                            <p className="text-sm font-medium text-gray-900">
                                                {user.username}
                                            </p>
                                        </div>
                                        {/* <div className="ml-auto">
                                            <FaHeart className="text-red-500" />
                                        </div> */}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
        </div>


            <div className="pt-5 flex flex-wrap">
                <div className="w-full md:w-1/3 px-4 mb-4 ">
                    <div className="flex flex-col rounded-lg shadow-lg overflow-hidden ">
                        <div className="bg-white px-6 py-3 border-b dark:bg-gray-900 dark:border-b dark:border-slate-500">
                            <h3 className="text-lg font-medium text-gray-900 dark:text-white">
                                Réservation
                            </h3>
                        </div>
                        <form onSubmit={handleSubmit}>
                            <div className="flex flex-col py-4 px-6 bg-gray-50 dark:bg-slate-900">
                                <div className="mb-2 text-sm font-medium text-gray-500 uppercase tracking-wide pt-5 dark:text-white">
                                    Date
                                </div>
                                <div className="flex flex-colbg-gray-50">
                                    <input
                                        type="date"
                                        name="date"
                                        value={data.date}
                                        onChange={handleChangedate}
                                        className="w-full py-2 px-3 rounded-lg border border-gray-300 mb-4 shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-transparent dark:bg-slate-800 dark:text-white"
                                        required
                                    />
                                </div>

                                <div className="mb-2 text-sm font-medium text-gray-500 uppercase tracking-wide pt-5 dark:text-white">
                                    Horaires
                                </div>
                                <ul class="items-center w-full text-sm font-medium text-red-900 bg-white border border-gray-200 rounded-lg sm:flex dark:bg-slate-800 ">
                                    <li class="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:text-white">
                                        <div class="flex items-center pl-3">
                                            <input
                                                name="horaire"
                                                id="h1"
                                                type="radio"
                                                onChange={handleChange}
                                                onClick={horaireChange}
                                                value="h1"
                                                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 "
                                            />
                                            <label
                                                for="horaire"
                                                class="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-white"
                                            >
                                                H1 (08:00 - 10:00)
                                            </label>
                                        </div>
                                    </li>
                                    <li class="w-full border-b border-gray-200 sm:border-b-0 sm:border-r ">
                                        <div class="flex items-center pl-3">
                                            <input
                                                name="horaire"
                                                id="h2"
                                                type="radio"
                                                onChange={handleChange}
                                                onClick={horaireChange}
                                                value="h2"
                                                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 "
                                            />
                                            <label
                                                for="apresmidi"
                                                class="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-white"
                                            >
                                                H2 (10:00 - 12:00)
                                            </label>
                                        </div>
                                    </li>
                                </ul>
                                <ul class="items-center w-full text-sm font-medium text-red-900 bg-white border border-gray-200 rounded-lg sm:flex dark:bg-slate-800">
                                    <li class="w-full border-b border-gray-200 sm:border-b-0 sm:border-r ">
                                        <div class="flex items-center pl-3">
                                            <input
                                                name="horaire"
                                                id="h3"
                                                type="radio"
                                                onChange={handleChange}
                                                onClick={horaireChange}
                                                value="h3"
                                                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 "
                                            />
                                            <label
                                                for="horaire"
                                                class="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-white"
                                            >
                                                H3 (13:00 - 15:00)
                                            </label>
                                        </div>
                                    </li>
                                    <li class="w-full border-b border-gray-200 sm:border-b-0 sm:border-r ">
                                        <div className="flex items-center pl-3">
                                            <input
                                                name="horaire"
                                                id="h4"
                                                type="radio"
                                                onChange={handleChange}
                                                onClick={horaireChange}
                                                value="h4"
                                                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 "
                                            />
                                            <label
                                                for="horaire"
                                                class="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-white"
                                            >
                                                H4 (15:00 - 17:00)
                                            </label>
                                        </div>
                                    </li>
                                </ul>
                                <ul class="items-center w-full text-sm font-medium text-red-900 bg-white border border-gray-200 rounded-lg sm:flex dark:bg-slate-800">
                                <li class="w-full  border-b border-gray-200 sm:border-b-0 sm:border-r ">
                                        <div class="flex items-center pl-3 justify-center">
                                            <input
                                                name="horaire"
                                                id="matin"
                                                type="radio"
                                                onChange={handleChange}
                                                onClick={horaireChange}
                                                value="matin"
                                                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 "
                                            />
                                            <label
                                                for="horaire"
                                                class="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-white"
                                            >
                                                Matin
                                            </label>
                                        </div>
                                    </li>
                                <li class="w-full  border-b border-gray-200 sm:border-b-0 sm:border-r ">
                                        <div class="flex items-center pl-3 justify-center">
                                            <input
                                                name="horaire"
                                                id="apresmidi"
                                                type="radio"
                                                onChange={handleChange}
                                                onClick={horaireChange}
                                                value="apresmidi"
                                                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 "
                                            />
                                            <label
                                                for="horaire"
                                                class="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-white"
                                            >
                                                Apresmidi
                                            </label>
                                        </div>
                                    </li>
                                    <li class="w-full  border-b border-gray-200 sm:border-b-0 sm:border-r ">
                                        <div class="flex items-center pl-3 justify-center">
                                            <input
                                                name="horaire"
                                                id="journee"
                                                type="radio"
                                                onChange={handleChange}
                                                onClick={horaireChange}
                                                value="journee"
                                                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 "
                                            />
                                            <label
                                                for="horaire"
                                                class="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-white"
                                            >
                                                Journee
                                            </label>
                                        </div>
                                    </li>
                                </ul>

                                <div className="mb-2 text-sm font-medium text-gray-500 uppercase tracking-wide pt-5 dark:text-white">
                                    Étage
                                </div>
                                <select
                                    className="w-full py-2 px-3 rounded-lg border border-gray-300 mb-4 shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-transparent dark:bg-slate-800 dark:text-white"
                                    id="monselect"
                                    onChange={etageChange}
                                >
                                    {etagesTries.map((etage) => (
                                        <option value={etage.id} key={etage.id}>
                                            {etage}
                                        </option>
                                    ))}
                                </select>
                                <button className="w-full text-center py-2 mt-4 bg-black text-white rounded-md">
                                    Réserver
                                </button>
                            </div>
                        </form>
                    </div>
                </div>      
                
                          

                <div className="w-full md:w-2/3 px-4 mb-4">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900 dark:bg-gray-900 dark:text-white">
                            Choisissez une place
                        </div>
                    </div>
                    <div className="py-4 px-6 w-50 bg-gray-50 dark:bg-gray-900 dark:text-white">
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
                                                        numplace={
                                                            place.numplace
                                                        }
                                                        onPlaceSelect={
                                                            handlePlaceSelect
                                                        }
                                                        colorPlace={
                                                            reservations.some(
                                                                (reservation) =>
                                                                    reservation.id_place ===
                                                                    place.idplace && horaire == "h1" && etagerecup == reservation.numetage && reservation.h1 && daterecup == reservation.date ||  reservation.id_place ===
                                                                    place.idplace && horaire == "h2" && etagerecup == reservation.numetage && reservation.h2 && daterecup == reservation.date ||  reservation.id_place ===
                                                                    place.idplace && horaire == "h3" && etagerecup == reservation.numetage && reservation.h3 && daterecup == reservation.date ||  reservation.id_place ===
                                                                    place.idplace && horaire == "h4" && etagerecup == reservation.numetage && reservation.h4 && daterecup == reservation.date ||  reservation.id_place ===
                                                                    place.idplace && horaire == "matin" && etagerecup == reservation.numetage && reservation.matin  && daterecup == reservation.date||  reservation.id_place ===
                                                                    place.idplace && horaire == "apresMidi" && etagerecup == reservation.numetage && reservation.apresMidi  && daterecup == reservation.date ||  reservation.id_place ===
                                                                    place.idplace && horaire == "journee" && etagerecup == reservation.numetage && reservation.journee && daterecup == reservation.date
                                                            )
                                                                ? "red"
                                                                : ""
                                                        }
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
