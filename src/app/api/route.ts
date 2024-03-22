import { getServerSession } from "next-auth/next";
import { NextResponse } from "next/server";
import { authOptions } from "./auth/[...nextauth]/route";

// import { Configuration, OpenAIApi } from "openai-edge"; 
// import { OpenAIStream, StreamingTextResponse } from "ai";

// const config = new Configuration({
//   apiKey:process.env.OPEN_API_KEY
// })

// const openai = new OpenAIApi(config)

// export const runtime = "edge";

// export async function POST(req: Request) {
//   const {messages} =await req.json()

//   const response = await openai.createChatCompletion ({
//     model:'gpt-3.5-turbo',
//     stream:true,
//     messages: messages,
//   });

//   const stream = OpenAIStream(response);

//   return new StreamingTextResponse(stream)

// }

export async function GET(request: Request) {
  const session = await getServerSession(authOptions);

  if (!session) {
    return new NextResponse(JSON.stringify({ error: "unauthorized" }), {
      status: 401,
    });
  }

  return NextResponse.json({ authenticated: !!session });
}
