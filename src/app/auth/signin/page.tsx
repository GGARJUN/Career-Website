import Navbar from "@/app/secondary/navbar/Navbar";
import Signin from "@/components/Auth/SignIn";
import Breadcrumb from "@/components/Common/Breadcrumb";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sign In | Play SaaS Starter Kit and Boilerplate for Next.js",
};

const SigninPage = () => {
  return (
    <>
      <Navbar />
      {/* <Breadcrumb pageName="Sign In Page" /> */}

      <Signin />
    </>
  );
};

export default SigninPage;
