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

export default function Working() {
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
      <div className="mt-28 mb-10 p-10 bg-blue-50 rounded-xl border-2 mx-5 shadow-md shadow-blue-400 border-blue-400">
        {/* -------------First-------------- */}

        <div className=" flex  w-full items-center justify-between gap-10 px-10 ">
          <div className="flex w-[50%] flex-col items-center justify-center rounded-xl border-2 pt-10 shadow-md shadow-red-400">
            <h2 className="text-lg font-medium text-blue-700">
              TRUSTED BY 2,20,000+ USERS
            </h2>
            <h1 className="my-2 text-center text-4xl  font-bold">
            The Mentoria Solution for College Graduates
            </h1>
            <p className=" mt-7 w-96 text-center text-base font-medium">
            Discover yourself and your ideal careers. Find out which electives to choose, when to pursue your master&apos;s degree and what job roles to apply for.
            </p>
            <div className="m-7 flex w-60 items-center justify-center rounded-full border-2 bg-blue-600  px-10 py-3 text-white transition-all hover:bg-blue-700">
              <button className="font-semibold">GET STARTED</button>
            </div>
          </div>
          <div className="w-[50%]">
            <div>
            <Image
              src="/images/college/side.jpeg"
              alt="svg"
              width={500}
              height={100}
              className="rounded-2xl border   shadow-md shadow-red-400"
            />
            </div>
          </div>
        </div>

        {/* -------------Second-------------- */}

        <div className="my-20 px-20">
          <h1 className="text-center text-4xl font-bold">
          Choose the Right Path
          </h1>
          <p className="mt-5 text-center text-lg text-slate-600">
          Which specialisation/elective should you choose?
          </p>
          <p className="mt-2 text-center text-lg text-slate-600">
          Which placement opportunities should you sign up for?
          </p>
          <p className="mt-2 text-center text-lg text-slate-600">
          Should you proceed with your postgraduate studies or start working first?
          </p>
          <p className="mt-2 text-center text-lg text-slate-600">
          Mentoria’s four-step career guidance for college graduates will help you finalise your future pathway.
          </p>
          
        </div>

        {/* -------------Third-------------- */}

        <div className="my-10 grid grid-cols-2 gap-14">
          <div className="flex items-center justify-center gap-4 rounded-2xl border-2 px-3 py-7 shadow-md shadow-red-400">
            <Image
              src="/images/student/icon1.png"
              alt="icon"
              width={100}
              height={100}
              className="w-[60%]"
            />
            <div>
              <h1 className="text-xl font-bold">12,000+ Career Options</h1>
              <p className="mt-2 text-lg text-slate-600">
              Find out which one is best suited to your interests, personality and abilities, and what will it take for you to begin your journey down that path.
              </p>
            </div>
          </div>

          <div className="flex items-center justify-center gap-4 rounded-2xl border-2 px-3 py-7 shadow-md shadow-red-400">
            <Image
              src="/images/student/icon2.png"
              alt="icon"
              width={100}
              height={100}
              className="w-[60%]"
            />
            <div>
              <h1 className="text-xl font-bold">Education vs Employability</h1>
              <p className="mt-2 text-lg text-slate-600">
              You may have the right degree but do you have the right skill-set to land a job? Discover how to prepare to get into your chosen career.
              </p>
            </div>
          </div>
          <div className="flex items-center justify-center gap-4 rounded-2xl border-2 px-3 py-7 shadow-md  shadow-red-400">
            <Image
              src="/images/student/icon3.png"
              alt="icon"
              width={100}
              height={100}
              className="w-[60%]"
            />
            <div>
              <h1 className="text-xl font-bold">Masters or Jobs?</h1>
              <p className="mt-2 text-lg text-slate-600">
              Finalise your next steps after graduation and choose the ideal pathway for you between studying further and working.
              </p>
            </div>
          </div>
          <div className="flex items-center justify-center gap-4 rounded-2xl border-2 px-3 py-7 shadow-md shadow-red-400">
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
              Get career counselling for graduates to determine your strengths and development areas from your personality and abilities assessments, and create an action plan.
              </p>
            </div>
          </div>
        </div>

        {/* -------------Fourth-------------- */}

        <div className="my-20">
          <h1 className="text-center text-5xl font-bold text-blue-800">
            How it works
          </h1>
          <p className="text-lg font-semibold text-slate-600 my-3 text-center">Here’s how we have enabled 2 lakh+ individuals and 120+ corporates across the country to get #CareerReady.</p>
          <hr className="mx-20 mt-5 border border-slate-300  " />
          <div className=" mt-10 flex w-full flex-col justify-center  gap-10 rounded-3xl border-2  py-5 shadow-md shadow-red-400">
            <div className="justify-center gap-10 py-5 md:flex">
              <div className=" w-[60%]">
                <h2 className="text-lg font-light text-slate-600">STEP 1</h2>
                <h1 className="mt-3 text-4xl font-bold text-[#1C0152] ">
                Take the Career Test
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
                + Additional Services
                </h1>
                <p className="mt-2 text-base font-light text-slate-600">
                Planning to pursue your master’s? Get a customised College Admissions Planner based on your location/budget preferences with unbiased recommendations. Ready to start applying for jobs? Browse through our JobReady packages.​
                </p>
                <button className="mt-5 rounded-full bg-blue-800 px-16 py-3 font-medium text-white">
                  CALL A MENTOR
                </button>
                <h2 className="mt-4 flex font-bold text-blue-700">
                  VIEW JOBREADY PACKAGE <ChevronRight />
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
            The Mentoria Advantage
          </h1>
          <p className="w-[60%] text-center text-lg text-slate-600">
            Here’s why Mentoria can be the best career guidance partner for your
            child during their career discovery journey.
          </p>
        </div>

        <div className="my-10 grid grid-cols-2 gap-14">
          <div className="flex items-center justify-center gap-4 rounded-2xl border-2 px-3 py-7 shadow-md shadow-red-400 ">
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

          <div className="flex items-center justify-center gap-4 rounded-2xl border-2 px-3 py-7 shadow-md shadow-red-400 ">
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
          <div className="flex items-center justify-center gap-4 rounded-2xl border-2 px-3 py-7 shadow-md shadow-red-400 ">
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
          <div className="flex items-center justify-center gap-4 rounded-2xl border-2 px-3 py-7 shadow-md shadow-red-400 ">
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
                Mentoria’s users get lifetime access to our Knowledge Gateway
                and continuous resolution of career-related queries through our
                dedicated career helpline.
              </p>
            </div>
          </div>
          <div className="flex items-center justify-center gap-4 rounded-2xl border-2 px-3 py-7 shadow-md shadow-red-400 ">
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
          <div className="flex items-center justify-center gap-4 rounded-2xl border-2 px-3 py-7 shadow-md shadow-red-400 ">
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

        <div className="rounded-xl mt-10 flex h-96 items-center justify-center bg-blue-950">
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

        <div className="my-10 flex items-center flex-col justify-center px-20">
          <h1 className="font-bold text-4xl my-5">Frequently Asked Questions</h1>
          <Accordion type="single" collapsible className="w-full">
            <h1 className="font-semibold text-xl mt-5 ml-3">ABOUT MENTORIA</h1>
            <AccordionItem value="item-1" className="mt-5">
              <AccordionTrigger className="rounded-full border-2 px-10 text-2xl font-bold shadow-xl text-blue-600">
                How do I get in touch with someone from Mentoria?
              </AccordionTrigger>
              <AccordionContent className="font-semibold mt-2 rounded-xl border-2 px-10 py-2 text-base ">
                You can email us on info@mentoria.com Call/WhatsApp us on
                +918291856155. Head to our chatbox on the website (bottom right)
                and start chatting.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2" className="mt-5">
              <AccordionTrigger className="text-blue-600 rounded-full border-2 px-10 text-2xl font-bold shadow-xl">
                Why are your career counsellors better than others?
              </AccordionTrigger>
              <AccordionContent className="font-semibold mt-2 rounded-xl border-2 px-10 py-2 text-base ">
              Looking for education or career guidance for Class 8-9 students? Our career counsellors have an MA in Psychology and go through an intensive training programme to give you the best education/career guidance and counselling. They validate your career report findings by asking you questions to understand you better. Then, they help you shortlist your top three fields, and tell you which stream is best suited for you. But your #CareerReady journey doesn’t end there! Unlike other counselling platforms, Mentoria promises to be by your side from the time you sign up until you get into your first job. Got queries? Reach out to us on our dedicated career helpline, and we’ll resolve them for you!
              </AccordionContent>
            </AccordionItem>
            <span className="border border-black flex my-7 "></span>
            <AccordionItem value="item-3" className="mt-5">
            <h1 className="font-semibold text-xl my-5 ml-3">BENEFITS</h1>
              <AccordionTrigger className="text-blue-600 rounded-full border-2 px-10 text-2xl font-bold shadow-xl">
              Why do I need career counselling in Class 8-9?
              </AccordionTrigger>
              <AccordionContent className="font-semibold mt-2 rounded-xl border-2 px-10 py-2 text-base ">
              The sooner you know which stream to take up after Class 10, the more time you will have to prepare for it. Get education & career guidance in Class 8-9 so that you can enter Class 10 with complete clarity on your future path and focus better on the upcoming board exams. If you have to sign up for coaching classes for competitive entrance exams, this gives you more time to prepare and find the right coaching for you.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4" className="mt-5">
              <AccordionTrigger className="text-blue-600 rounded-full border-2 px-10 text-2xl font-bold shadow-xl">
              How is a psychometric assessment more effective than an aptitude test?
              </AccordionTrigger>
              <AccordionContent className="font-semibold mt-2 rounded-xl border-2 px-10 py-2 text-base ">
              An aptitude test measures only the specific ability of a person to perform in a particular career. To put it simply, it tells you what you can do, but doesn’t consider much else. A psychometric assessment, on the other hand, analyses your interests to suggest the ideal career path for you. If you’re looking for career guidance for Class 8-9 students, a psychometric test would be ideal for you.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-5" className="mt-5">
              <AccordionTrigger className="text-blue-600 rounded-full border-2 px-10 text-2xl font-bold shadow-xl">
              Will I get guidance on studying abroad as well?
              </AccordionTrigger>
              <AccordionContent className="font-semibold mt-2 rounded-xl border-2 px-10 py-2 text-base ">
              If you subscribe to the Discover Plus package for Class 8-9, you will get education guidance and counselling on studying in India and abroad. We can recommend the colleges you can apply to after Class 12, based on your preference of country/city, and share the relevant information on the eligibility process, admission deadlines and tuition fees. However, we do not help with SOP creation or the actual application process. If you’ve subscribed to our standard plans for Class 8-9, you can purchase a College Admissions Planner package to get guidance on studying abroad. Check out our College Admissions Planner packages by clicking here.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-6" className="mt-5">
              <AccordionTrigger className="text-blue-600 rounded-full border-2 px-10 text-2xl font-bold shadow-xl">
              When should I opt for the Discover Plus career guidance plan?
              </AccordionTrigger>
              <AccordionContent className="font-semibold mt-2 rounded-xl border-2 px-10 py-2 text-base ">
              If you subscribe to the Discover Plus package for Class 8-9, you will get education guidance and counselling on studying in India and abroad. We can recommend the colleges you can apply to after Class 12, based on your preference of country/city, and share the relevant information on the eligibility process, admission deadlines and tuition fees. However, we do not help with SOP creation or the actual application process. If you’ve subscribed to our standard plans for Class 8-9, you can purchase a College Admissions Planner package to get guidance on studying abroad. Check out our College Admissions Planner packages by clicking here.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-7" className="mt-5">
              <AccordionTrigger className="text-blue-600 rounded-full border-2 px-10 text-2xl font-bold shadow-xl">
              Do you offer offline sessions for students as well?
              </AccordionTrigger>
              <AccordionContent className="font-semibold mt-2 rounded-xl border-2 px-10 py-2 text-base ">
              We offer offline or face-to-face career counselling for students in select cities at an additional cost. If you wish to opt for an offline session, please contact our mentors on 8291856155 or send us an email at info@mentoria.com to know more.
              </AccordionContent>
            </AccordionItem>
            <span className="border border-black flex my-7 "></span>
            <AccordionItem value="item-8" className="mt-5">
            <h1 className="font-semibold text-xl my-5 ml-3">THE MENTORIA SOLUTION</h1>
              <AccordionTrigger className="text-blue-600 rounded-full border-2 px-10 text-2xl font-bold shadow-xl">
              What exactly is the Mentoria assessment?
              </AccordionTrigger>
              <AccordionContent className="font-semibold mt-2 rounded-xl border-2 px-10 py-2 text-base ">
              The Mentoria assessment is a comprehensive psychometric assessment that tests your core interests, if you’re in Class 8-9. It helps you understand yourself, your interests, and the ideal career paths best suited for you. Mentoria’s psychometric assessment is specially created for Indian millennials and is based on 21st-century careers. It has been created by a specialised team of psychometricians and psychologists and is the most reliable career assessment in the country.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-9" className="mt-5">
              <AccordionTrigger className="text-blue-600 rounded-full border-2 px-10 text-2xl font-bold shadow-xl">
              What happens after I take the assessment?
              </AccordionTrigger>
              <AccordionContent className="font-semibold mt-2 rounded-xl border-2 px-10 py-2 text-base ">
              You can proceed to choose a Mentoria career guidance plan that suits you best. Once this is done, proceed to book your career counselling session with one of our career counsellors. During this session, the career counsellor will take you through your assessment report, validate your interest areas with your real-life experiences, and shortlist the top three careers you would enjoy and excel at. Your counsellor will also help you finalise your academic plan and tell you which stream, course and subjects are best for you. Your parents will be invited to join the last 15 minutes of your session, where the counsellor will help them understand where your interests lie and how they can help you pursue your chosen career. If you opt for the Plus plan, you can take the assessment again after Class 10, where you will also be able to analyse your personality and abilities. Our counsellors will then help you define your strengths and development areas, and recommend a learning plan for those development areas.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-10" className="mt-5">
              <AccordionTrigger className="text-blue-600 rounded-full border-2 px-10 text-2xl font-bold shadow-xl">
              What happens after I complete the counselling session?
              </AccordionTrigger>
              <AccordionContent className="font-semibold mt-2 rounded-xl border-2 px-10 py-2 text-base ">
              Once you have completed your career counselling session, you need to log in to your Mentoria account to access a customised dashboard. Here, you can get detailed information on your chosen careers, access to Mentoria’s blogs on courses, careers, skill development and a whole lot more. You can view webinars by experts from your chosen industry to get a deeper insight into your shortlisted careers. You will also have unlimited access to a dedicated career helpline, where you can continue to email your career-related queries and get resolutions until you get into a career you love. If you have subscribed to the Plus plan, you will also receive a summary report via email that shares a brief note of your discussion with the counsellor along with the next steps to be followed.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-11" className="mt-5">
              <AccordionTrigger className="text-blue-600 rounded-full border-2 px-10 text-2xl font-bold shadow-xl">
              How do I sign up for the complete Mentoria Solution?
              </AccordionTrigger>
              <AccordionContent className="font-semibold mt-2 rounded-xl border-2 px-10 py-2 text-base ">
              You can begin by clicking right here. This will help you register and begin with the assessment. Once the assessment is complete, you can book a counselling session, choose the right guidance plan and complete the payment to get the full Mentoria solution.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-12" className="mt-5">
              <AccordionTrigger className="text-blue-600 rounded-full border-2 px-10 text-2xl font-bold shadow-xl">
              Do my parents have to attend the counselling session?
              </AccordionTrigger>
              <AccordionContent className="font-semibold mt-2 rounded-xl border-2 px-10 py-2 text-base ">
              Yes. One or both of your parents are required to be present during the last 15 minutes of the counselling session. This is when the counsellor, along with you and your parent(s) finalise the top three careers for you.
              </AccordionContent>
            </AccordionItem>
            <span className="border border-black flex my-7 "></span>
          </Accordion>
        </div>

        {/* -------------Six-------------- */}

        <div className="rounded-xl mt-10 flex h-96 items-center justify-center bg-blue-950">
          <div className="w-[50%]">
            <h1 className="text-4xl font-extrabold text-white">
            Planning to study abroad?
            </h1>
            <p className="my-8 text-xl font-medium text-white">
            Build your overseas education plan with a comprehensive, unbiased action plan from India&apos;s top admissions experts.
            </p>
            <button className="rounded-full bg-blue-600 px-8 py-3 font-medium text-white">
              VIEW PLAN
            </button>
          </div>
          <div>
            <Image
              src="/images/college/studyAbroad.png"
              alt="ki"
              width={400}
              height={500}
            />
          </div>
        </div>
      </div>
    </>
  );
}
