import Image from "next/image";
import { buttonVariants } from "@/components/ui/button";

import mealIcon from "@/assets/icons/meal.png";
import communityIcon from "@/assets/icons/community.png";
import eventsIcon from "@/assets/icons/events.png";
import Link from "next/link";

export default function CommunityPage() {
  return (
    <>
      <header className="flex flex-col py-20 text-center items-center space-y-10">
        <h1 className="text-6xl font-bold text-rose-50">
          One shared passion: <span className="text-rose-500">Food</span>
        </h1>
        <p className="text-neutral-400 pb-10">
          Join our community and share your favorite recipes!
        </p>
        <Link
          href="#"
          className={`${buttonVariants({
            variant: "secondary",
          })} w-44`}
        >
          Join the Community
        </Link>
      </header>

      <main className="py-20 space-y-10">
        <h2 className="text-3xl font-bold text-rose-50 text-center">
          Community Perks
        </h2>

        <ul className="flex flex-col items-center text-center space-y-16 py-10">
          <li className="flex flex-col items-center">
            <div className="flex justify-center items-center w-48 h-48">
              <Image
                src={mealIcon}
                alt="A delicious meal"
                className="object-contain"
              />
            </div>
            <p className="text-xl font-medium mt-2">Share & discover recipes</p>
          </li>
          <li className="flex flex-col items-center">
            <div className="flex justify-center items-center w-48 h-48">
              <Image
                src={communityIcon}
                alt="A crowd of people, cooking"
                className="object-contain"
              />
            </div>
            <p className="text-xl font-medium mt-2">
              Find new friends & like-minded people
            </p>
          </li>
          <li className="flex flex-col items-center">
            <div className="flex justify-center items-center w-48 h-48">
              <Image
                src={eventsIcon}
                alt="A crowd of people at a cooking event"
                className="object-contain"
              />
            </div>
            <p className="text-xl font-medium mt-2">
              Participate in exclusive events
            </p>
          </li>
        </ul>
      </main>
    </>
  );
}
