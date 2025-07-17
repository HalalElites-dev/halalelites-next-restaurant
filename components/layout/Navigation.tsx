'use client';
import Link from "next/link";
import { NAV_LINKS } from "@/lib/constants";
import { cn, scrollToSection} from "@/lib/utils";


export function Navigation() {

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, href: string) => {
   if (href.startsWith('#')) {
      e.preventDefault();
      scrollToSection(href.substring(1));
    }
  };

  return (
    <nav className="flex flex-col space-y-4 md:flex-row items-center md:space-x-6 md:space-y-0">
      {NAV_LINKS.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          className={cn(
            "font-heading uppercase transition-colors hover:text-primary-foreground/80 relative py-1 text-primary-foreground font-bold",
            
          )}
          onClick={(e) => handleClick(e, link.href)}
        >
          {link.label}
        </Link>
      ))}
    </nav>
  )
}