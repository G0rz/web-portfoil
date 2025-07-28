"use client"

import {
    Button,
    Link,
    Navbar,
    NavbarBrand,
    NavbarContent,
    NavbarItem,
    NavbarMenu,
    NavbarMenuItem,
    NavbarMenuToggle
} from "@heroui/react";
import {useState} from "react";
import {usePathname} from 'next/navigation'

interface IconProps {
    fill: string;
    size?: number;
    height?: number;
    width?: number;
}

export const Logo = (options: IconProps) => {
    return (
        <svg fill="none"
             height={options.size || options.height || 24}
             width={options.size || options.width || 24}
             xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
             viewBox="0 0 48 48">
            <path fill="#b71c1c"
                  d="M29,17.5c-1.324,1.928-4.235,5.5-4.235,5.5S21.456,19.814,20,17.5c0,0,1.588-2.597,4.73-5.5	C26.882,14.26,29,17.5,29,17.5z M36.375,23c0,0-0.375-0.5-0.375-1.75c0-2.875,5-4.25,5-4.25c-1-2-4-6.5-4-6.5l0.5-4L34,8	c-2.75-3.375-8.25-7.75-9-8c0,0-2.625,1.625-7.625,5.625c0,0-2.5-1.625-3.25-1.625c-0.469,0-0.75,0.125-0.874,0.863	C13.111,5.696,13,6.625,12.864,7.584c-0.118,0.835-0.249,1.698-0.796,2.378C9.625,13,7,15.625,7,15.625s5,1.75,5,6.375	c0,0.625-0.25,1-0.25,1C9.125,23,5,20,5,20c0,1,3.625,6.25,6,9c0,0,1.25-1,3-1c2,0,5,1.375,5,6.625C19,37,18.375,38,16.75,38	C16,38,15,37.375,15,37.375L21,48c0,0,1-3.25,1-8.625c0-5.875-1.046-8.728-2.75-11.875c-1.625-3-3.25-5-3.25-9.5	c0-3.625,3.625-8,9.25-8C29.5,10,32,14.945,32,18c0,4-1.195,7.186-3.033,10.25C25.967,33.25,26,34,26,34s0.638,5,1,11	c3.206-3.667,3.75-4.625,6-10c0,0-1.598,0.879-1.75,0.925C31.092,35.974,30.924,36,30.75,36C29.784,36,29,35.216,29,34.25	c0-0.329,0.091-0.636,0.25-0.899c0.139-0.23,0,0,1.75-3.101c0.632-1.121,1.25-2.25,2.875-2.25C36.25,28,38,30,38,30	c3.75-5.125,5-9,5-9C39.5,23.125,36.375,23,36.375,23z"></path>
        </svg>
    );
};

export const GithubIcon = (options: IconProps) => {
    return (
        <svg fill="currentColor"
             height={options.size || options.height || 24}
             width={options.size || options.width || 24}
             xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 64 64">
            <path fill="#FFF"
                  d="M32 6C17.641 6 6 17.641 6 32c0 12.277 8.512 22.56 19.955 25.286-.592-.141-1.179-.299-1.755-.479V50.85c0 0-.975.325-2.275.325-3.637 0-5.148-3.245-5.525-4.875-.229-.993-.827-1.934-1.469-2.509-.767-.684-1.126-.686-1.131-.92-.01-.491.658-.471.975-.471 1.625 0 2.857 1.729 3.429 2.623 1.417 2.207 2.938 2.577 3.721 2.577.975 0 1.817-.146 2.397-.426.268-1.888 1.108-3.57 2.478-4.774-6.097-1.219-10.4-4.716-10.4-10.4 0-2.928 1.175-5.619 3.133-7.792C19.333 23.641 19 22.494 19 20.625c0-1.235.086-2.751.65-4.225 0 0 3.708.026 7.205 3.338C28.469 19.268 30.196 19 32 19s3.531.268 5.145.738c3.497-3.312 7.205-3.338 7.205-3.338.567 1.474.65 2.99.65 4.225 0 2.015-.268 3.19-.432 3.697C46.466 26.475 47.6 29.124 47.6 32c0 5.684-4.303 9.181-10.4 10.4 1.628 1.43 2.6 3.513 2.6 5.85v8.557c-.576.181-1.162.338-1.755.479C49.488 54.56 58 44.277 58 32 58 17.641 46.359 6 32 6zM33.813 57.93C33.214 57.972 32.61 58 32 58 32.61 58 33.213 57.971 33.813 57.93zM37.786 57.346c-1.164.265-2.357.451-3.575.554C35.429 57.797 36.622 57.61 37.786 57.346zM32 58c-.61 0-1.214-.028-1.813-.07C30.787 57.971 31.39 58 32 58zM29.788 57.9c-1.217-.103-2.411-.289-3.574-.554C27.378 57.61 28.571 57.797 29.788 57.9z"></path>
        </svg>
    );
};

