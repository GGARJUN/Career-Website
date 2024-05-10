"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";

const variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const svg = {
  hidden: {
    opacity: 0,
    x: 50,
  },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 1,
    },
  },
};

const content = {
  hidden: {
    opacity: 0,
    x: -50,
  },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 1,
    },
  },
};

const second = {
  hidden: {
    opacity: 0,
    y: 100,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
    },
  },
};

const toptobottom = {
  hidden: {
    opacity: 0,
    y: -100,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
    },
  },
};
import Navbar from "./navbar/Navbar";

const page = () => {
  return (
    <>
      <Navbar />
      <section
        id="home"
        className="relative overflow-hidden pt-[120px] md:pt-[130px] lg:pt-[160px] "
      >
        {/* -------------First-------------- */}

        <div className="mx-5 items-center justify-between  gap-20 md:flex md:w-full md:px-20">
          <motion.div
            initial="hidden"
            animate="show"
            variants={content}
            className="items-start gap-5 md:flex  md:w-[500px]  md:flex-col  "
          >
            <h3 className="mt-3 text-lg font-semibold text-blue-700 md:mt-0  ">
              TRUSTED BY 2,20,000+ USERS
            </h3>
            <h1 className="text-[40px] font-bold leading-[50px] text-[#2a3166]">
              Discover Yourself and Your Ideal Career
            </h1>
            <p className="mt-3 text-slate-500 md:mt-0 ">
              Get expert career guidance, counselling and mentorship to find out
              which future path you will enjoy and excel at.
            </p>
            <Link href={"/auth/signup"} passHref>
              <button className="mt-3 rounded-full bg-blue-700 px-12 py-3 font-medium text-white md:mt-0">
                GET STARTED
              </button>
            </Link>
          </motion.div>
          <motion.div
            variants={variants}
            initial="hidden"
            animate="show"
            className=" mt-5 md:h-96 md:w-[50%] "
          >
            <motion.img
              src="images/hero/career-side.svg"
              alt="side"
              variants={svg}
            />
          </motion.div>
        </div>

        {/* -------------Second-------------- */}

        <div>
          <motion.div
            initial="hidden"
            animate="show"
            variants={variants}
            className=" mb-20 mt-5 items-center justify-between gap-10 px-10 md:flex"
          >
            <motion.div
              variants={second}
              className=" rounded-xl p-4 shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)]"
            >
              <div>
                <h1 className="text-lg font-medium text-[#2a3166]">
                  8<sup>th</sup> - 9<sup>th</sup> Students
                </h1>
                <span className="border-red mt-3 flex w-16 border-2"></span>
              </div>
              <p className="mt-6 font-light text-slate-500">
                Choose the right stream and subject
              </p>
              <h3 className="mt-3 flex font-semibold text-blue-800">
                Know More <ChevronRight />
              </h3>
            </motion.div>

            <motion.div
              variants={second}
              className=" rounded-xl p-4 shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)]"
            >
              <div>
                <h1 className="text-lg font-medium text-[#2a3166]">
                  10<sup>th</sup> - 12<sup>th</sup> Students
                </h1>
                <span className="border-red mt-3 flex w-16 border-2"></span>
              </div>
              <p className="mt-6 font-light text-slate-500">
                Choose the right stream and subject
              </p>
              <h3 className="mt-3 flex font-semibold text-blue-800">
                Know More <ChevronRight />
              </h3>
            </motion.div>

            <motion.div
              variants={second}
              className=" rounded-xl p-4 shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)]"
            >
              <div>
                <h1 className="text-lg font-medium text-[#2a3166]">
                  College Graduates
                </h1>
                <span className="border-red mt-3 flex w-16 border-2"></span>
              </div>
              <p className="mt-6 font-light text-slate-500">
                Choose the right stream and subject
              </p>
              <h3 className="mt-3 flex font-semibold text-blue-800">
                Know More <ChevronRight />
              </h3>
            </motion.div>

            <motion.div
              variants={second}
              className=" rounded-xl p-4 shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)]"
            >
              <div>
                <h1 className="text-lg font-medium text-[#2a3166]">
                  Working Professionals
                </h1>
                <span className="border-red mt-3 flex w-16 border-2"></span>
              </div>
              <p className="mt-6 font-light text-slate-500">
                Choose the right stream and subject
              </p>
              <h3 className="mt-3 flex font-semibold text-blue-800">
                Know More <ChevronRight />
              </h3>
            </motion.div>
          </motion.div>
        </div>

        {/* -------------Third-------------- */}

        <div>
          <h1 className="px-20 text-center text-[40px] font-bold leading-[50px] text-[#2a3166]">
            Here&apos;s How India is Getting #CareerReady with Mentoria
          </h1>
          <Link href={"/auth/signup"} passHref>
            <div className="mt-10 flex items-center justify-center">
              <button className="rounded-full bg-blue-700 px-12 py-3 font-medium text-white">
                GET STARTED
              </button>
            </div>
          </Link>

          {/* -------------Third Sub-------------- */}

          <motion.div
            variants={variants}
            initial="hidden"
            animate="show"
            className="my-20 items-center justify-between px-20 md:flex"
          >
            <div className="flex flex-col items-center justify-center">
              <motion.img
                src="images/hero/hero1.png"
                alt="side"
                variants={toptobottom}
                className="h-44 w-44"
              />
              <span className="border-red my-5 flex  w-16 border-2 "></span>
              <h1 className="text-4xl font-extrabold text-blue-800">
                2,20,000+
              </h1>
              <p className="my-2 text-xl text-slate-500">Users</p>
            </div>

            <div className="flex flex-col items-center justify-center">
              <motion.img
                src="images/hero/hero2.png"
                alt="side"
                variants={toptobottom}
                className="h-44 w-44"
              />
              <span className="border-red my-5 flex  w-16 border-2 "></span>
              <h1 className="text-4xl font-extrabold text-blue-800">100+</h1>
              <p className="my-2 text-xl text-slate-500">Education Partners</p>
              <h2 className="flex font-medium text-blue-700">
                Explore <ChevronRight />
              </h2>
            </div>

            <div className="flex flex-col items-center justify-center">
              <motion.img
                src="images/hero/hero3.png"
                alt="side"
                variants={toptobottom}
                className="h-44 w-44"
              />
              <span className="border-red my-5 flex  w-16 border-2 "></span>
              <h1 className="text-4xl font-extrabold text-blue-800">120+</h1>
              <p className="my-2 text-xl text-slate-500">Corporate Partners</p>
              <h2 className="flex font-medium text-blue-700">
                Explore <ChevronRight />
              </h2>
            </div>

            <div className="flex flex-col items-center justify-center">
              <motion.img
                src="images/hero/hero4.png"
                alt="side"
                variants={toptobottom}
                className="h-44 w-44"
              />
              <span className="border-red my-5 flex  w-16 border-2 "></span>
              <h1 className="text-4xl font-extrabold text-blue-800">8+</h1>
              <p className="my-2 text-xl text-slate-500">
                Govt & Foundation Partners
              </p>
              <h2 className="flex font-medium text-blue-700">
                Explore <ChevronRight />
              </h2>
            </div>
          </motion.div>
        </div>

        {/* -------------Fourth-------------- */}

        <div className="relative left-[15%] my-20  w-full ">
          <div className=" flex h-96 w-[70%] flex-col  items-center justify-center gap-8 rounded-2xl bg-[#030863] p-5 text-white">
            <h4 className="mt-10 text-lg font-medium">
              TRUSTED BY 2,20,000+ USERS
            </h4>
            <h1 className="px-28 text-center text-4xl font-bold ">
              <span className="text-blue">The Mentoria Solution</span> is lot
              more than assessment and counselling.{" "}
            </h1>
            <button className="rounded-full bg-blue-700 px-16 py-3 font-medium">
              GET STARTED
            </button>
            <div className="absolute  right-[300px] top-20 h-10 w-10 animate-bounce rounded-full bg-yellow-400 shadow-2xl blur-sm"></div>
            <div className=" absolute -top-10  right-[350px] -z-10 h-28 w-28 rounded-full bg-blue-700 shadow-2xl  blur-sm"></div>
            <div className="absolute -bottom-10 -left-20 -z-10 h-40 w-40 rounded-full bg-[#BD1E24]  shadow-2xl blur-sm "></div>
          </div>
        </div>

        {/* -------------five-------------- */}

        <div className="my-10">
          <h1 className="text-center text-5xl font-bold text-blue-800">
            How it works
          </h1>
          <hr className="mx-20 mt-5 border border-slate-300  " />
          <div className=" mt-5 flex flex-col justify-center  gap-10 rounded-3xl  py-5 shadow-2xl drop-shadow-2xl md:mx-28">
            <div className="justify-center gap-10 py-5 md:flex">
              <div className=" w-[60%]">
                <h2 className="text-lg font-light text-slate-600">STEP 1</h2>
                <h1 className="mt-3 text-4xl font-bold text-[#1C0152] ">
                  Take the Career Assessment
                </h1>
                <p className="mt-2 text-base font-light text-slate-600">
                  We’ve partnered with some of India’s top psychologists and
                  psychometricians from premium institutions to create India’s
                  most reliable assessment. It will scientifically measure your
                  interests, personality and abilities, and enable you to
                  discover which academic and career path you would enjoy and
                  excel at. Get a clear analysis at the next step - career
                  counselling.​
                </p>
                <Link href={'/assessment'}>
                  <button className="mt-5 rounded-full bg-blue-800 px-16 py-3 font-medium text-white">
                    GET STARTED
                  </button>
                </Link>
                <h2 className="mt-4 flex font-medium text-blue-700">
                  VIEW SAMPLE REPORT <ChevronRight />
                </h2>
              </div>
              <div className="flex items-center justify-center">
                <motion.img
                  src="images/hero/Step_1Crop.png"
                  alt="side"
                  variants={toptobottom}
                  className="h-44 w-44"
                />
              </div>
            </div>

            <div className="flex justify-center  gap-10 py-5">
              <div className="w-[60%]">
                <h2 className="text-lg font-light text-slate-600">STEP 2</h2>
                <h1 className="mt-3 text-4xl font-bold text-[#1C0152] ">
                  Get Career Counselling
                </h1>
                <p className="mt-2 text-base font-light text-slate-600">
                  Get a one-on-one session with India’s top Career Counsellors
                  and Coaches to deep-dive into your psychometric report,
                  understand your interests and potential careers, analyse your
                  personality and abilities, and come up with a learning plan
                  for your development areas. Our counsellors will help you
                  shortlist your ideal career options and the pathway to get
                  there. For students in Class 8-12, parents also get to attend
                  the last 15-20 mins of this session. Plus plan users get
                  multiple career counselling sessions with our top counsellors
                  and customised reports after each session.​
                </p>
                <button className="mt-5 rounded-full bg-blue-800 px-16 py-3 font-medium text-white">
                  GET STARTED
                </button>
                <h2 className="mt-4 flex font-medium text-blue-700">
                  VIEW PLUS REPORT <ChevronRight />
                </h2>
              </div>
              <div className="flex items-center justify-center">
                <motion.img
                  src="images/hero/Step_2Crop.png"
                  alt="side"
                  variants={toptobottom}
                  className="h-44 w-44"
                />
              </div>
            </div>

            <div className="flex justify-center  gap-10 py-5">
              <div className="w-[60%]">
                <h2 className="text-lg font-light text-slate-600">STEP 3</h2>
                <h1 className="mt-3 text-4xl font-bold text-[#1C0152] ">
                  Explore Career Articles
                </h1>
                <p className="mt-2 text-base font-light text-slate-600">
                  Get to know your chosen careers in detail through Mentoria’s
                  Career Library. Find out which courses you need to prepare
                  for, skills you need to develop, eventual specialisations in
                  your career, how much you will earn in those careers and much
                  more. You can also explore additional information on courses,
                  careers and more through Mentoria’s blog, and get all your
                  career-related queries answered through Mentoria’s career
                  helpline.​
                </p>
                <button className="mt-5 rounded-full bg-blue-800 px-16 py-3 font-medium text-white">
                  GET STARTED
                </button>
                <h2 className="mt-4 flex font-medium text-blue-700">
                  VIEW CAREER REPORT <ChevronRight />
                </h2>
              </div>
              <div className="flex items-center justify-center">
                <motion.img
                  src="images/hero/Step_3Crop.png"
                  alt="side"
                  variants={toptobottom}
                  className="h-44 w-44"
                />
              </div>
            </div>

            <div className="flex justify-center  gap-10 py-5">
              <div className="w-[60%]">
                <h2 className="text-lg font-light text-slate-600">STEP 4</h2>
                <h1 className="mt-3 text-4xl font-bold text-[#1C0152] ">
                  Get Guidance from Industry Experts​
                </h1>
                <p className="mt-2 text-base font-light text-slate-600">
                  Find out what really goes on in your chosen careers through
                  pre-recorded webinars by experts from different industries.
                  Get to know the day-to-day workings, top challenges, industry
                  insights and more. Plus plan users get exclusive invites to
                  live webinars with experts.​
                </p>
                <button className="mt-5 rounded-full bg-blue-800 px-16 py-3 font-medium text-white">
                  GET STARTED
                </button>
                <h2 className="mt-4 flex font-medium text-blue-700">
                  VIEW SAMPLE REPORT <ChevronRight />
                </h2>
              </div>
              <div className="flex items-center justify-center">
                <motion.img
                  src="images/hero/Step_4Crop.png"
                  alt="side"
                  variants={toptobottom}
                  className="h-44 w-44"
                />
              </div>
            </div>

            <div className="flex justify-center  gap-10 py-5">
              <div className="w-[60%]">
                <h1 className="mt-3 text-4xl font-bold text-[#1C0152] ">
                  Additional Services​
                </h1>
                <p className="mt-2 text-base font-light text-slate-600">
                  Planning your college admissions in India or abroad? Get a
                  customised College Admissions Planner based on your
                  location/budget preferences with unbiased recommendations.
                  Planning to apply for jobs or internships? Check out our
                  JobReady packages!​
                </p>
                <button className="mt-5 rounded-full bg-blue-800 px-16 py-3 font-medium text-white">
                  CALL A MENTOR
                </button>
                <h2 className="mt-4 flex font-bold text-blue-700">
                  VIEW COLLEGE ADMISSION PLANNERS <ChevronRight />
                </h2>
                <h2 className="mt-4 flex font-bold text-blue-700">
                  VIEW JOBREADY PACKAGES <ChevronRight />
                </h2>
              </div>
              <div className="flex items-center justify-center">
                <motion.img
                  src="images/hero/step_5img.png"
                  alt="side"
                  variants={toptobottom}
                  className="h-44 w-44"
                />
              </div>
            </div>
          </div>
        </div>

        {/* -------------Six-------------- */}

        <div className="pt-10">
          <h1 className="text-center text-4xl font-bold text-blue-900">
            Meet Our Team
          </h1>
          <p className="text- mt-5 text-center text-lg font-medium text-slate-600">
            Our career counsellors and coaches undergo a rigorous training and
          </p>
          <p className="text-center text-lg font-medium  text-slate-600">
            certificationprogramme. We partner with experienced psychologists,
            educators and HR
          </p>
          <p className="text-center text-lg font-medium text-slate-600">
            professionalsto conduct meaningful sessions for our users.
          </p>
          <div className="mx-10 my-14 flex flex-col items-center justify-center gap-10  ">
            <div className="flex h-60 w-[600px] items-center justify-around gap-10 rounded-xl border-2 px-3  shadow-xl ">
              <Image
                src="/images/hero/arjun.jpg"
                alt="lo"
                width={200}
                height={100}
                className="bg-blue rounded-full  p-1 drop-shadow-xl"
              />
              <div className="w-[50%]">
                <h1 className="text-center text-4xl font-bold text-blue-600">
                  ARJUN G G
                </h1>
                <p className="my-2 text-center text-slate-500">
                  Software Developer
                </p>
                <hr className=" mb-5  w-full border border-slate-900  " />
                <p className="text-center text-lg text-slate-500">
                  Team Leader
                </p>
              </div>
            </div>
            <div className="flex h-60 w-[600px] items-center justify-around gap-10 rounded-xl border-2 px-3  shadow-xl ">
              <div className="w-[50%]">
                <h1 className="text-center text-4xl font-bold text-blue-600">
                  ARJUN G G
                </h1>
                <p className="my-2 text-center text-slate-500">
                  Software Developer
                </p>
                <hr className=" mb-5  w-full border border-slate-900  " />
                <p className="text-center text-lg text-slate-500">
                  Team Leader
                </p>
              </div>
              <Image
                src="/images/hero/arjun.jpg"
                alt="lo"
                width={200}
                height={100}
                className="bg-blue rounded-full  p-1 drop-shadow-xl"
              />
            </div>
            <div className="flex h-60 w-[600px] items-center justify-around gap-10 rounded-xl border-2 px-3  shadow-xl ">
              <Image
                src="/images/hero/arjun.jpg"
                alt="lo"
                width={200}
                height={100}
                className="bg-blue rounded-full  p-1 drop-shadow-xl"
              />
              <div className="w-[50%]">
                <h1 className="text-center text-4xl font-bold text-blue-600">
                  ARJUN G G
                </h1>
                <p className="my-2 text-center text-slate-500">
                  Software Developer
                </p>
                <hr className=" mb-5  w-full border border-slate-900  " />
                <p className="text-center text-lg text-slate-500">
                  Team Leader
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* -------------Seven-------------- */}

        <div></div>
      </section>
    </>
  );
};

export default page;
