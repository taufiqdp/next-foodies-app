import Cards from "@/components/cards";

export default function MealsPage() {
  return (
    <main className="flex flex-col items-center p-6">
      <div className="relative flex w-full justify-center mb-20 md:mb-4">
        <h1 className="text-2xl font-bold">Meals</h1>
        <input
          className="absolute top-0 md:right-0 mt-12 md:mt-0 border-neutral-400 w-48 py-2 px-3 text-rose-50 bg-neutral-800 focus:outline-none"
          id="search"
          type="text"
          placeholder="Search..."
        />
      </div>
      <Cards />
    </main>
  );
}
