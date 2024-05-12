"use client";
import { ChevronRight } from "lucide-react";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function Students() {
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
  return (
    <>
      <div className="mt-28 px-10 ">
        {/* -------------First-------------- */}

        <div className=" flex  w-full items-center justify-between gap-10 px-10 ">
          <div className="w-[50%]">
            <Image
              src="/images/student/2.svg"
              alt="svg"
              width={700}
              height={800}
              className="rounded-full border-4 bg-blue-300 px-5 py-32 shadow-2xl shadow-blue-600"
            />
          </div>
          <div className="flex w-[50%] flex-col  items-center justify-center rounded-xl border-2 pt-10 shadow-2xl shadow-blue-600">
            <h2 className="text-lg font-medium text-blue-700">
              TRUSTED BY 2,20,000+ USERS
            </h2>
            <h1 className="my-2 text-center text-4xl  font-bold">
              CareerGadence AI’s Career Counselling Solution for Classes 10-12
            </h1>
            <p className=" mt-7 w-96 text-center text-base font-medium">
              Discover yourself and your future paths. Find out which subjects,
              exams and courses will give you a headstart in your ideal future
              career.
            </p>
            <div className="m-7 flex w-60 items-center justify-center rounded-full border-2 bg-blue-600  px-10 py-3 text-white transition-all hover:bg-blue-700">
              <button className="font-semibold">GET STARTED</button>
            </div>
          </div>
        </div>

        {/* -------------Second-------------- */}

        <div className="my-20 px-20">
          <h1 className="text-center text-4xl font-bold">
            Choose the Right Course
          </h1>
          <p className="mt-5 text-center text-lg text-slate-600">
            Which course should you choose after Class 12? Which subject
            combinations after Class 10? Which competitive exams do you need to
            prepare for? Here’s why you need career guidance after 10th.
          </p>
          {/* <p className="mt-2 text-center text-lg text-slate-600">
            Here’s why career guidance for Class 8 students is needed to get
            this decision right.
          </p> */}
        </div>

        {/* -------------Third-------------- */}

        <div className="my-10 grid grid-cols-2 gap-14">
          <div className="flex items-center justify-center gap-4 rounded-2xl border-2 px-3 py-7 shadow-2xl shadow-blue-600 ">
            <Image
              src="/images/student/icon1.png"
              alt="icon"
              width={100}
              height={100}
              className="w-[60%]"
            />
            <div>
              <h1 className="text-xl font-bold">850+ Courses After Class 12</h1>
              <p className="mt-2 text-lg text-slate-600">
              Get career guidance after 10th to select the right stream and subject combination. This will make it easier for you to get into your ideal graduation course.
              </p>
            </div>
          </div>

          <div className="flex items-center justify-center gap-4 rounded-2xl border-2 px-3 py-7 shadow-2xl shadow-blue-600">
            <Image
              src="/images/student/icon2.png"
              alt="icon"
              width={100}
              height={100}
              className="w-[60%]"
            />
            <div>
              <h1 className="text-xl font-bold">Entrance Exam Prep</h1>
              <p className="mt-2 text-lg text-slate-600">
              If your graduation course requires you to clear certain entrance exams, the sooner you get clarity, the more time you will have to prepare for these exams.
              </p>
            </div>
          </div>
          <div className="flex items-center justify-center gap-4 rounded-2xl border-2 px-3 py-7 shadow-2xl shadow-blue-600">
            <Image
              src="/images/student/icon3.png"
              alt="icon"
              width={100}
              height={100}
              className="w-[60%]"
            />
            <div>
              <h1 className="text-xl font-bold">Cost of Education</h1>
              <p className="mt-2 text-lg text-slate-600">
              Your parents will invest lakhs in your college studies. Career guidance after 12th will ensure that their money is invested in a course you will enjoy and excel at.
              </p>
            </div>
          </div>
          <div className="flex items-center justify-center gap-4 rounded-2xl border-2 px-3 py-7 shadow-2xl shadow-blue-600">
            <Image
              src="/images/student/icon1.png"
              alt="icon"
              width={100}
              height={100}
              className="w-[60%]"
            />
            <div>
              <h1 className="text-xl font-bold">Get #CareerReady</h1>
              <p className="mt-2 text-lg text-slate-600">
              Get career counselling after 10th and 12th to determine your strengths and development areas; our counsellors will create a great action plan to help you succeed.
              </p>
            </div>
          </div>
        </div>

        {/* -------------Fourth-------------- */}

        <div className="my-20">
          <h1 className="text-center text-5xl font-bold text-blue-800">
            How it works
          </h1>
          <p className="text-center mt-3 text-lg text-slate-600">Here’s how we have enabled 2 lakh+ individuals and 120+ top schools across the country to get #CareerReady.</p>
          <hr className="mx-20 mt-5 border border-slate-300 " />
          <div className=" mt-10 flex w-full flex-col justify-center  gap-10 rounded-3xl border-2  py-5 shadow-2xl drop-shadow-2xl shadow-blue-600">
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
                <button className="mt-5 rounded-full bg-blue-800 px-16 py-3 font-medium text-white">
                  GET STARTED
                </button>
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
                  Get to know your chosen careers in detail through CareerGadence AI’s
                  Career Library. Find out which courses you need to prepare
                  for, skills you need to develop, eventual specialisations in
                  your career, how much you will earn in those careers and much
                  more. You can also explore additional information on courses,
                  careers and more through CareerGadence AI’s blog, and get all your
                  career-related queries answered through CareerGadence AI’s career
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
                Additional Services
                </h1>
                <p className="mt-2 text-base font-light text-slate-600">
                Planning your college admissions abroad? Get a customised College Admissions Planner based on your location/budget preferences with unbiased recommendations. Planning to apply for internships? Check our our JobReady packages to get started.​
                </p>
                <button className="mt-5 rounded-full bg-blue-800 px-16 py-3 font-medium text-white">
                  CALL A MENTOR
                </button>
                <h2 className="mt-4 flex font-bold text-blue-700">
                  VIEW COLLEGE ADMISSION PLAN <ChevronRight />
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

        {/* -------------Five-------------- */}

        <div className="flex flex-col items-center justify-center">
          <h1 className="text-blue my-5 text-4xl font-bold">
            The Career AI Advantage
          </h1>
          <p className="w-[60%] text-center text-lg text-slate-600">
            Here’s why Career AI can be the best career guidance partner for your
            child during their career discovery journey.
          </p>
        </div>

        <div className="my-10 grid grid-cols-2 gap-14">
          <div className="flex items-center justify-center gap-4 rounded-2xl border-2 px-3 py-7 shadow-2xl shadow-blue-600">
            <Image
              src="/images/student/reliable1.png"
              alt="icon"
              width={100}
              height={100}
              className="w-[60%]"
            />
            <div>
              <h1 className="text-xl font-bold text-blue-600">
                India’s Most Reliable Career Test
              </h1>
              <p className="mt-2 text-lg text-slate-600">
                Created by expert psychologists and psychometricians from IIT
                Delhi, DRDO, Jamia Millia Islamia and Fergusson College, our
                assessment enables you to make scientific academic and career
                choices.
              </p>
            </div>
          </div>

          <div className="flex items-center justify-center gap-4 rounded-2xl border-2 px-3 py-7 shadow-2xl shadow-blue-600">
            <Image
              src="/images/student/reliable2.png"
              alt="icon"
              width={100}
              height={100}
              className="w-[60%]"
            />
            <div>
              <h1 className="text-xl font-bold text-blue-600">
                Counselling by Trained Experts
              </h1>
              <p className="mt-2 text-lg text-slate-600">
                Our talented team of 350+ career counsellors are educators or
                psychologists, who undergo rigorous training to provide holistic
                career counselling for Class 9 students.
              </p>
            </div>
          </div>
          <div className="flex items-center justify-center gap-4 rounded-2xl border-2 px-3 py-7 shadow-2xl shadow-blue-600">
            <Image
              src="/images/student/reliable3.png"
              alt="icon"
              width={100}
              height={100}
              className="w-[60%]"
            />
            <div>
              <h1 className="text-xl font-bold text-blue-600">
                Holistic Career Information
              </h1>
              <p className="mt-2 text-lg text-slate-600">
                Our vast repository of career articles and blogs enable users to
                get a detailed understanding of their chosen careers in a
                simple, easy-to-understand manner.
              </p>
            </div>
          </div>
          <div className="flex items-center justify-center gap-4 rounded-2xl border-2 px-3 py-7 shadow-2xl shadow-blue-600">
            <Image
              src="/images/student/reliable4.png"
              alt="icon"
              width={100}
              height={100}
              className="w-[60%]"
            />
            <div>
              <h1 className="text-xl font-bold text-blue-600">
                Ongoing Query Resolution
              </h1>
              <p className="mt-2 text-lg text-slate-600">
                Career AI users get lifetime access to our Knowledge Gateway
                and continuous resolution of career-related queries through our
                dedicated career helpline.
              </p>
            </div>
          </div>
          <div className="flex items-center justify-center gap-4 rounded-2xl border-2 px-3 py-7 shadow-2xl shadow-blue-600">
            <Image
              src="/images/student/reliable5.png"
              alt="icon"
              width={100}
              height={100}
              className="w-[60%]"
            />
            <div>
              <h1 className="text-xl font-bold text-blue-600">
                Industry Insights by Experts
              </h1>
              <p className="mt-2 text-lg text-slate-600">
                Our career webinars with industry experts enable users to
                understand a day in the life of their chosen professions, top
                challenges and required traits.
              </p>
            </div>
          </div>
          <div className="flex items-center justify-center gap-4 rounded-2xl border-2 px-3 py-7 shadow-2xl shadow-blue-600">
            <Image
              src="/images/student/reliable6.png"
              alt="icon"
              width={100}
              height={100}
              className="w-[60%]"
            />
            <div>
              <h1 className="text-xl font-bold text-blue-600">
                Ultimate Guidance Through Plus
              </h1>
              <p className="mt-2 text-lg text-slate-600">
                Our Plus plan users get four career counselling sessions that
                can be availed at any time, with additional guidance on studying
                abroad, building CVs for internships and more.
              </p>
            </div>
          </div>
        </div>

        {/* -------------Six-------------- */}

        <div className="-mx-10 mt-20 flex h-96 items-center justify-center bg-blue-950 rounded-full px-8 shadow-xl shadow-blue-600">
          <div className="w-[50%]">
            <h1 className="text-4xl font-extrabold text-white">
              Not sure if career counselling is right for you?
            </h1>
            <p className="my-8 text-xl font-medium text-white">
              Book a Career Brainstorm Session to explore your options with a
              counsellor before opting for the full career guidance solution.
            </p>
            <button className="rounded-full bg-blue-600 px-8 py-3 font-medium text-white">
              KNOW MORE
            </button>
          </div>
          <div>
            <Image
              src="/images/student/side.png"
              alt="ki"
              width={500}
              height={500}
            />
          </div>
        </div>

        {/* -------------Seven-------------- */}

        <div className="my-16 flex flex-col items-center justify-center px-20 border-2 rounded-2xl shadow-xl shadow-blue-600">
          <h1 className="my-5 text-4xl font-bold">
            Frequently Asked Questions
          </h1>
          <Accordion type="single" collapsible className="w-full">
            <h1 className="ml-3 mt-5 text-xl font-semibold">ABOUT CareerGadence AI</h1>
            <AccordionItem value="item-1" className="mt-5">
              <AccordionTrigger className="rounded-full border-2 px-10 text-2xl font-bold text-blue-600 shadow-xl">
              How can I contact CareerGadence AI for career guidance after 10th and 12th?
              </AccordionTrigger>
              <AccordionContent className="mt-2 rounded-xl border-2 px-10 py-2 text-base font-semibold ">
                You can email us on info@CareerGadence AI.com Call/WhatsApp us on
                +918291856155. Head to our chatbox on the website (bottom right)
                and start chatting.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2" className="mt-5">
              <AccordionTrigger className="rounded-full border-2 px-10 text-2xl font-bold text-blue-600 shadow-xl">
              How are CareerGadence AI’s career counsellors an ideal option over other career counsellors?
              </AccordionTrigger>
              <AccordionContent className="mt-2 rounded-xl border-2 px-10 py-2 text-base font-semibold ">
              Looking for career guidance after 10th or career counselling after 12th? Our career counsellors come from education and/or psychology backgrounds with at least 5 years of experience in their fields. They also undergo an intensive counsellor training and certification programme to provide you with personalised and quality education/career guidance and counselling. They validate your career report findings by asking you questions to understand you better. They analyse your personality and abilities to determine your strengths and development areas, and recommend effective learning plans to improve upon your development areas. Then, they help you shortlist your top three careers, and finalise your next steps. Choose between customised guidance plans to accommodate your needs, get lifetime access to our Knowledge Gateway and a whole lot more. Want to know how we can help you get career guidance after 10th to 12th? Get on a call with our career mentors to find out!
              </AccordionContent>
            </AccordionItem>
            <span className="my-7 flex border border-black "></span>
            <AccordionItem value="item-3" className="mt-5">
              <h1 className="my-5 ml-3 text-xl font-semibold">BENEFITS</h1>
              <AccordionTrigger className="rounded-full border-2 px-10 text-2xl font-bold text-blue-600 shadow-xl">
                Why do I need career counselling in Class 10-12?
              </AccordionTrigger>
              <AccordionContent className="mt-2 rounded-xl border-2 px-10 py-2 text-base font-semibold ">
              Career counselling after 10th will help you shortlist the right stream and subjects, and give you more time to prepare for any entrance exams you might have to give after 12th. Career counselling after 12th will help you shortlist the right courses from 850+ options so you get a headstart on the right career path. If you have to sign up for coaching classes for competitive entrance exams, this gives you more time to prepare and find the right coaching for you.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4" className="mt-5">
              <AccordionTrigger className="rounded-full border-2 px-10 text-2xl font-bold text-blue-600 shadow-xl">
              Why should I choose a psychometric assessment instead of an aptitude test for career guidance?
              </AccordionTrigger>
              <AccordionContent className="mt-2 rounded-xl border-2 px-10 py-2 text-base font-semibold ">
              An aptitude test for stream selection after 10th will measure a specific ability and tell you what you’re already good at. But it doesn’t measure your interests at all. You may be good at a particular skill, but without a deep-rooted interest in it, you may find it difficult to grow and excel at it. On the other hand, your interest in a particular field will motivate you to learn more about it, grow in it and therefore excel at it. A psychometric assessment, therefore, analyses your interests to tell you which career path is ideal for you. If you’re looking for career guidance after 10th or career counselling after 12th, we would recommend taking a psychometric test to determine your next steps.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-5" className="mt-5">
              <AccordionTrigger className="rounded-full border-2 px-10 text-2xl font-bold text-blue-600 shadow-xl">
              If I want to study abroad, will you provide career counselling for it?
              </AccordionTrigger>
              <AccordionContent className="mt-2 rounded-xl border-2 px-10 py-2 text-base font-semibold ">
              If you subscribe to the Achieve Plus career guidance package for Class 10-12, you will get education guidance and counselling on studying in both India and abroad, in the country you wish to study in. This package includes 4 career counselling sessions that you can avail of anytime from the time you sign up until you graduate college. After each session, you will receive a customised report with a summary of your session and the colleges you can apply to after Class 12, based on your preference of country/city. The report will also include information on the eligibility process, admission deadlines and tuition fees for the recommended colleges. Do note that we do not create  or LORs, nor do we assist with the actual application process. If you choose our standard plans for Class 10-12, you can invest in one of our College Admissions Planner packages to get guidance on overseas education. Check out our College Admissions Planner packages by clicking here.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-6" className="mt-5">
              <AccordionTrigger className="rounded-full border-2 px-10 text-2xl font-bold text-blue-600 shadow-xl">
                When should I opt for the Discover Plus career guidance plan?
              </AccordionTrigger>
              <AccordionContent className="mt-2 rounded-xl border-2 px-10 py-2 text-base font-semibold ">
              We have been providing career counselling after 10th to several students, and many of them shared with us that one session wasn’t enough for them to arrive at a final decision. From Class 10 to graduation, there are various crucial milestones in your academic journey where you may need career guidance to choose between your available options. The Achieve Plus career guidance plan takes care of this need by offering four career counselling sessions that you can avail at any point in your academic journey. At the end of each session, you can get a customised report with a summary of your session, information on colleges you can apply to in India and abroad, online courses you can take up during your vacation, and assistance in building your CV when you begin applying for internships or jobs. If you want the ultimate mentorship experience, you should opt for the Achieve Plus plan.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-7" className="mt-5">
              <AccordionTrigger className="rounded-full border-2 px-10 text-2xl font-bold text-blue-600 shadow-xl">
              Do you also have offline sessions for students?
              </AccordionTrigger>
              <AccordionContent className="mt-2 rounded-xl border-2 px-10 py-2 text-base font-semibold ">
              Yes, we have begun offering offline career counselling after 10th in select cities at additional pricing. If you want an offline session, please give us a call on 8291856155 or send us an email at info@CareerGadence AI.com to check if we have offline career counselling in your city.
              </AccordionContent>
            </AccordionItem>
            <span className="my-7 flex border border-black "></span>
            <AccordionItem value="item-8" className="mt-5">
              <h1 className="my-5 ml-3 text-xl font-semibold">
                THE CareerGadence AI SOLUTION
              </h1>
              <AccordionTrigger className="rounded-full border-2 px-10 text-2xl font-bold text-blue-600 shadow-xl">
              What is the CareerGadence AI assessment?
              </AccordionTrigger>
              <AccordionContent className="mt-2 rounded-xl border-2 px-10 py-2 text-base font-semibold ">
              The CareerGadence AI assessment is India’s most holistic psychometric career assessment that measures your core interests, personality and abilities to help you understand who you are and what you will enjoy doing. This assessment is specially created by a team of experts for Indian millennials and is based on 21st-century careers. It has been created by a specialised team of psychometricians and psychologists from DRDO, Jamia Millia Islamia and Ferguson College. This assessment asks you questions to understand you better - you don’t have to study for it!
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-9" className="mt-5">
              <AccordionTrigger className="rounded-full border-2 px-10 text-2xl font-bold text-blue-600 shadow-xl">
              What’s next after the assessment?
              </AccordionTrigger>
              <AccordionContent className="mt-2 rounded-xl border-2 px-10 py-2 text-base font-semibold ">
              Once you have completed the career assessment, you can pick a CareerGadence AI career guidance plan that matches your needs. Choose the right plan and book your career counselling session with one of our career counsellors by sharing your preferred date and time slots. The career counselling session will mostly take place online via a video call, unless you opt for an offline session. Through the session, your career counsellor will explain your assessment report, validate your interest areas with real-life experiences, and help you choose the top three careers ideal for you. This session will also help you plan your academic journey by finalising your stream, course and subjects. Your parents will have to join the last 15-20 minutes of the session, so the counsellor can help them understand where your interests lie and how they can help you get into your chosen career. Our counsellors will also help you understand your strengths and development areas, and recommend a learning plan for those development areas.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-10" className="mt-5">
              <AccordionTrigger className="rounded-full border-2 px-10 text-2xl font-bold text-blue-600 shadow-xl">
              What’s next after the career counselling session?
              </AccordionTrigger>
              <AccordionContent className="mt-2 rounded-xl border-2 px-10 py-2 text-base font-semibold ">
              Once your career counselling session is done, you will be able to unlock the Knowledge Gateway. Log in to your CareerGadence AI account to view your dashboard, which will contain details on your shortlisted careers. Get detailed careers guides, access to CareerGadence AI’s blogs on courses, careers, skill development and more. View pre-recorded webinars by experts from your chosen industry to understand what really goes on in your shortlisted careers. In case you can’t find what you’re looking for, make the most of your unlimited access to a dedicated career helpline, where you can email your career-related queries from the time your session is done until you get into a career you love. If you have subscribed to the Plus plan, you will also receive a summary report via email which includes your next academic steps.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-11" className="mt-5">
              <AccordionTrigger className="rounded-full border-2 px-10 text-2xl font-bold text-blue-600 shadow-xl">
              How will I get the benefits of the full CareerGadence AI Solution?
              </AccordionTrigger>
              <AccordionContent className="mt-2 rounded-xl border-2 px-10 py-2 text-base font-semibold ">
              You can register by clicking right hereand completing the career assessment. Once this is done, choose your career guidance plan and complete the payment to unlock the full CareerGadence AI solution.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-12" className="mt-5">
              <AccordionTrigger className="rounded-full border-2 px-10 text-2xl font-bold text-blue-600 shadow-xl">
              What is the price of CareerGadence AI’s Career Guidance Solution for 10th and 12th?
              </AccordionTrigger>
              <AccordionContent className="mt-2 rounded-xl border-2 px-10 py-2 text-base font-semibold ">
              That would depend on the plan you choose. View our career guidance plans and their pricing by clicking here. If you want to book an offline session, contact our team on 8291856155 to inquire about our offline career guidance centres and additional costs for the same.
              </AccordionContent>
            </AccordionItem>
            <span className="my-7 flex border border-black "></span>
          </Accordion>
        </div>
      </div>
    </>
  );
}