export const LinkedinIcon = (options: IconProps) => {
    return (
        <svg fill="none"
             height={options.size || options.height || 24}
             width={options.size || options.width || 24}
             xmlns="http://www.w3.org/2000/svg"
             x="0px" y="0px" viewBox="0 0 48 48">
            <path fill="#006FEE"
                  d="M42,37c0,2.762-2.238,5-5,5H11c-2.761,0-5-2.238-5-5V11c0-2.762,2.239-5,5-5h26c2.762,0,5,2.238,5,5V37z"></path>
            <path fill="#FFF"
                  d="M12 19H17V36H12zM14.485 17h-.028C12.965 17 12 15.888 12 14.499 12 13.08 12.995 12 14.514 12c1.521 0 2.458 1.08 2.486 2.499C17 15.887 16.035 17 14.485 17zM36 36h-5v-9.099c0-2.198-1.225-3.698-3.192-3.698-1.501 0-2.313 1.012-2.707 1.99C24.957 25.543 25 26.511 25 27v9h-5V19h5v2.616C25.721 20.5 26.85 19 29.738 19c3.578 0 6.261 2.25 6.261 7.274L36 36 36 36z"></path>
        </svg>
    );
};

export default function NavigationBar() {
    const pathname = usePathname()
    const menuItems = [
        {name: "Home", url: "/"},
        {name: "Projects", url: "/projects"},
        {name: "Contact", url: "/contact"}
    ];

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <Navbar shouldHideOnScroll={true} isMenuOpen={isMenuOpen} onMenuOpenChange={setIsMenuOpen}>
            <NavbarContent>
                <NavbarMenuToggle
                    aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                    className="sm:hidden"
                />
                <NavbarBrand>
                    <Logo fill={"currentColor"} size={32}/>
                </NavbarBrand>
            </NavbarContent>

            <NavbarContent className="hidden sm:flex gap-4" justify="end">
                {menuItems.length > 0 ? menuItems.map((menuItem, index) => {
                        return <NavbarItem key={`${menuItem}-${index}`} isActive={pathname === menuItem.url}>
                            <Link href={menuItem.url} aria-current="page"
                                  color={pathname === menuItem.url ? "primary" : "foreground"}>
                                {menuItem.name}
                            </Link>
                        </NavbarItem>
                    }
                ) : null}
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
                            aria-label="LinkedIn/TypeNull" color="primary" variant="light">
                        <LinkedinIcon fill={"currentColor"} size={32}/>
                    </Button>
                </NavbarItem>
            </NavbarContent>
            <NavbarContent className="sm:hidden" justify="end">
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
                            aria-label="LinkedIn/TypeNull" color="primary" variant="light">
                        <LinkedinIcon fill={"currentColor"} size={32}/>
                    </Button>
                </NavbarItem>
            </NavbarContent>
            <NavbarMenu>
                {menuItems.map((menuItem, index) => (
                    <NavbarMenuItem key={`${menuItem}-${index}`} isActive={pathname === menuItem.url}>
                        <Link
                            className="w-full" aria-current="page"
                            color={pathname === menuItem.url ? "primary" : "foreground"}
                            href={menuItem.url}
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