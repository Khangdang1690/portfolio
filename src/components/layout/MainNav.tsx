"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, navigationMenuTriggerStyle } from "@/components/ui/navigation-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";

const navItems = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Projects", path: "/projects" },
  { name: "Experience", path: "/experience" },
  { name: "Achievements", path: "/achievements" },
  { name: "Contact", path: "/contact" }
];

export function MainNav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <div className="flex items-center justify-between py-4">
      <Link href="/" className="flex items-center space-x-2">
        <span className="text-xl font-bold text-primary">Khang Dang</span>
      </Link>
      <div className="hidden md:flex">
        <NavigationMenu>
          <NavigationMenuList>
            {navItems.map((item) => (
              <NavigationMenuItem key={item.path}>
                <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                  <Link href={item.path}>
                    {item.name}
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>
      </div>
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger asChild className="md:hidden">
          <Button variant="ghost" size="icon">
            <Menu />
            <span className="sr-only">Toggle menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="right" className="bg-card">
          <div className="flex flex-col space-y-4 py-4">
            <Link
              href="/"
              className="flex items-center space-x-2"
              onClick={() => setOpen(false)}
            >
              <span className="text-xl font-bold text-primary">Khang Dang</span>
            </Link>
            <div className="mt-8 flex flex-col space-y-3">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  href={item.path}
                  onClick={() => setOpen(false)}
                  className={`${
                    pathname === item.path
                      ? "text-primary font-medium"
                      : "text-muted-foreground"
                  } hover:text-primary transition-colors`}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
} 