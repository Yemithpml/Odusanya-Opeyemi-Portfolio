"use client";

import { useEffect, useState } from "react";

export default function Greetings() {
  const greetings = [
    "Hi there",
    "Hola",
    "Konnichiwa",
    "Bonjour",
    "Namaste",
    "Ciao",
    "Hallo",
    "Nǐ hǎo",
  ];

  const [greetingIndex, setGreetingIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setGreetingIndex((prevIndex) =>
        prevIndex === greetings.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => clearInterval(intervalId);
  }, [greetings.length]);

  return (
    <span className="inline-flex items-center gap-2  font-medium border px-4 py-1 rounded-full">
      {greetings[greetingIndex]} <span aria-hidden>👋🏾</span>
    </span>
  );
}
