import Breadcrumb from "@/components/Common/Breadcrumb";
import { Metadata } from "next";
import Navbar from "../secondary/navbar/Navbar";
import NewSite from "@/components/NewSite";
import Link from "next/link";

export const metadata: Metadata = {
  title: "CareerGaidence AI",
 
};
const PricingPage = () => {
  return (
    <>
      <Navbar />
      <Breadcrumb pageName="Assessment Test"  />
      <span className="border-2 my-4 drop-shadow-2xl flex border-blue-600"></span>
      <NewSite/>
      
    </>
  );
};

export default PricingPage;