"use client";
import React, { useState } from "react";

import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";

import gitviewsmap from "../assets/gitviewsmap.png"

export default  function NavbarDemo() {
  return (
    <div className="relative w-full flex items-center justify-center">
      <Navbar className="top-2" />
    </div>
  );
}

function Navbar({
  className
}) {
  const [active, setActive] = useState(null);
  return (
    <div
      className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}>
      <Menu setActive={setActive}>
       
          <Link to="/" className="text-medium">About</Link>
          
        
        <MenuItem setActive={setActive} active={active} item="Skills" to="/skills">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/skills#webdev">Web Development</HoveredLink>
            <HoveredLink href="/skills#sysdesign">System Design</HoveredLink>
            <HoveredLink href="/skills#dsa">Data Structure And Algorithim</HoveredLink>
            <HoveredLink href="/skills#ai-ml">AI/ML</HoveredLink>
          </div>
        </MenuItem>


        <MenuItem setActive={setActive} active={active} item="Projects" to="/projects">
        <p>Featured</p>
          <div className="  text-sm grid grid-cols-2 gap-10 p-4">
            <ProductItem
              title="Git Views Map"
              href="/project#gitviewsmap"
              src={gitviewsmap}
              description="Maps github visitors on a map made by using simple CRUD operations" />
            <ProductItem
              title="Portfolio"
              href="https://tailwindmasterkit.com"
              src="https://assets.aceternity.com/demos/tailwindmasterkit.webp"
              description="Production ready Tailwind css components for your next project" />
            
          </div>
        </MenuItem>


        <MenuItem setActive={setActive} active={active} item="Blogs">
         <p>still figuring out !!</p>
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/hobby"></HoveredLink>
            <HoveredLink href="/individual"></HoveredLink>
            {/* <HoveredLink href="/team">Team</HoveredLink>
            <HoveredLink href="/enterprise">Enterprise</HoveredLink> */}
          </div>
        </MenuItem>
      </Menu>
    </div>
  );
}
