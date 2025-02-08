"use client";
import { useState } from "react";
import Checkbox from "@/Components/Checkbox";
import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/components/MainButton";
import TextInput from "@/Components/TextInput";
import GuestLayout from "@/layouts/GuestLayout";
import { Eye, EyeOff } from "lucide-react";
import Link from "next/link";

export default function Login({ status, canResetPassword }) {
  const [toggle_password, setTogglePassword] = useState(false);

  const submit = (e) => {
    e.preventDefault();
  };

  // toggle the password input type to show the password
  const togglePassword = () => {
    setTogglePassword((togglePassword) => !togglePassword);
  };

  return (
    <GuestLayout>
      <div className="w-full md:w-[60%] flex flex-col justify-center items-center">
        <h2 className="font-medium text-4xl md:text-5xl">Welcome Back</h2>
        <span className="text-xs md:text-sm font-light p-1">
          Enter your email & password to access your account
        </span>
        <form onSubmit={submit} className="w-full mt-6">
          <div>
            <InputLabel htmlFor="email" value="email" />

            <TextInput
              id="email"
              type="email"
              name="email"
              className="mt-1 block w-full placeholder:font-light placeholder:text-sm"
              autoComplete="username"
              isFocused={true}
              placeholder="Enter your email"
            />

            <InputError message="" className="mt-2" />
          </div>

          <div className="mt-4">
            <InputLabel htmlFor="password" value="password" />

            <div className="relative w-full">
              <TextInput
                id="password"
                type={toggle_password ? "text" : "password"}
                name="password"
                className="mt-1 block w-full placeholder:font-light placeholder:text-sm"
                autoComplete="current-password"
                placeholder="Enter your password"
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

          <div className="mt-4 flex flex-row justify-between items-center">
            <label className="flex items-center">
              <Checkbox name="remember" />
              <span className="ms-2 text-sm text-gray-600">Remember me</span>
            </label>
            {canResetPassword && (
              <Link
                href="/password_reset"
                className="rounded-md text-sm text-gray-600 hover:text-gray-900"
              >
                Forgot your password?
              </Link>
            )}
          </div>

          <div className="mt-8 flex flex-col items-center justify-end">
            <PrimaryButton className="mx-auto w-[90%] md:w-[70%] bg-black text-white">
              Connect
            </PrimaryButton>
            <PrimaryButton
              className="mx-auto mt-6 w-[90%] md:w-[70%] border border-gray-500 text-black"
              type="button"
            >
              Google sign-in
            </PrimaryButton>
          </div>
          <div className="w-full mt-8 flex justify-center items-center">
            <span className="text-md font-light">
              No account yet ?{" "}
              <Link href="/auth/register" className="underline font-bold ms-1">
                Get started now
              </Link>
            </span>
          </div>
        </form>
      </div>
    </GuestLayout>
  );
}
