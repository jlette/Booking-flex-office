import { Head } from '@inertiajs/react';
import { Accordion, AccordionItem } from '@szhsin/react-accordion';
import GuestLayout from '@/Layouts/GuestLayout';
import Register from './Auth/Register';
import Login from './Auth/Login';

export default function Welcome(props) {
    return (
        <>
            <Head title="Welcome" />




                <GuestLayout>

                    <Accordion >
                        <AccordionItem header="Connexion" >
                            <Login />
                        </AccordionItem>

                        <AccordionItem header="Inscription">
                            <Register />
                        </AccordionItem>


                    </Accordion>


                </GuestLayout>





        

        </>

    );
}
