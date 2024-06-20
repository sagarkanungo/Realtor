"use client";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React from "react";
import { NavItem } from "@/interface/headerConfiguration";

const Header: React.FC = () => {
  const router = useRouter();
  const pathname = usePathname();

  const navItems: NavItem[] = [
    { label: "Home", href: "/" },
    // { label: "Profile", href: "/profile" },
    { label: "Offers", href: "/offers" },
    { label: "SignIn", href: "/signIn" },
  ];

  return (
    <div className="bg-white border-b shadow-sm sticky top-0 z-50">
      <header className="flex justify-between items-center px-3 max-w-6xl mx-auto">
        <div>
          <img
            src="https://static.rdc.moveaws.com/rdc-ui/logos/logo-brand.svg"
            alt="logo"
            className="h-5 cursor-pointer"
            onClick={() => router.push("/")}
          />
        </div>
        <nav className="flex space-x-10 font-serif">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href}>
              <p
                className={`py-3 text-sm font-semibold text-gray-400 border-b-[3px] 
              border-transparent hover:border-b-2 
              ${pathname === item.href ? "border-y-red-400 text-slate-950" : ""}`}
              >
                {item.label}
              </p>
            </Link>
          ))}
        </nav>
      </header>
    </div>
  );
};

export default Header;


