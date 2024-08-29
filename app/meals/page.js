import Cards from "@/components/cards";

export default function MealsPage() {
  return (
    <main className="flex flex-col items-center justify-center p-6">
      <h1 className="text-2xl font-bold mb-2">Meals</h1>
      <Cards />
    </main>
  );
}
