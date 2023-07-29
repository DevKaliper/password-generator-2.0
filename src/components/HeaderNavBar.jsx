
"use client"
import React from "react";
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Link,Chip, Switch} from "@nextui-org/react";
import Logo from "./Logo.jsx";
import { UserButton } from "@clerk/nextjs";
import { useTheme } from "next-themes";
import { SunIcon } from "./SunIcon.jsx";
import { MoonIcon } from "./MoonIcon.jsx";

export default function App() {
  const { setTheme } = useTheme();
  const handleTheme = (e) => {
    const theme = e.target.checked ? "dark" : "light";
    setTheme(theme);
    
  }
  return (
    <Navbar>
      <NavbarBrand>
        <Logo />
        <a href="https://github.com/DevKaliper" target="_blank" rel="noreferrer" className="font-bold text-inherit"> DevKaliper</a>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <Link color="foreground" href="#">
            v1.0.0
          </Link>
        </NavbarItem>
        <NavbarItem isActive>
          <Link href="#" aria-current="page" color="success" >
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
      <Switch
      defaultSelected
       onChange={(e)=> handleTheme(e) }
      size="lg"
      color="success"
      startContent={<SunIcon />}
      endContent={<MoonIcon />}
    >
      
    </Switch>
      <UserButton afterSignOutUrl="/" />
      </NavbarContent>
    </Navbar>
  );
}
