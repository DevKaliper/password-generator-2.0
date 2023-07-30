"use client";
import React from "react";
import {
  Navbar as NextUiNavbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
} from "@nextui-org/navbar";
import { Button } from "@nextui-org/button";
import { Link } from "@nextui-org/link";
import { Chip } from "@nextui-org/chip";
import { Switch } from "@nextui-org/switch";
import BlackLogo from "./Icon/blackLogo";
import WhiteLogo from "./Icon/whiteLogo";
import { GithubLogo } from "./Icon/githubLogo";
import { useTheme } from "next-themes";
import { SunIcon } from "./Icon/SunIcon";
import { MoonIcon } from "./Icon/MoonIcon";

export const Navbar = () => {
  const { theme, setTheme } = useTheme();
  const handleChangeTheme = (e) => {
    if (e.target.checked) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };
  return (
    <NextUiNavbar>
      <NavbarBrand>
        {theme === "dark" ? <WhiteLogo /> : <BlackLogo />}

        <p className="font-bold text-inherit">DevKaliper</p>
      </NavbarBrand>
      <NavbarContent
        className="hidden gap-4 sm:flex"
        justify="center">
        <NavbarItem>
          <Link
            color="foreground"
            href="https://devkaliper.me/Password-Generator/"
            target="_blank"
            >
            v1.0.0
          </Link>
        </NavbarItem>
        <NavbarItem isActive>
          <Link
            href="/"
            aria-current="page"
            color="success">
            v2.0.0{" "}
            <Chip
              color="success"
              variant="shadow"
              className="ml-1">
              Latest
            </Chip>
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            color="foreground"
            href="/features">
            Features
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem>
          <Switch
            
            size="lg"
            color="success"
            onChange={(e) => handleChangeTheme(e)}
            aria-labelledby=":Remcq:"
            startContent={<SunIcon />}
            endContent={<MoonIcon />}></Switch>
        </NavbarItem>

        <NavbarItem>
          <Button
            as={Link}
            color="success"
            href="https://github.com/DevKaliper/password-generator-2.0"
            target="_blank"
            variant="flat"
            className="flex items-center justify-center gap-2 bg-gradient-to-tr uppercase font-bold hover:scale-105 duration-300 ease-in-out from-green-500 to-yellow-500 text-white shadow-lg dark:bg-gray-200 dark:text-black">
            <GithubLogo />
            GITHUB
          </Button>
        </NavbarItem>
      </NavbarContent>
    </NextUiNavbar>
  );
};
