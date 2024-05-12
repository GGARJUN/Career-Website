"use client";
import Navbar from "@/app/secondary/navbar/Navbar";
import Breadcrumb from "@/components/Common/Breadcrumb";
import { Loader } from "lucide-react";
import Link from "next/link";
import router from "next/router";
import React, { useState } from "react";

const OMRSheet = () => {
  const questions = [
    {
      id: 1,
      question: "1. I don’t believe in gifting someone so that they favor me.",
      options: [
        "Strongly disagree",
        "Disagree",
        "Unsure",
        "Agree",
        "Strongly agree",
      ],
      answerIndex: 0,
    },
    {
      id: 2,
      question:
        "2. I avoid discussing topics that can give rise to conflicts.",
      options: [
        "Strongly disagree",
        "Disagree",
        "Unsure",
        "Agree",
        "Strongly agree",
      ],
      answerIndex: 0,
    },
    {
      id: 3,
      question: "3. I think I am surrounded by people who wish well for me.",
      options: [
        "Strongly disagree",
        "Disagree",
        "Unsure",
        "Agree",
        "Strongly agree",
      ],
      answerIndex: 0,
    },
    {
      id: 4,
      question:
        "4. If a shopkeeper gives me extra change by mistake, I return it.",
      options: [
        "Strongly disagree",
        "Disagree",
        "Unsure",
        "Agree",
        "Strongly agree",
      ],
      answerIndex: 0,
    },
    {
      id: 5,
      question: "5. I stick to my schedules even if there are unexpected events.",
      options: [
        "Strongly disagree",
        "Disagree",
        "Unsure",
        "Agree",
        "Strongly agree",
      ],
      answerIndex: 0,
    },
    {
      id: 6,
      question: "6. I like to interact with co–passengers while travelling.",
      options: [
        "Strongly disagree",
        "Disagree",
        "Unsure",
        "Agree",
        "Strongly agree",
      ],
      answerIndex: 0,
    },
    {
      id: 7,
      question:
        "7. I feel excited about addressing a group whenever I get a chance.",
      options: [
        "Strongly disagree",
        "Disagree",
        "Unsure",
        "Agree",
        "Strongly agree",
      ],
      answerIndex: 0,
    },
    {
      id: 8,
      question: "8. I think people who stick to traditional ways of doing things are narrow-minded.",
      options: [
        "Strongly disagree",
        "Disagree",
        "Unsure",
        "Agree",
        "Strongly agree",
      ],
      answerIndex: 0,
    },
    {
      id: 9,
      question: "9. I tend to overthink about the mistakes that I made in the past.",
      options: [
        "Strongly disagree",
        "Disagree",
        "Unsure",
        "Agree",
        "Strongly agree",
      ],
      answerIndex: 0,
    },
    {
      id: 10,
      question: "10. I have made poor decisions when I was emotionally affected.",
      options: [
        "Strongly disagree",
        "Disagree",
        "Unsure",
        "Agree",
        "Strongly agree",
      ],
      answerIndex: 0,
    },
    {
      id: 11,
      question: "11. I readily admit my limitations.",
      options: [
        "Strongly disagree",
        "Disagree",
        "Unsure",
        "Agree",
        "Strongly agree",
      ],
      answerIndex: 0,
    },
    {
      id: 12,
      question: "12. It is alright to ignore some mistakes of others, rather than pointing them out.",
      options: [
        "Strongly disagree",
        "Disagree",
        "Unsure",
        "Agree",
        "Strongly agree",
      ],
      answerIndex: 0,
    },
    {
      id: 13,
      question: "13. I prefer to trust others, even if I know very little about them.",
      options: [
        "Strongly disagree",
        "Disagree",
        "Unsure",
        "Agree",
        "Strongly agree",
      ],
      answerIndex: 0,
    },
    {
      id: 14,
      question: "14. If someone is not using their belongings, it is alright to take it without their permission.",
      options: [
        "Strongly disagree",
        "Disagree",
        "Unsure",
        "Agree",
        "Strongly agree",
      ],
      answerIndex: 0,
    },
    {
      id: 15,
      question: "15. I can easily ignore distractions when doing something important.",
      options: [
        "Strongly disagree",
        "Disagree",
        "Unsure",
        "Agree",
        "Strongly agree",
      ],
      answerIndex: 0,
    },
    {
      id: 16,
      question: "16. I make new friends easily.",
      options: [
        "Strongly disagree",
        "Disagree",
        "Unsure",
        "Agree",
        "Strongly agree",
      ],
      answerIndex: 0,
    },
    {
      id: 17,
      question: "17. I enjoy going on the stage and grabbing the attention of audience.",
      options: [
        "Strongly disagree",
        "Disagree",
        "Unsure",
        "Agree",
        "Strongly agree",
      ],
      answerIndex: 0,
    },
    {
      id: 18,
      question: "18. I can think of many out-of-the-box (original / creative) ideas.",
      options: [
        "Strongly disagree",
        "Disagree",
        "Unsure",
        "Agree",
        "Strongly agree",
      ],
      answerIndex: 0,
    },
    {
      id: 19,
      question: "19. I tend to lose hope when faced with failure or criticism.",
      options: [
        "Strongly disagree",
        "Disagree",
        "Unsure",
        "Agree",
        "Strongly agree",
      ],
      answerIndex: 0,
    },
    {
      id: 20,
      question: "20. I experience mood swings frequently.",
      options: [
        "Strongly disagree",
        "Disagree",
        "Unsure",
        "Agree",
        "Strongly agree",
      ],
      answerIndex: 0,
    },
    {
      id: 21,
      question: "21. I don’t like to make promises that I will not be able to fulfill.",
      options: [
        "Strongly disagree",
        "Disagree",
        "Unsure",
        "Agree",
        "Strongly agree",
      ],
      answerIndex: 0,
    },
  

    // Add more questions here
    // ...
  ];

  const resultContents = [
    "Engineering",
    "Doctor",
    "Teacher",
    // Add more result options here
    // ...
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState(
    new Array(questions.length).fill(null),
  );
  const [showResult, setShowResult] = useState(false);
  const [result, setResult] = useState("");
  const [completedQuestions, setCompletedQuestions] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSelectOption = (optionIndex) => {
    const newAnswers = [...answers];
    newAnswers[currentQuestion] = optionIndex;
    setAnswers(newAnswers);
    setCompletedQuestions((prevCompleted) => [
      ...prevCompleted,
      currentQuestion,
    ]);
  };

  const handleNextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion((prevQuestion) => prevQuestion + 1);
    } else {
      setShowResult(true);
      const resultIndex = Math.floor(Math.random() * resultContents.length);
      setResult(resultContents[resultIndex]);
      // setLoading(true);
      // setTimeout(() => {
      //   setLoading(false);
      // }, 5000);
    }
  };

  const handlePreviousQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion((prevQuestion) => prevQuestion - 1);
    }
  };

  const handleShowResult = () => {
    const allQuestionsAnswered = completedQuestions.length === questions.length;
    if (allQuestionsAnswered) {
      setShowResult(true);
      const correctAnswers = questions.reduce((acc, question, index) => {
        return acc + (question.answerIndex === answers[index] ? 1 : 0);
      }, 0);
      const resultIndex = Math.floor(
        (correctAnswers / questions.length) * resultContents.length,
      );
      setResult(resultContents[resultIndex]);
    }
  };

  const handleSidebarClick = (questionIndex) => {
    setCurrentQuestion(questionIndex);
  };
  return (
    <>
      <Navbar />
      <Breadcrumb pageName="Assessment For College Students" />
      <span className="my-4 flex border-2 border-blue-600 drop-shadow-2xl"></span>
      <div className="mx-10 flex items-center  justify-around">
        <div className="relative -top-28 w-[70%] p-4">
          <p className="mb-2 text-3xl font-bold">
            {questions[currentQuestion].question}
          </p>
          {questions[currentQuestion].options.map((option, optionIndex) => (
            <label
              key={optionIndex}
              className="my-4 mr-4 inline-flex  cursor-pointer items-center text-lg font-medium"
            >
              <input
                type="radio"
                name="answer"
                checked={answers[currentQuestion] === optionIndex}
                onChange={() => handleSelectOption(optionIndex)}
                className="form-radio h-6 w-6  "
              />
              <span className="ml-2">{option}</span>
            </label>
          ))}
          <div className="mx-20 mt-4 flex justify-between">
            <button
              onClick={handlePreviousQuestion}
              disabled={currentQuestion === 0}
              className="mr-2 rounded bg-gray-300 px-4 py-2 font-bold text-gray-800 hover:bg-gray-400"
            >
              Previous
            </button>
            {currentQuestion < questions.length - 1 && (
              <button
                onClick={handleNextQuestion}
                className="mr-2 rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700"
              >
                Next
              </button>
            )}

            <Link href={"/assessment/result"}>
              {currentQuestion === questions.length - 1 && !showResult && (
                <button
                  onClick={handleShowResult}
                  disabled={completedQuestions.length !== questions.length}
                  className={`rounded bg-green-500 px-4 py-2 font-bold text-white hover:bg-green-700 ${
                    completedQuestions.length !== questions.length
                      ? "cursor-not-allowed opacity-50"
                      : ""
                  }`}
                >
                  {currentQuestion === 9 ? (
                    loading ? (
                      <Loader />
                    ) : (
                      "Show Result"
                    )
                  ) : (
                    "Show Result"
                  )}
                </button>
              )}
            </Link>
          </div>
          {/* {showResult && (
          <p className="mt-4">
            Based on your answers, you could be a {result}!
          </p>
        )} */}
        </div>
        <div className=" my-10 grid grid-cols-4 gap-3 rounded-2xl border-4 p-3 shadow-lg shadow-blue-600 ">
          {questions.map((question, index) => (
            <div key={question.id} className="mb-2 flex items-center ">
              <button
                onClick={() => handleSidebarClick(index)}
                className={`mr-2 flex h-10 w-10 items-center justify-center rounded-full hover:scale-105 ${
                  completedQuestions.includes(index)
                    ? "bg-green-500 hover:bg-green-700"
                    : "bg-red-500 hover:bg-red-700"
                }`}
              >
                <p className="font-medium text-white">{index + 1}</p>
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default OMRSheet;
