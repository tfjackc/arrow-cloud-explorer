"use client";
import React, { useState } from "react";
import { Navbar, NavbarBrand, NavbarMenuToggle, NavbarMenu, NavbarMenuItem, NavbarContent, NavbarItem, Link, Button } from "@nextui-org/react";

export default function NavBar() {
    const menuItems = [
        { name: "Convert / Process", href: "#" },
        { name: "Data", href: "#" },
        { name: "Map", href: "#" }
    ];

    // State to track the active item
    const [activeItem, setActiveItem] = useState(menuItems[0].name);

    // Handler to change the active item
    const handleItemClick = (itemName: any) => {
        setActiveItem(itemName);
    };

    return (
        <Navbar isBordered>
            <NavbarContent className="sm:hidden" justify="start">
                <NavbarMenuToggle />
            </NavbarContent>

            <NavbarContent className="sm:hidden pr-3" justify="center">
                <NavbarBrand>
                    <p className="font-bold text-inherit">ARROW CLOUD EXPLORER</p>
                </NavbarBrand>
            </NavbarContent>

            <NavbarContent className="hidden sm:flex gap-4" justify="center">
                <NavbarBrand>
                    <p className="font-bold text-inherit">ARROW CLOUD EXPLORER</p>
                </NavbarBrand>
                {menuItems.map((item) => (
                    <NavbarItem key={item.name}>
                        <Link
                            color={activeItem === item.name ? "success" : "foreground"}
                            href={item.href}
                            onClick={() => handleItemClick(item.name)}
                        >
                            {item.name}
                        </Link>
                    </NavbarItem>
                ))}
            </NavbarContent>

            <NavbarContent justify="end">
                <NavbarItem className="hidden lg:flex">
                    <Link href="/login">Login</Link>
                </NavbarItem>
                <NavbarItem>
                    <Button as={Link} color="primary" href="#" variant="flat">
                        Sign Up
                    </Button>
                </NavbarItem>
            </NavbarContent>

            <NavbarMenu>
                {menuItems.map((item, index) => (
                    <NavbarMenuItem key={`${item.name}-${index}`} onClick={() => handleItemClick(item.name)}>
                        <Link
                            className="w-full"
                            color={activeItem === item.name ? "success" : index === menuItems.length - 1 ? "primary" : "foreground"}
                            href={item.href}
                        >
                            {item.name}
                        </Link>
                    </NavbarMenuItem>
                ))}
            </NavbarMenu>
        </Navbar>
    );
}
