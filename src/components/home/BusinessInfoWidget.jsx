import PrimaryButton from "@/Components/PrimaryButton";

export default function BusinessInfoWidget() {
  return (
    <>
      <div className="w-[90%] md:w-[35%] 2xl:w-[35%] my-4 h-full border px-2 py-1 border-gray-100 rounded-xl shadow-md shadow-gray-100">
        <div className="w-full flex flex-row justify-between items-center border-b">
          <div className="px-2 py-1">
            <h3 className="text-sm md:text-lg 2xl:text-2xl font-bold">
              Business Profile
            </h3>
          </div>
          <PrimaryButton
            type="button"
            className="m-2 bg-black text-white border-none"
          >
            Update
          </PrimaryButton>
        </div>
        <div className="w-full my-2 px-2 flex flex-row justify-center items-center">
          <div className="w-[50%] flex justify-start items-center">
            <ul className="text-sm md:text-md 2xl:text-xl font-light">
              <li className="p-1 2xl:p-3">
                <span>Resto name</span>
              </li>
              <li className="p-1 2xl:p-3">
                <span>street address</span>
              </li>
              <li className="p-1 2xl:p-3">
                <span>xxx xxx-xxxx</span>
              </li>
              <li className="p-1 2xl:p-3">
                <span>info@email.com</span>
              </li>
            </ul>
          </div>
          <div className="w-[50%] md:w-[60%] flex justify-center items-center">
            <img
              src="https://ik.imagekit.io/bqofr3ncj/Projects/POLUETMANIQUEPNG.png?updatedAt=1725557649846"
              alt="Business logo"
              className="object-cover w-[80%] md:w-[70%]"
            />
          </div>
        </div>
      </div>
    </>
  );
}
