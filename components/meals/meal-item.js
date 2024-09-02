import Link from "next/link";
import Image from "next/image";
import { buttonVariants } from "../ui/button";

export default function MealItem({ title, slug, image, summary, creator }) {
  return (
    <article>
      <div className="rounded overflow-hidden shadow-lg flex flex-col">
        <div className="relative">
          <div className="w-full h-[350px]">
            <Image
              src={image}
              alt="Sunset in the mountains"
              layout="fill"
              objectFit="cover"
              className="w-full h-full"
            />
            <div className="hover:bg-transparent transition duration-300 absolute bottom-0 top-0 right-0 left-0 bg-gray-900 opacity-25"></div>
          </div>
        </div>
        <div className="px-6 py-4 mb-auto bg-neutral-900">
          <Link
            href={`/meals/${slug}`}
            className="font-semibold text-lg hover:text-rose-500 transition duration-500 ease-in-out inline-block"
          >
            {title}
          </Link>
          <p className="italic text-sm text-neutral-500 mb-4">by {creator}</p>

          <p className="text-neutral-300 text-sm">{summary}</p>

          <div className="flex justify-end items-end pt-5">
            <Link
              href={`/meals/${slug}`}
              className={`${buttonVariants({ variant: "link" })} text-rose-50`}
            >
              View Detail
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
}
