import Link from "next/link";
import { Home, Search, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <section className="relative overflow-hidden bg-beige">
      <div className="texture-grain absolute inset-0 opacity-50" />
      <div className="container-page relative grid min-h-[70vh] place-items-center py-20 text-center">
        <div>
          <p className="font-heading text-[7rem] font-extrabold leading-none text-forest/15 sm:text-[10rem]">
            404
          </p>
          <h1 className="-mt-4 font-heading text-3xl font-bold text-ink sm:text-4xl">
            This room seems empty
          </h1>
          <p className="mx-auto mt-4 max-w-md text-slate">
            The page you&apos;re looking for has moved or no longer exists. Let&apos;s get you back home.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Button href="/" size="lg">
              <Home className="h-5 w-5" /> Back to Home
            </Button>
            <Button href="/shop" variant="outline" size="lg">
              <Search className="h-5 w-5" /> Browse Shop
            </Button>
          </div>
          <Link href="/contact" className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-forest hover:underline">
            <ArrowLeft className="h-4 w-4" /> Or contact our team
          </Link>
        </div>
      </div>
    </section>
  );
}
