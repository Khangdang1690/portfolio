"use client";

import { useState, Suspense } from "react";
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

// Navigation component that uses usePathname
function NavigationLinks({ onLinkClick }: { onLinkClick?: () => void }) {
  const pathname = usePathname();
  
  return (
    <>
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
      
      <div className="flex md:hidden flex-col space-y-3">
        {navItems.map((item) => (
          <Link
            key={item.path}
            href={item.path}
            onClick={onLinkClick}
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
    </>
  );
}

// Fallback for the Suspense
function NavigationLinksFallback({ onLinkClick }: { onLinkClick?: () => void }) {
  return (
    <>
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
      
      <div className="flex md:hidden flex-col space-y-3">
        {navItems.map((item) => (
          <Link
            key={item.path}
            href={item.path}
            onClick={onLinkClick}
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            {item.name}
          </Link>
        ))}
      </div>
    </>
  );
}

export function MainNav() {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex items-center justify-between py-4">
      <Link href="/" className="flex items-center space-x-2">
        <span className="text-xl font-bold text-primary">Khang Dang</span>
      </Link>
      
      <Suspense fallback={<NavigationLinksFallback />}>
        <NavigationLinks />
      </Suspense>
      
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
            <Suspense fallback={<NavigationLinksFallback onLinkClick={() => setOpen(false)} />}>
              <NavigationLinks onLinkClick={() => setOpen(false)} />
            </Suspense>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
} 