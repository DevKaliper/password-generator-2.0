
"use client"
import React from "react";
import {Navbar as NextUiNavbar, NavbarBrand, NavbarContent, NavbarItem} from "@nextui-org/navbar";
import {Button} from "@nextui-org/button";
import {Link} from "@nextui-org/link";
import BlackLogo from "./Logos/blackLogo";
import WhiteLogo from "./Logos/whiteLogo";
import {useTheme} from "next-themes";

export const Navbar = () => {
    const { theme, setTheme} = useTheme()
  return (
    <NextUiNavbar>
      <NavbarBrand>
        {
            theme === 'dark' ?  <WhiteLogo/> : <BlackLogo />
        }
        
        <p className="font-bold text-inherit">ACME</p>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <Link color="foreground" href="#">
            Features
          </Link>
        </NavbarItem>
        <NavbarItem isActive>
          <Link href="#" aria-current="page">
            Customers
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">
            Integrations
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex">
          <Link href="#">Login</Link>
        </NavbarItem>
        <NavbarItem>
          <Button as={Link} color="primary" href="#" variant="flat">
            Sign Up
          </Button>
        </NavbarItem>
      </NavbarContent>
    </NextUiNavbar>
  );
}
