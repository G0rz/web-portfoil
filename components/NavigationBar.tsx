"use client"

import {
    Link,
    Navbar,
    NavbarBrand,
    NavbarContent,
    NavbarItem,
    NavbarMenu,
    NavbarMenuItem,
    NavbarMenuToggle
} from "@heroui/react";
import {useEffect, useState} from "react";
import {usePathname} from 'next/navigation'
import {Logo} from "@/components/icons/Logo";
import SocialLinks from "@/components/SocialLinks";
import {siteConfig} from "@/config/site";

export default function NavigationBar() {
    const pathname = usePathname();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        if (isMenuOpen) {
            setIsMenuOpen(false);
        }
    }, [isMenuOpen, pathname]);

    return (
        <Navbar shouldHideOnScroll={true} isMenuOpen={isMenuOpen} onMenuOpenChange={setIsMenuOpen}>
            <NavbarContent>
                <NavbarMenuToggle
                    aria-label={isMenuOpen ? "Cerrar menú" : "Abrir menú"}
                    className="sm:hidden"
                />
                <NavbarBrand className="md:block hidden">
                    <Logo fill={"currentColor"} size={32}/>
                </NavbarBrand>
            </NavbarContent>
            <NavbarContent className="hidden sm:flex gap-4" justify="end">
                {siteConfig.menuItems.map((menuItem) => (
                    <NavbarItem key={menuItem.name} isActive={pathname === menuItem.url}>
                        <Link href={menuItem.url} aria-current="page"
                              color={pathname === menuItem.url ? "primary" : "foreground"}>
                            {menuItem.name}
                        </Link>
                    </NavbarItem>
                ))}
            </NavbarContent>
            <NavbarContent justify="center">
                <SocialLinks/>
            </NavbarContent>
            <NavbarMenu>
                {siteConfig.menuItems.map((menuItem, index) => (
                    <NavbarMenuItem key={`${menuItem.name}-${index}`} isActive={pathname === menuItem.url}>
                        <Link
                            className="w-full"
                            href={menuItem.url}
                            aria-current={pathname === menuItem.url ? "page" : undefined}
                            color={pathname === menuItem.url ? "primary" : "foreground"}
                            size="lg"
                        >
                            {menuItem.name}
                        </Link>
                    </NavbarMenuItem>
                ))}
            </NavbarMenu>
        </Navbar>
    );
}