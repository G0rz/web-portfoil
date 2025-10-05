import type {Metadata} from 'next';
import React from "react";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
    title: 'Contacto',
    description: 'Ponte en contacto. Estoy disponible para oportunidades freelance y colaboraciones.',
    alternates: {
        canonical: '/contact',
    },
};

export default function Contact() {

    return (
        <div className={'sm:mx-auto w-full sm:w-2/4 min-h-screen px-8'}>
            <h1 className={"text-4xl font-extrabold w-full mt-8"}>Hablemos</h1>
            <p className={'my-4'}>
                ¿Tienes un proyecto en mente o simplemente quieres saludar? No dudes en ponerte en contacto.
                Siempre estoy abierto a nuevas oportunidades y colaboraciones.
            </p>
            <ContactForm/>
        </div>
    );
}
