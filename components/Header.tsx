import Image from "next/image";
import Link from "next/link";
import React from "react";

import logo_sam from "../public/assets/images/iconssam.svg"
import { cn } from "@/lib/utils";

const Header = ({ children, className }: HeaderProps) => {
  return (
    <div className={cn("header", className)}>
      <Link href="/" className="md:flex-1">
        <Image
          src={logo_sam}
          alt="Logo with name"
          width={50}
          height={32}
          className="hidden md:block"
        />
        <Image
          src={logo_sam}
          alt="Logo"
          width={32}
          height={32}
          className="mr-2 md:hidden"
        /> 
      </Link>
      {children}
    </div>
  );
};

export default Header;
