'use client';
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Button } from "../ui/button";
import { Navigation } from "./Navigation";
import { SITE_TITLE } from "@/lib/constants";


export function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <Button
        variant="ghost"
        size="sm"
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden bg-primary-foreground"
      >
        {isOpen ? <X className="h-10 w-10" /> : <Menu className="h-5 w-5" />}
      </Button>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-50 bg-foreground backdrop-blur-sm md:hidden max-w-2xl">
          <div className="fixed right-0 w-full bg-foreground animate-in slide-in-from-right duration-300 rounded-2xl">

             {/* Header */}
            <div className="flex items-center justify-between  bg-foreground px-6 py-4 rounded-sm">
              <div className="flex items-center space-x-2">
                <span className="text-lg font-semibold text-background">{SITE_TITLE}</span>
              </div>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsOpen(false)}
                className="rounded-full hover:bg-secondary text-background "
              >
                <X className="h-10 w-10" />
              </Button>
            </div>

            {/* Navigation Content */}
            <div className="flex flex-col h-full">
              <div className="flex-1 px-6 py-6">
                <Navigation />
              </div>


            </div>
          </div>
        </div>
      )}
    </>
  )
}