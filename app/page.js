import Navbar from "@/components/navbar";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <header>
        <div className="md:grid md:grid-cols-2 space-y-20 py-20 max-h-[720px]">
          <div className="md:col-start-2 px-20">
            <h1 className="text-6xl font-bold py-10 text-rose-50">
              NextLevel Food for NextLevel Foodies
            </h1>
            <p className="font-medium text-neutral-400">
              Taste & share food from all over the world.
            </p>
          </div>
          <div className="md:col-start-2 px-20 flex items-center">
            <Link href="/community">Join the Community</Link>
            <Link href="/meals" className="bg-slate-800 p-3 rounded-lg mx-12">
              Explore Meals
            </Link>
          </div>
        </div>
      </header>

      <main className="flex flex-col justify-center p-20">
        <section className="flex flex-col space-y-10">
          <h2 className="text-4xl font-semibold">How it works</h2>
          <p>
            NextLevel Food is a platform for foodies to share their favorite
            recipes with the world. It&apos;s a place to discover new dishes,
            and to connect with other food lovers.
          </p>
          <p>
            NextLevel Food is a place to discover new dishes, and to connect
            with other food lovers.
          </p>
        </section>

        <section>
          <h2>Why NextLevel Food?</h2>
          <p>
            NextLevel Food is a platform for foodies to share their favorite
            recipes with the world. It&apos;s a place to discover new dishes,
            and to connect with other food lovers.
          </p>
          <p>
            NextLevel Food is a place to discover new dishes, and to connect
            with other food lovers.
          </p>
        </section>
      </main>
    </>
  );
}
