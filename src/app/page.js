import AuthenticatedLayout from "@/layouts/AuthenticatedLayout";
import ActiveMenuWidget from "@/components/home/ActiveMenuWidget";
import BusinessInfoWidget from "@/components/home/BusinessInfoWidget";
import TotalVisitorWidget from "@/components/home/TotalVisitorWidget";

export default function Home() {
  return (
    <>
      <AuthenticatedLayout>
        <div className="w-full h-full flex flex-col items-center">
          <div className="w-full flex flex-row md:px-2 md:py-1">
            <div className="w-10 md:hidden"></div>
            <div className="md:w-[55%] 2xl:w-[53%] px-2 py-1 flex flex-col md:flex-row md:justify-between md:items-center">
              <h2 className="text-2xl font-thin text-gray-800">Welcome Home</h2>
              <span className="w-auto text-xs md:text-sm text-center py-1 px-2 mt-1 md:mt-2 text-thin text-gray-500 bg-gray-100 rounded-xl">
                Sun Jan 26 1:17 PM
              </span>
            </div>
          </div>
          <div className="w-full mt-2 2xl:mt-4 py-2 px-1 flex flex-col justify-center items-center">
            <div className="w-full flex justify-center items-center md:order-2">
              <ActiveMenuWidget />
            </div>

            <div className="w-full md:w-[90%] 2xl:w-[60%] 2xl:my-2 flex flex-col md:flex-row md:order-1 md:px-4 justify-center md:justify-between items-center">
              <BusinessInfoWidget />
              <TotalVisitorWidget />
            </div>
          </div>
        </div>
      </AuthenticatedLayout>
    </>
  );
}
