import { Avatar, AvatarFallback, AvatarImage } from "@/ui/shadcn/ui/avatar";
import { ToggleThemeButton } from "./toggle-theme-button";
import { Nav } from "./Nav";

export function AppHeader() {
  return (
    <header className="w-full border-b border-border">
      <div className="container justify-between flex h-14 items-center">
        <div className="flex space-x-10">
          <div className="font-bold">{"<Logo />"}</div>
          <Nav />
        </div>
        <div className="flex space-x-5">
          <ToggleThemeButton />
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </div>
      </div>
    </header>
  );
}
