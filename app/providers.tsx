'use client'

import {ThemeProvider as NextThemesProvider} from "next-themes";
import {HeroUIProvider} from '@heroui/react'
import {ToastProvider} from "@heroui/toast";
import {useEffect} from "react";

export function Providers({children}: { children: React.ReactNode }) {

    useEffect(() => {
        if ('serviceWorker' in navigator) {
            window.addEventListener('load', () => {
                navigator.serviceWorker.register('/service_worker.js').then(registration => {
                    console.log('SW registered: ', registration);
                }).catch(registrationError => {
                    console.log('SW registration failed: ', registrationError);
                });
            });
        }
    }, []);

    return (
        <HeroUIProvider>
            <NextThemesProvider attribute="class" enableSystem={true}>
            <ToastProvider />
            {children}
            </NextThemesProvider>
        </HeroUIProvider>
    )
}