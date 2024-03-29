import Navbar from "@/app/secondary/navbar/Navbar";
import SignUp from "@/components/Auth/SignUp";
import Breadcrumb from "@/components/Common/Breadcrumb";
import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Sign Up | Play SaaS Starter Kit and Boilerplate for Next.js",
};

const SignupPage = () => {
  return (
    <>
    {/* <Navbar /> */}
      {/* <Breadcrumb pageName="Sign Up Page" /> */}

      <SignUp />
    </>
  );
};

export default SignupPage;
