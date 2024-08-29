import Cards from "@/components/cards";
import { IoMdSearch } from "react-icons/io";

export default function MealsPage() {
  return (
    <main className="flex flex-col items-center p-4">
      <div className="w-full flex flex-col items-center pb-4">
        <h1 className="text-2xl font-bold p-4">Browse Meals</h1>
        <form className="flex items-center">
          <input
            className=" border-neutral-400 w-80 py-2 px-3 text-rose-50 bg-neutral-800 focus:outline-none"
            id="search"
            type="text"
            placeholder="Search..."
          />
          <button class="bg-transparent hover:text-white h-10 py-2 px-4 hover:bg-neutral-950">
            <IoMdSearch />
          </button>
        </form>
      </div>
      <Cards />
    </main>
  );
}
