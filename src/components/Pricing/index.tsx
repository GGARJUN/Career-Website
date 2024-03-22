"use client";
// import axios from "axios";
// import { useEffect, useState } from "react";
// import SectionTitle from "../Common/SectionTitle";
import { useChat } from "ai/react";
import Textarea from "react-textarea-autosize";

// import PricingBox from "./PricingBox";

const Pricing = () => {
  // const [products, setProducts] = useState([]);

  // useEffect(() => {
  //   fetchProducts();
  // }, []);

  // const fetchProducts = async () => {
  //   const { data } = await axios.get("/api/getproducts");
  //   setProducts(data);
  // };
  // const { messages, input, handleInputChange, handleSubmit } = useChat({
  //   api: "/api",
  // });
  return (
    <>
      {/* <div className="min-h-screen">
        {messages.length !== 0 ? (
          <div className="relative mx-auto w-[75%] space-y-5 pb-32 pt-5">
            {messages.map((message) => (
              <div key={message.id} className="w-full">
                {message.role === "user" ? (
                  <div>{message.content}</div>
                ) : (
                  <div>{message.content}</div>
                )}
              </div>
            ))}
          </div>
        ) : (
          <div className="flex w-full justify-center  pt-32">
            <h1 className="text-3xl font-bold">
              Please Use The Input Filed Below
            </h1>
          </div>
        )}

        <form
          onSubmit={handleSubmit}
          className="fixed  bottom-2 left-0 right-0 mx-auto w-[75%] rounded-xl bg-blue-300 p-5"
        >
          <div className="relative flex items-center ">
            <Textarea
              tabIndex={0}
              required
              rows={1}
              value={input}
              onChange={handleInputChange}
              autoFocus
              placeholder="Send message"
              spellCheck={false}
              className="w-full rounded-lg p-5 pr-16 text-sm shadow-xl shadow-blue-700 placeholder:text-gray-400 focus:outline-none"
            />
            <button
              type="submit"
              className="absolute right-0 mr-5 rounded-lg bg-blue-500 p-2"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-6 w-6 text-white"
              >
                <path d="M3.478 2.404a.75.75 0 0 0-.926.941l2.432 7.905H13.5a.75.75 0 0 1 0 1.5H4.984l-2.432 7.905a.75.75 0 0 0 .926.94 60.519 60.519 0 0 0 18.445-8.986.75.75 0 0 0 0-1.218A60.517 60.517 0 0 0 3.478 2.404Z" />
              </svg>
            </button>
          </div>
        </form>
      </div> */}
    </>
    // <section
    //   id="pricing"
    //   className="relative z-20 overflow-hidden bg-white pb-12 pt-20 dark:bg-dark lg:pb-[90px] lg:pt-[120px]"
    // >
    //   <div className="container">
    //     <div className="mb-[60px]">
    //       <SectionTitle
    //         subtitle="Pricing Table"
    //         title="Our Pricing Plan"
    //         paragraph="There are many variations of passages of Lorem Ipsum available but the majority have suffered alteration in some form."
    //         center
    //       />
    //     </div>

    //     <div className="-mx-4 flex flex-wrap justify-center">
    //       {products.map((product, i) => (
    //         <PricingBox key={1} product={product} />
    //       ))}
    //       {/*
    //       <PricingBox
    //         popular={false}
    //         packageName="Lite"
    //         price="19.99"
    //         subtitle="STARTING FROM"
    //         btn="Purchase Now"
    //         purchaseLink="/#"
    //       >
    //         <OfferList text="1 User" />
    //         <OfferList text="All UI components" />
    //         <OfferList text="Lifetime access" />
    //         <OfferList text="Free updates" />
    //         <OfferList text="Use on 1 (one) project" />
    //         <OfferList text="3 Months support" />
    //       </PricingBox>
    //       <PricingBox
    //         popular={true}
    //         packageName="Basic"
    //         price="19.99"
    //         subtitle="STARTING FROM"
    //         btn="Purchase Now"
    //         purchaseLink="/#"
    //       >
    //         <OfferList text="1 User" />
    //         <OfferList text="All UI components" />
    //         <OfferList text="Lifetime access" />
    //         <OfferList text="Free updates" />
    //         <OfferList text="Use on 1 (one) project" />
    //         <OfferList text="3 Months support" />
    //       </PricingBox>
    //       <PricingBox
    //         packageName="Plus"
    //         price="70.99"
    //         subtitle="STARTING FROM"
    //         btn="Purchase Now"
    //         purchaseLink="/#"
    //       >
    //         <OfferList text="1 User" />
    //         <OfferList text="All UI components" />
    //         <OfferList text="Lifetime access" />
    //         <OfferList text="Free updates" />
    //         <OfferList text="Use on 1 (one) project" />
    //         <OfferList text="3 Months support" />
    //       </PricingBox> */}
    //     </div>
    //   </div>
    // </section>
  );
};

export default Pricing;
