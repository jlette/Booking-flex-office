import { Head } from '@inertiajs/react';
import { Accordion, AccordionItem } from '@szhsin/react-accordion';
import GuestLayout from '@/Layouts/GuestLayout';
import Register from './Auth/Register';
import Login from './Auth/Login';

export default function Welcome(props) {
    return (
        <>
            <Head title="Welcome" />




<<<<<<< HEAD
            <GuestLayout>
                <Accordion >
                    <AccordionItem header="Connexion" className="w-full font-weight-bold sm:max-w-md mt-6 px-6 py-4 bg-white shadow-md overflow-hidden sm:rounded-lg">
                        <Login />
                    </AccordionItem>
                    <AccordionItem header="Inscription" className="w-full sm:max-w-md mt-4 px-6 py-4 bg-white shadow-md overflow-hidden sm:rounded-lg">
                        <Register />
                    </AccordionItem>
                </Accordion>



            </GuestLayout>

=======
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
>>>>>>> 296000b2fe9975e0f0cad2a30555030f9a6dad80





<<<<<<< HEAD
=======
        
>>>>>>> 296000b2fe9975e0f0cad2a30555030f9a6dad80

        </>

    );
}
