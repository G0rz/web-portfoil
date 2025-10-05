"use client";

import {useTheme} from "next-themes";
import {Button} from "@heroui/react";
import {SunIcon} from "@/components/icons/SunIcon";
import {MoonIcon} from "@/components/icons/MoonIcon";

export function ThemeSwitcher() {
    const { theme, setTheme } = useTheme()

    return (
        <Button
            isIconOnly
            radius="full"
            variant={'light'}
            color={'default'}
            aria-label={theme ? "Switch to light mode" : "Switch to dark mode"}
            onPress={() => setTheme(localStorage.getItem('theme') === 'dark' ? "light" : "dark")}
        >
            {localStorage.getItem('theme') === 'dark' ? (
                <SunIcon size={20} fill={"currentColor"}/>
            ) : (
                <MoonIcon size={20} fill={"currentColor"}/>
            )}
        </Button>
    );
}
