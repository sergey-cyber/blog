import Link from "next/link";
import { PropsWithChildren } from "react";

export const Nav = () => {
  return (
    <nav className="flex gap-6 text-sm items-center">
      <NavLink href={"/example"}>Example</NavLink>
      <NavLink href={"/github"}>Github</NavLink>
    </nav>
  );
};

function NavLink({ children, href }: PropsWithChildren<{ href: string }>) {
  return (
    <Link
      className="transition-colors hover:text-foreground/80 text-foreground/60"
      href={href}
    >
      {children}
    </Link>
  );
}
