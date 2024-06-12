import { GoogleGenerativeAI } from "@google/generative-ai";
import Markdown from "markdown-to-jsx";
import { useEffect, useRef, useState } from "react";
import "./chatbot.css";
import { SyncLoader } from "react-spinners";
import MarkdownRenderer from "react-markdown-renderer";

const ChatBot = () => {
  const apiKey = import.meta.env.VITE_GEMINI_API_KEY;
  console.log(apiKey);
  const genAI = new GoogleGenerativeAI(apiKey);
  const [chats, setChats] = useState([]);
  const [prompt, setPrompt] = useState("");
  const [loading, setLoading] = useState(false);
  const chatEndRef = useRef(null);

  async function sendResponse(prompt) {
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const markdownText = response.text();
    console.log(markdownText);
    return markdownText;
  }

  useEffect(() => {
    console.log(chats);
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [chats]);

  const handleGenerate = async (e) => {
    e.preventDefault();
    const newPrompt = { prompt: true, content: prompt };
    setChats((prevChats) => [...prevChats, newPrompt]);
    setLoading(true);

    const responseText = await sendResponse(prompt);
    const newResponse = { prompt: false, content: responseText };
    setLoading(false);
    setChats((prevChats) => [...prevChats, newResponse]);
  };

  return (
    <div className="overflow-x-hidden">
      <div className="mt-5">
        <Markdown></Markdown>
      </div>

      <div className="fixed bottom-0 w-screen z-30 bg-red-400 p-1">
        <form onSubmit={handleGenerate} className="flex gap-1 items-center">
          <textarea
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            className="max-h-28 border border-black w-[70vw] p-1"
          ></textarea>
          <button className="p-1 bg-blue-500 text-white rounded-md">
            generate
          </button>
        </form>
      </div>

      <div className="mt-10 flex flex-col gap-5 overflow-x-hidden mb-20">
        {chats.length === 0
          ? null
          : chats.map((chat, index) => (
              <div key={index}>
                {chat.prompt ? (
                  <div className="flex justify-end">
                    <div className="bg-gray-300 rounded-lg max-w-[60vw] text-right mr-4 p-2">
                      <p>{chat.content}</p>
                    </div>
                  </div>
                ) : (
                  <div className="flex justify-start">
                    <div className="bg-purple-300 rounded-lg max-w-[60vw] text-left ml-4 p-2">
                      <MarkdownRenderer markdown={chat.content} />
                    </div>
                  </div>
                )}
              </div>
            ))}
        <div ref={chatEndRef} />
        {loading ? (
          <div className="flex justify-start">
            <div className="bg-purple-300 rounded-lg ml-4 p-2">
              <SyncLoader size={8} />
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default ChatBot;
