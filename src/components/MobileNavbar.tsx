"use client";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { useState } from "react";
import { Button } from "@/components/ui/button";

import Link from "next/link";
import ThemeToggle from "./ThemeToggle";
import { MenuIcon } from "lucide-react";

function MobileNavbar() {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  return (
    <div className="flex md:hidden items-center  space-x-2">
      <ThemeToggle/>

      <Sheet open={showMobileMenu}  onOpenChange={setShowMobileMenu}>
        <SheetTrigger asChild>
          <Button variant="ghost" size="icon">
            <MenuIcon className="h-10 w-10 text-orange-500" />
          </Button>
        </SheetTrigger>
        <SheetContent side="right" className="w-[300px]">
          <SheetHeader>
            <SheetTitle className="text-2xl text-orange-500 font-semibold">Menu</SheetTitle>
          </SheetHeader>
          <nav className="flex flex-col items-center space-y-4 mt-6">
            <ul className='flex flex-col space-y-4 text-orange-500  '>
                <li><Link href="#">Home</Link></li>
                <li><Link href="#">About</Link></li>
                <li><Link href="#">Benefits</Link></li>
                <li><Link href="#">Courses</Link></li>
                <li><Link href="#">Testimonials</Link></li>
                <li><Link href="#">Contact</Link></li>
            </ul>   

          </nav>
        </SheetContent>
      </Sheet>
    </div>
  );
}

export default MobileNavbar;
