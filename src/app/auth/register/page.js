"use client";
import { useState, useEffect } from "react";
import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import GuestLayout from "@/Layouts/GuestLayout";
import { Eye, EyeOff } from "lucide-react";
import Link from "next/link";
import { redirect } from "next/navigation";

export default function Register() {
  const [first_step, setFirstStep] = useState(true);
  const [enable_next_step, setNextStep] = useState(true);
  const [toggle_password, setTogglePassword] = useState(false);
  const [data, setData] = useState({
    email: "",
    password: "",
    password_confirmation: "",
  });

  const submit = (e) => {
    e.preventDefault();

    redirect("/");
  };

  // switch to next step in the register process
  const toggleNextStep = () => {
    setFirstStep((first_step) => !first_step);
  };

  // to toggle the password input type "text" <=> "password"
  const togglePassword = () => {
    setTogglePassword((togglePassword) => !togglePassword);
  };

  useEffect(() => {
    if (data?.email?.length > 3) {
      setNextStep(false);
    } else {
      setNextStep(true);
    }
  }, [data]);

  return (
    <GuestLayout>
      <div className="w-full md:w-[60%] flex flex-col justify-center items-center">
        <h2 className="font-medium text-4xl md:text-5xl">Get started now</h2>
        <span className="text-xs md:text-sm font-light p-1">
          Enter your email to start setting up your account
        </span>
        <form onSubmit={submit} className="w-full mt-6">
          {first_step ? (
            <>
              <div className="mt-4">
                <InputLabel htmlFor="email" value="Email" />

                <TextInput
                  id="email"
                  type="email"
                  name="email"
                  value={data.email || ""}
                  className="mt-1 block w-full placeholder:font-light placeholder:text-sm"
                  autoComplete="username"
                  onChange={(e) => setData({ ...data, email: e.target.value })}
                  required
                />

                <InputError message="" className="mt-2" />
              </div>
            </>
          ) : (
            <>
              <div className="mt-4">
                <InputLabel htmlFor="password" value="Password" />

                <div className="relative w-full">
                  <TextInput
                    id="password"
                    type={toggle_password ? "text" : "password"}
                    name="password"
                    value={data.password || ""}
                    className="mt-1 block w-full placeholder:font-light placeholder:text-sm"
                    autoComplete="current-password"
                    placeholder="Enter your password"
                    onChange={(e) =>
                      setData({ ...data, password: e.target.value })
                    }
                  />
                  <button
                    type="button"
                    className="absolute right-1 top-2.5 text-gray-500 hover:text-gray-700 focus:outline-none"
                    onClick={() => togglePassword()}
                  >
                    {toggle_password ? <Eye size={20} /> : <EyeOff size={20} />}
                  </button>
                </div>

                <InputError message="" className="mt-2" />
              </div>

              <div className="mt-4">
                <InputLabel
                  htmlFor="password_confirmation"
                  value="Confirm Password"
                />

                <TextInput
                  id="password_confirmation"
                  type="password"
                  name="password_confirmation"
                  value={data.password_confirmation || ""}
                  className="mt-1 block w-full"
                  autoComplete="new-password"
                  onChange={(e) =>
                    setData({ ...data, password_confirmation: e.target.value })
                  }
                  required
                />

                <InputError message="" className="mt-2" />
              </div>
            </>
          )}

          <div className="mt-6 flex items-center justify-center">
            {first_step ? (
              <>
                <PrimaryButton
                  type="button"
                  className="mx-auto w-[90%] md:w-[70%] bg-black text-white"
                  onClick={() => toggleNextStep()}
                  disabled={enable_next_step}
                >
                  Next
                </PrimaryButton>
              </>
            ) : (
              <>
                <PrimaryButton className="mx-auto w-[90%] md:w-[70%] bg-black text-white">
                  Register
                </PrimaryButton>
              </>
            )}
          </div>

          <div className="w-full mt-8 flex justify-center items-center">
            {first_step ? (
              <>
                <Link
                  href="/auth/login"
                  className="rounded-md text-md font-bold text-gray-600 underline"
                >
                  Already registered ?
                </Link>
              </>
            ) : (
              <></>
            )}
          </div>
        </form>
      </div>
    </GuestLayout>
  );
}
