import Carousel from "@/components/carousel";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";

export default function Home() {
  return (
    <>
      <header className="pb-20">
        <div className="md:grid md:grid-cols-2">
          <div className="md:col-start-1 md:p-20 py-10 min-h-[400px]">
            <Carousel />
          </div>

          <div className="md:col-start-2 p-0 text-center md:text-left">
            <div className="space-y-10 md:p-20 py-20">
              <h1 className="md:text-6xl text-5xl font-bold text-rose-50">
                Next Level <span className="text-rose-500">Food</span> for Next
                Level <span className="text-rose-500">Foodies</span>
              </h1>
              <p className="font-medium text-neutral-400">
                Taste & share food from all over the world.
              </p>
            </div>
            <div className="px-20 w-full flex items-center justify-between flex-col md:flex-row">
              <Link
                href="/community"
                className="text-rose-50 hover:text-white pb-5 md:p-0"
              >
                Join the Community
              </Link>
              <Link
                href="/meals"
                className={`${buttonVariants({ variant: "secondary" })}`}
              >
                Explore Meals
              </Link>
            </div>
          </div>
        </div>
      </header>

      <main className="flex flex-col justify-center md:p-20 py-20 space-y-20 text-center md:text-left">
        <section className="flex flex-col space-y-4">
          <h2 className="text-4xl font-semibold">How it works</h2>
          <p className="text-neutral-300">
            Next Level Food is a platform for foodies to share their favorite
            recipes with the world. It&apos;s a place to discover new dishes,
            and to connect with other food lovers.
          </p>
          <p className="text-neutral-300">
            NextLevel Food is a place to discover new dishes, and to connect
            with other food lovers.
          </p>
        </section>

        <section className="flex flex-col space-y-4">
          <h2 className="text-4xl font-semibold">Why Next Level Food?</h2>
          <p className="text-neutral-300">
            Next Level Food is a platform for foodies to share their favorite
            recipes with the world. It&apos;s a place to discover new dishes,
            and to connect with other food lovers.
          </p>
          <p className="text-neutral-300">
            Next Level Food is a place to discover new dishes, and to connect
            with other food lovers.
          </p>
        </section>
      </main>
    </>
  );
}
