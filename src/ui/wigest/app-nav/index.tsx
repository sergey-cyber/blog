"use client";

import { buttonVariants } from "@/ui/shadcn/ui/button";
import { ScrollArea } from "@/ui/shadcn/ui/scroll-area";
import Link from "next/link";
import { PropsWithChildren } from "react";

export function AppNav() {
  return (
    <ScrollArea
      className={"h-[calc(100vh-3.5rem-1px)] w-[250px] lg:w-[350px] p-4"}
    >
      <div className="flex flex-col">
        <h4 className="pl-4 font-semibold">Темы</h4>
        <NavItem href="js">JavaScript</NavItem>
      </div>
    </ScrollArea>
  );
}

function NavItem({ href, children }: PropsWithChildren<{ href: string }>) {
  return (
    <Link
      href={href}
      className={"justify-start" + buttonVariants({ variant: "ghost" })}
    >
      <p className="text-foreground/60">{children}</p>
    </Link>
  );
}
