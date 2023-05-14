import { useEffect } from 'react';
import GuestLayout from '@/Layouts/GuestLayout';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import { Head, Link, useForm } from '@inertiajs/react';
import Select from 'react-select';

export default function Register() {
    const fonction = [
        { label: "Architecte logiciel", value: "architecte logiciel" },
        { label: "Artiste", value: "artiste" },
        { label: "Avocat(e)", value: "avocat" },
        { label: "Chef de projet", value: "chef de projet" },
        { label: "Comptable", value: "comptable" },
        { label: "Développeur(se)", value: "developpeur" },
        { label: "Designer graphique", value: "designer graphique" },
        { label: "Enseignant(e)", value: "enseignant" },
        { label: "Ingénieur(e) en génie civil", value: "ingenieur genie civil" },
        { label: "Ingénieur(e) en informatique", value: "ingenieur informatique" },
        { label: "Infirmier(ère)", value: "infirmier" },
        { label: "Médecin", value: "medecin" },
        { label: "Photographe", value: "photographe" },
        { label: "Autre(s)", value: "autres" },
    ];

    // data: qui représente l'état actuel des champs du formulaire.
    // setData: fonction pour mettre à jour l'état des champs du formulaire.
    // post: fonction pour envoyer une requête HTTP POST pour soumettre les données du formulaire.
    // processing: variable booléenne qui est true lorsque la soumission du formulaire est en cours.
    // errors: contient les erreurs de validation des champs du formulaire.
    // reset: fonction pour réinitialiser les valeurs des champs du formulaire à leurs valeurs initiales.

    const { data, setData, post, processing, errors, reset } = useForm({
        name: '',
        username: '',
        fonction: '',
        email: '',
        password: '',
        password_confirmation: '',

    });


    // mettre à jour la valeur de la fonction sélectionnée dans l'objet de données de l'application chaque fois que l'utilisateur sélectionne une nouvelle option dans une liste déroulante
    // permet de stocker la fonction sélectionnée dans l'objet de données
    const onFonctionChange = (selectedOption) => {
        setData('fonction', selectedOption.label);
    };

    //  ce code permet de nettoyer les valeurs de deux champs de mot de passe 
    //  lorsqu'un composant est démonté ou que les dépendances du hook changent.
    useEffect(() => {
        return () => {
            reset('password', 'password_confirmation');
        };
    }, []);

    // cette fonction est utilisée pour mettre à jour les données de l'application 
    // en fonction de l'entrée de l'utilisateur, 
    // en prenant en compte différents types d'entrées (valeur de saisie ou coche de case à cocher).
    const handleOnChange = (event) => {
        setData(event.target.name, event.target.type === 'checkbox' ? event.target.checked : event.target.value);
    };

    const submit = (e) => {
        e.preventDefault();

        post(route('register'));
    };

    return (

        <form onSubmit={submit}>
            <div className="grid grid-cols-2 gap-4 mt-2">
                <div className="col-span-1">
                    <InputLabel htmlFor="name" value="Nom" />

                    <TextInput
                        id="name"
                        name="name"
                        value={data.name}
                        className="mt-1 block w-full"
                        autoComplete="name"
                        isFocused={true}
                        onChange={handleOnChange}
                        required
                    />

                    <InputError message={errors.name} className="mt-2" />
                </div>

                <div className="col-span-1">
                    <InputLabel htmlFor="username" value="Prénom" />

                    <TextInput
                        id="username"
                        name="username"
                        value={data.username}
                        className="mt-1 block w-full"
                        autoComplete="username1"
                        onChange={handleOnChange}
                        required
                    />
                    <InputError message={errors.username} className="mt-2" />
                </div>
            </div>


            <div className="mt-4">
                <InputLabel htmFor="fonction" value="Fonction" />
                <Select options={fonction} onChange={onFonctionChange} />
                <InputError message={errors.fonction} className="mt-2" />
            </div>

            <div className="mt-4">
                <InputLabel htmlFor="email" value="Email" />

                <TextInput
                    id="email"
                    type="email"
                    name="email"
                    value={data.email}
                    className="mt-1 block w-full"
                    autoComplete="username"
                    onChange={handleOnChange}
                    required
                />

                <InputError message={errors.email} className="mt-2" />
            </div>

            <div className="mt-4">
                <InputLabel htmlFor="password" value="Mot de passe" />

                <TextInput
                    id="password"
                    type="password"
                    name="password"
                    value={data.password}
                    className="mt-1 block w-full"
                    autoComplete="new-password"
                    onChange={handleOnChange}
                    required
                />

                <InputError message={errors.password} className="mt-2" />
            </div>

            <div className="mt-4">
                <InputLabel htmlFor="password_confirmation" value="Confirmez le mot de passe" />

                <TextInput
                    id="password_confirmation"
                    type="password"
                    name="password_confirmation"
                    value={data.password_confirmation}
                    className="mt-1 block w-full"
                    autoComplete="new-password"
                    onChange={handleOnChange}
                    required
                />

                <InputError message={errors.password_confirmation} className="mt-2" />
            </div>

            <div className="flex items-center justify-end mt-4">


                <PrimaryButton className="ml-4" disabled={processing}>
                    S'inscrire
                </PrimaryButton>
            </div>
        </form>

    );
}
