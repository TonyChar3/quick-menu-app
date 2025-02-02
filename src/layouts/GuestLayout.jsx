export default function GuestLayout({ children }) {
  return (
    <div className="md:relative w-full h-full flex flex-col justify-centers items-center md:flex-row">
      <div className="hidden p-6 md:absolute md:flex md:p-4 md:w-[10%] lg:static lg:w-[50%] h-full justify-start items-center">
        <div className="relative w-full h-full rounded-3xl">
          <img
            src="https://ik.imagekit.io/bqofr3ncj/Projects/pexels-francesco-ungaro-281260.jpg?updatedAt=1737422438738"
            alt="gradient login image"
            width={100}
            height={100}
            className="w-full md:w-[70%] lg:w-full h-full object-cover rounded-3xl"
          />

          <div className="hidden lg:block absolute top-6 left-5">
            <h2 className="text-2xl font-medium">Nice quote</h2>
          </div>

          {/** decorative line */}
          <div className="hidden lg:block absolute top-10 right-20 w-96 h-1 bg-black rounded-lg"></div>

          <div className="hidden w-3/4 lg:block absolute bottom-5 left-4">
            <h3 className="text-8xl font-bold mb-4">Main title</h3>
            <span className="text-lg mt-8">
              More content to just relax the user and make him confident in his
              purchase
            </span>
          </div>
        </div>
      </div>

      <div className="w-[80%] md:w-full lg:w-[50%] md:px-4 h-full flex flex-col justify-center items-center">
        <div className="absolute top-1 md:top-4">
          <h1 className="font-bold text-sm">MenuMaker.io</h1>
        </div>
        {children}
      </div>
    </div>
  );
}
