import MealItem from "@/components/meals/meal-item";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { getMeals } from "@/lib/meals";
import MealsGrid from "@/components/meals/meals-grid";

export default async function MealsPage() {
  const meals = await getMeals();

  return (
    <main>
      <div className="md:p-20 pt-20 space-y-10">
        <h1 className="text-6xl font-bold text-rose-50">
          Delicious meals, created <span className="text-rose-500">by you</span>
        </h1>
        <p className="text-2xl font-semibold text-neutral-400">
          Chose your favorite recipe and cook it yourself. It is easy and fun!
        </p>

        <div>
          <Link
            href="/meals/share"
            className={`${buttonVariants({ variant: "secondary" })}`}
          >
            Share Your Favorite Recipe
          </Link>
        </div>
      </div>
      <MealsGrid meals={meals} />
    </main>
  );
}
