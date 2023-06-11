import { Head } from '@inertiajs/react';
import { Accordion, AccordionItem } from '@szhsin/react-accordion';
import GuestLayout from '@/Layouts/GuestLayout';
import Register from './Auth/Register';
import Login from './Auth/Login';

export default function Welcome(props) {

    const canResetPassword = props.canResetPassword;
    console.log(canResetPassword);


    return (
        <>
            <Head title="Welcome" />




            <GuestLayout>
                <Accordion >
                    <AccordionItem header="Connexion" className="w-full font-weight-bold sm:max-w-md mt-6 px-6 py-4 bg-white shadow-md overflow-hidden sm:rounded-lg">
                    <Login canResetPassword={canResetPassword} />
                    </AccordionItem>
                    <AccordionItem header="Inscription" className="w-full sm:max-w-md mt-4 px-6 py-4 bg-white shadow-md overflow-hidden sm:rounded-lg">
                        <Register />
                    </AccordionItem>
                </Accordion>



            </GuestLayout>







        </>

    );
}
