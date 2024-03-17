import Breadcrumb from "@/components/Common/Breadcrumb";
import Contact from "@/components/Contact";
import { Metadata } from "next";
import Navbar from "../secondary/navbar/Navbar";

export const metadata: Metadata = {
  title: "Contact Page | Play SaaS Starter Kit and Boilerplate for Next.js",
  description: "This is contact page description",
};

const ContactPage = () => {
  return (
    <>
      <Navbar />
      <Breadcrumb pageName="Contact Page" />

      <Contact />
    </>
  );
};

export default ContactPage;
