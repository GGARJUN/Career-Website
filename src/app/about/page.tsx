import About from "@/components/About";
import Breadcrumb from "@/components/Common/Breadcrumb";
import Header from "@/components/Header";
import Team from "@/components/Team";
import { Metadata } from "next";
import Navbar from "../secondary/navbar/Navbar";

export const metadata: Metadata = {
  title:
    "About Us | Play SaaS Starter Kit and Boilerplate for Next.js",
  description: "This is About page description",
};

const AboutPage = () => {
  return (
    <main>
      <Navbar/>
      <Breadcrumb pageName="About Us Page" />
      <About />
      <Team />
    </main>
  );
};

export default AboutPage;
