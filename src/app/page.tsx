import { HomePage } from "@/ui/pages/home";
import { AppNav } from "@/ui/wigest/app-nav";

export default function Home() {
  return (
    <main>
      <HomePage />
      <section className="container">
        <AppNav />
      </section>
    </main>
  );
}
