"use client";
import { Loader } from "lucide-react";
import Link from "next/link";
import router from "next/router";
import React, { useState } from "react";

const OMRSheet = () => {
  const questions = [
    {
      id: 1,
      question: "1.I like fixing or repairing broken items.",
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
        "2.I like to learn about the different commands for the computer to execute.",
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
      question: "3. I would like to design a dress or jewellery.",
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
        "4. I prefer activities where I can interact or respond to the queries of people and help them with their requests.",
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
      question: "5. I like to convince others about my point of view.",
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
      question: "6. I enjoy checking for mistakes.",
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
        "7. I find it interesting to assist or accompany someone in any type of repairs.",
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
      question: "8. I would like to develop a mobile based app.",
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
      question: "9. I am interested in crafts to create something artistic.",
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
      question: "10. I would be interested to solve complaints of customers.",
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
      question: "11. I love to talk about a great idea to others and excite them.",
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
      question: "12. I enjoy typing a document accurately",
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
      question: "13. I enjoy working with tools like a hammer, screw-driver, spanner, wrench etc.",
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
      question: "14. I would like to learn a computer programming language (Java, GW-Basic, etc.)",
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
      question: "15. I enjoy decorating my scrapbook with various cut-outs and drawings.",
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
      question: "16. I would enjoy interacting with customers to understand their needs.",
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
      question: "17. I enjoy defending my point of view using logical arguments.",
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
      question: "18. I enjoy checking documents to spot errors.",
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
      question: "19. I enjoy assisting someone who is repairing a bike or a car.",
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
      question: "20. I am interested in knowing more about the hardware and software functions in a computer.",
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
      question: "21. I am interested in learning the art of photography.",
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
      id: 22,
      question: "22. I think receptionists have an interesting job.",
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
      id: 23,
      question: "23. I like to engage in logical arguments with someone to prove my point.",
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
      id: 24,
      question: "24. It is interesting to maintain records in an accurate and up-to-date manner.",
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
      id: 25,
      question: "25. I enjoy being a part of a sports team.",
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
      id: 26,
      question: "26. I would like to be part of the archaeological research and exploration team.",
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
      id: 27,
      question: "27. I enjoy editing and decorating photos.",
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
      id: 28,
      question: "28. I like to take care of an ill person.",
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
      id: 29,
      question: "29. I like to explain my views to others and get their agreement.",
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
    <div className="mx-10 flex items-center  justify-around">
      <div className="w-[70%] p-4 relative -top-28">
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

          <Link href={'/assessment/john'} >
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
              {currentQuestion === 9 ? (loading ? <Loader /> : "Show Result") : "Show Result"}
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
  );
};

export default OMRSheet;
