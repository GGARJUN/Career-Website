"use client";

import Navbar from "../../../secondary/navbar/Navbar";
import Breadcrumb from "@/components/Common/Breadcrumb";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import Typewriter from "react-typewriter-effect";

const CareerOptions = () => {
  const careerOptions = [
    {
      option: "Engineering",
      description:
        "Engineers design, build, and maintain machines, structures, and systems.",
        link:"https://en.wikipedia.org/wiki/Engineering"
    },
    {
      option: "Doctor",
      description: "Doctors diagnose and treat injuries and illnesses.",
      link:"https://www.practo.com/"
    },
    {
      option: "Teacher",
      description: "Teachers educate students in various subjects and skills.",
      link:"https://en.wikipedia.org/wiki/Teacher"
    },
    {
      option: "Artist",
      description:
        "Artists create art to communicate ideas, thoughts, and feelings.",
        link:"https://mymodernmet.com/famous-artists/"
    },
    {
      option: "Scientist",
      description:
        "Scientists conduct research to advance knowledge in various fields.",
        link:"https://en.wikipedia.org/wiki/Scientist"
    },
    {
      option: "Entrepreneur",
      description:
        "Entrepreneurs start and manage businesses, taking on financial risks.",
        link:"https://www.entrepreneur.com/"
    },
    {
      option: "Writer",
      description:
        "Writers create written content for books, articles, and other publications.",
        link:"https://writer.com/"
    },
  ];

  const randomOption =
    careerOptions[Math.floor(Math.random() * careerOptions.length)];
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 5000); // 5-second delay

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Navbar />
      <div className="-mt-16">
        <Breadcrumb pageName="Result Page" />
      </div>
      <span className="flex border-2 mx-20 border-blue-600 drop-shadow-2xl"></span>
      {loading ? (
        <div className="my-20 flex items-center justify-center">
          <Image
            src={"/images/assessment/loading.gif"}
            width={100}
            height={100}
            alt="loading"
          />
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center">
          <Image
            src={"/images/assessment/tick.gif"}
            height={100}
            width={150}
            alt="checked"
          />
          <div className="border-2 border-blue-600 px-28 py-5 mb-10 rounded-2xl shadow-2xl">
          <h1 className="my-5 text-3xl font-bold">
            Based on your answers, you could be a{" "}
            <span className="text-4xl font-extrabold text-blue-600">
              {randomOption.option} !
            </span>
          </h1>

          <p className="text-center text-lg font-semibold">
            {randomOption.description}
          </p>
          <div className="flex justify-center items-center mt-2  ">
          <Link href={randomOption.link} target="_blank">
            <p className="bg-blue-600 px-10 py-2 font-semibold text-white rounded-xl">Click</p>
          </Link>
          </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CareerOptions;
