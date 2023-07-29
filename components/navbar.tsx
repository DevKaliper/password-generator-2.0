
"use client"
import React from "react";
import {Navbar as NextUiNavbar, NavbarBrand, NavbarContent, NavbarItem} from "@nextui-org/navbar";
import {Button} from "@nextui-org/button";
import {Link} from "@nextui-org/link";
import {Chip} from "@nextui-org/chip";
import BlackLogo from "./Logos/blackLogo";
import WhiteLogo from "./Logos/whiteLogo";
import { GithubLogo } from "./Logos/githubLogo";
import {useTheme} from "next-themes";

export const Navbar = () => {
    const { theme, setTheme} = useTheme()
  return (
    <NextUiNavbar>
      <NavbarBrand>
        {
            theme === 'dark' ?  <WhiteLogo/> : <BlackLogo />
        }
        
        <p className="font-bold text-inherit">DevKaliper</p>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <Link color="foreground" href="#">
            v1.0.0
          </Link>
        </NavbarItem>
        <NavbarItem isActive>
          <Link href="#" aria-current="page" color="success">
            v2.0.0 <Chip color="success" variant="shadow" className="ml-1">Latest</Chip>
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">
            Features
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        
        <NavbarItem>
          <Button as={Link} color="success" href="#" variant="flat" className="flex gap-2 justify-center font-bold dark:bg-gray-200 dark:text-black text-black items-center">
            <GithubLogo />
            GITHUB
          </Button>
        </NavbarItem>
      </NavbarContent>
    </NextUiNavbar>
  );
}
