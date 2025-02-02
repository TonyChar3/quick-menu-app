import { Link2, UtensilsCrossed } from "lucide-react";
import PrimaryButton from "../PrimaryButton";
import Link from "next/link";

export default function ActiveMenuWidget() {
  return (
    <>
      <div className="w-[95%] md:w-[50%] 2xl:w-[30%] border px-2 py-1 my-4 md:my-3 2xl:my-6 border-gray-100 rounded-xl shadow-md shadow-gray-100">
        <div className="w-full flex flex-row justify-between items-center border-b">
          {/* unpublish button */}
          <PrimaryButton
            type="button"
            className="m-2 bg-red-500 text-white border-none"
          >
            Unpublish
          </PrimaryButton>
          <div className="px-2 py-1 flex justify-end items-center">
            <div className="w-2 h-2 bg-green-400 rounded-full"></div>
            <h3 className="ms-2 text-sm md:text-md font-bold">Active menu</h3>
          </div>
        </div>
        <Link
          href="/home"
          className="w-full py-2 px-1 flex justify-center items-center"
        >
          <img
            src="https://ik.imagekit.io/bqofr3ncj/Projects/Screenshot%202025-01-29%20at%2011.41.06%E2%80%AFAM.png?updatedAt=1738168886726"
            alt="cover snapshot of the active menu"
            className="w-full h-full md:w-[90%] object-cover aspect-video rounded-xl"
          />
        </Link>
        <div className="w-full flex flex-row justify-center items-center">
          <div className="w-full my-1 px-2 flex justify-start items-center">
            <Link2 size={38} className="py-1 px-2 border rounded-s-lg" />
            <span className="py-2 px-2 border text-sm md:text-md text-gray-700 rounded-e-lg">
              https://www.exemple-link.com
            </span>
          </div>
          {/* update meals list */}
          <PrimaryButton
            type="button"
            className="m-2 bg-white text-black border-black"
          >
            <UtensilsCrossed size={20} />
          </PrimaryButton>
        </div>
      </div>
    </>
  );
}
