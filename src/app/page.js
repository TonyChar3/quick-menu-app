"use client";
import AuthenticatedLayout from "@/layouts/AuthenticatedLayout";

export default function Home() {
  return (
    <>
      <AuthenticatedLayout>
        <div className="w-full h-full flex flex-col items-center">
          <h1>Menu page</h1>
        </div>
      </AuthenticatedLayout>
    </>
  );
}
