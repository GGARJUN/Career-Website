import Breadcrumb from "@/components/Common/Breadcrumb";
import Faq from "@/components/Faq";
import Pricing from "@/components/Pricing";
import { Metadata } from "next";
import Navbar from "../secondary/navbar/Navbar";
import NewSite from "@/components/NewSite";

export const metadata: Metadata = {
  title:
    "Pricing Page | Play SaaS Starter Kit and Boilerplate for Next.js",
  description: "This is pricing page description",
};

const PricingPage = () => {
  return (
    <>
      <Navbar />
      <Breadcrumb pageName="Pricing Page" />
      <NewSite/>
      {/* <Pricing /> */}
      {/* <Faq /> */}
    </>
  );
};

export default PricingPage;
