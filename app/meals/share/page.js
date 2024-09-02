import ImagePicker from "@/components/meals/image-picker";
import { Button } from "@/components/ui/button";

export default function ShareMealPage() {
  return (
    <main className="md:max-w-4xl md:p-6 pt-6 mx-auto text-rose-50">
      <section className="p-10 bg-neutral-900 rounded-lg shadow-lg">
        <h1 className="text-2xl font-bold capitalize pb-5">
          Share your <span className="text-rose-500">favorite recipe</span>
        </h1>

        <form>
          <div className="mt-4 flex flex-col space-y-5">
            <div className="md:grid md:grid-cols-2 gap-10 space-y-5 md:space-y-0">
              <div className="col-start-1">
                <label htmlFor="name">Name</label>
                <input
                  id="name"
                  type="text"
                  className="block w-full px-4 py-2 mt-2 text-rose-50 bg-black rounded-md focus:outline-none"
                />
              </div>

              <div className="col-start-2">
                <label
                  className="text-rose-50 dark:text-gray-200"
                  htmlFor="emailAddress"
                >
                  Email Address
                </label>
                <input
                  id="emailAddress"
                  type="email"
                  className="block w-full px-4 py-2 mt-2 text-rose-50 bg-black rounded-md focus:outline-none"
                />
              </div>
            </div>

            <div className="col-start-2">
              <label
                className="text-rose-50 dark:text-gray-200"
                htmlFor="title"
              >
                Title
              </label>
              <input
                id="title"
                type="text"
                className="block w-full px-4 py-2 mt-2 text-rose-50 bg-black rounded-md focus:outline-none"
              />
            </div>

            <div className="col-start-2">
              <label
                className="text-rose-50 dark:text-gray-200"
                htmlFor="summary"
              >
                Summary
              </label>
              <input
                id="summary"
                type="text"
                className="block w-full px-4 py-2 mt-2 text-rose-50 bg-black rounded-md focus:outline-none"
              />
            </div>

            <div className="col-start-2">
              <label
                className="text-rose-50 dark:text-gray-200"
                htmlFor="instructions"
              >
                Instructions
              </label>

              <textarea
                rows={10}
                className="block w-full px-4 py-2 mt-2 text-rose-50 bg-black rounded-md focus:outline-none"
              />
            </div>
          </div>

          <div className="md:grid md:grid-cols-2 pt-10">
            <div className="md:col-start-1 flex justify-center">
              <ImagePicker />
            </div>
            <div className="md:col-start-2 flex justify-end items-end md:pt-0 pt-10">
              <Button variant="secondary">Share Meal</Button>
            </div>
          </div>
        </form>
      </section>
    </main>
  );
}
