'use client'
import {FormEvent, useState} from 'react';
import {addToast, Button, Form, Input} from "@heroui/react";
import {Textarea} from "@heroui/input";
import confetti from "canvas-confetti";
import emailjs from "@emailjs/browser";

const serviceID = process.env.NEXT_PUBLIC_SERVICE_ID;
const templateID = process.env.NEXT_PUBLIC_TEMPLATE_ID;
const publicKey = process.env.NEXT_PUBLIC_PUBLIC_KEY;

const ContactForm = () => {
    const [loading, setLoading] = useState(false)
    const [userInput, setUserInput] = useState({
        name: "",
        email: "",
        subject: "",
        message: ""
    });

    const handleConfetti = () => {
        return confetti({
            angle: Math.random() * (125 - 55) + 55,
            spread: Math.random() * (70 - 50) + 50,
            particleCount: Math.random() * (100 - 50) + 50,
            origin: {y: 0.6},
        });
    };

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        setLoading(!loading)
        if (!serviceID || !templateID || !publicKey) {
            return addToast({
                title: "Ocurrió un problema ⚠",
                description: "Intenta contactarme por algún otro medio...",
                color: "danger",
            });
        }

        try {
            emailjs.send(serviceID, templateID, userInput, publicKey)
                .then(() => {
                    setUserInput({
                        name: "",
                        email: "",
                        subject: "",
                        message: ""
                    })
                    setLoading(!loading)
                    handleConfetti();
                    addToast({
                        title: "¡Formulario enviado con éxito!",
                        description: "Gracias por contactarme, te responderé lo antes posible.",
                        color: "success",
                    });
                });
        } catch (error) {
            console.log(error)
            addToast({
                title: "Ocurrió un problema 💀",
                description: "Intenta contactarme por algún otro medio...",
                color: "danger",
            });
        }
    };


    return (
        <Form className="md:w-3/4 w-full my-4 mx-auto" onSubmit={handleSubmit}>
            <Input
                isRequired
                autoComplete="off"
                errorMessage="Por favor ingresa un nombre."
                label="Nombre"
                labelPlacement="outside"
                name="name"
                type="text"
                variant={"flat"}
                onChange={(e) => setUserInput({...userInput, [e.target.name]: e.target.value})}
                value={userInput.name}
            />
            <Input
                autoComplete="off"
                errorMessage="Por favor ingresa un email valido."
                isRequired={true}
                label="Email"
                labelPlacement="outside"
                name="email"
                type="email"
                value={userInput.email}
                variant={"flat"}
                onChange={(e) => setUserInput({...userInput, [e.target.name]: e.target.value.trim()})}
            />
            <Input
                isRequired
                autoComplete="off"
                errorMessage="Por favor ingresa el asunto a tratar."
                label="Asunto"
                labelPlacement="outside"
                name="subject"
                type="text"
                variant={"flat"}
                onChange={(e) => setUserInput({...userInput, [e.target.name]: e.target.value})}
                value={userInput.subject}
            />
            <Textarea
                isRequired
                autoComplete="off"
                errorMessage="Esto no puede quedarse asi."
                label="Mensaje"
                labelPlacement="inside"
                name="message"
                type="text"
                variant={"flat"}
                value={userInput.message}
                onChange={(e) => setUserInput({...userInput, [e.target.name]: e.target.value})}
            />
            <Button className={'w-full my-4'} type="submit" color={"primary"} variant="solid" size={'lg'}
                    isLoading={loading}>
                {loading ? "Enviando..." : "Enviar"}
            </Button>
        </Form>
    );
};

export default ContactForm;