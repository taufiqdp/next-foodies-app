import Image from "next/image";
import Link from "next/link";
import BurgerImage from "../assets/burger.jpg";

export default function Card() {
  return (
    <Link
      href="#"
      className="flex m-3 items-center border border-neutral-700 md:flex-row md:max-w-xl flex-col hover:bg-neutral-900"
    >
      <Image
        height={200}
        width={200}
        priority
        className="object-cover rounded-t-lg md:h-auto"
        src={BurgerImage}
        alt="an image"
      />
      <div className="flex flex-col justify-between p-4 leading-normal">
        <h5 className="mb-2 font-bold tracking-tight text-rose-50">
          Noteworthy technology acquisitions 2021
        </h5>
        <p className="mb-3 text-gray-500">
          Here are the biggest enterprise technology acquisitions of 2021 so
          far, in reverse chronological order.
        </p>
      </div>
    </Link>
  );
}
