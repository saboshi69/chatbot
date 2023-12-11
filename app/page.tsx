"use client";

import Link from "next/link";

export default function Chat() {
  return (
    <div className="flex flex-col w-full max-w-lg py-24 mx-auto stretch">
      <div className="p-4 max-w-2xl mx-auto">
        <h2 className="text-2xl font-bold mb-4">
          ChatGPT 3.5 Powered English Tutor
        </h2>
        <ul className="list-disc pl-5 space-y-2">
          <li className="text-lg">
            Grammar Check: Identifies and corrects grammatical errors in
            real-time.
          </li>
          <li className="text-lg">
            Paraphrasing Tool: Helps in rephrasing sentences or paragraphs while
            maintaining the original meaning.
          </li>
          <li className="text-lg">
            Spell Check: Spots and corrects spelling mistakes, even in complex
            contexts.
          </li>
          <li className="text-lg">
            Grammar Improvement Suggestions: Provides suggestions for better
            word choice and sentence structure.
          </li>
        </ul>
      </div>
    </div>
  );
}
