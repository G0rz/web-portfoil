import {Button, Link, NavbarItem} from "@heroui/react";
import {GithubIcon} from "@/components/icons/GithubIcon";
import {LinkedinIcon} from "@/components/icons/LinkedinIcon";
import React from "react";
import {ThemeSwitcher} from "@/components/ThemeSwitcher";

export default function SocialLinks() {
    return (
        <>
            <NavbarItem>
                <Button as={Link} color="primary" href="#" download variant="ghost" radius="full">
                    Resume
                </Button>
            </NavbarItem>
            <NavbarItem>
                <Button isIconOnly as={Link} href="https://github.com/g0rz" isExternal
                        aria-label="Github/G0rz" color="default" variant="light" radius="full">
                    <GithubIcon fill={"currentColor"} size={32}/>
                </Button>
            </NavbarItem>
            <NavbarItem>
                <Button isIconOnly as={Link} href="https://www.linkedin.com/in/typenull/" isExternal
                        aria-label="LinkedIn/TypeNull" color="default" variant="light" radius="full">
                    <LinkedinIcon fill={"currentColor"} size={32}/>
                </Button>
            </NavbarItem>
            <NavbarItem>
                <ThemeSwitcher/>
            </NavbarItem>
        </>
    )
}