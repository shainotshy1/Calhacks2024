'use strict';

//==== IMPORTS ====//
// import OpenAI from "openai";
// import Groq from "groq-sdk";
// const Groq = require("groq-sdk");
// import { Groq } from "../node_modules/groq-sdk/index.js";
// import { Groq } from "../node_modules/groq-sdk/index.js";
// const Groq = require("./node_modules/groq-sdk");

import { Groq } from "groq-sdk"

//==== CHATLOG ====//
function addToChat(s) {
    // create a new div element
    const newDiv = document.createElement("div");
    // and give it some content
    const newContent = document.createTextNode(s);
    // add the text node to the newly created div
    newDiv.appendChild(newContent);
    // add the newly created element and its content into the DOM
    const currentDiv = document.getElementById("chatlog");
    // document.body.insertBefore(newDiv, currentDiv);
    currentDiv.appendChild(newDiv);
}

//==== CHATTING FEATURE ====//
document.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById('input-field-form');
  const input = document.getElementById('input-field');
  // const output = document.getElementById('output');

  function handleSubmit(event) {
      event.preventDefault();
    const userInput = input.value.trim();
    addToChat(userInput);
    messageGroq(userInput);
      // output.textContent = `You entered: ${userInput}`;
      input.value = ''; // Clear the input field
  }

  // Handle form submission
  form.addEventListener('submit', handleSubmit);

  // Handle Enter key press
  input.addEventListener('keypress', function(event) {
      if (event.key === 'Enter') {
          handleSubmit(event);
      }
  });
});
// const inputs = document.getElementById("input-field").elements;
// const input = inputs[0];

// addEventListener("submit", (event) => {});

// onsubmit = (event) => {};

//==== GROQ CALLS ====//
// const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });
const groq = new Groq({ apiKey: "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", dangerouslyAllowBrowser: true})

// export
async function messageGroq(content) {
  const chatCompletion = await getGroqChatCompletion(content);
  // Print the completion returned by the LLM.
    //   console.log(chatCompletion.choices[0]?.message?.content || "");
    const s = chatCompletion.choices[0]?.message?.content || "";
    addToChat(s);
}

// export
async function getGroqChatCompletion(content) {
  return groq.chat.completions.create({
    messages: [
      {
        role: "user",
        content: content,
      },
    ],
    model: "llama3-8b-8192",
  });
}

//==== MAIN ====//
// addToChat(instruction)
// main()

// call api
// fetch webpage elements

//==== mic attempts

// export const injectMicrophonePermissionIframe = () => {
//   const iframe = document.createElement("iframe");
//   iframe.setAttribute("hidden", "hidden");
//   iframe.setAttribute("id", "permissionsIFrame");
//   iframe.setAttribute("allow", "microphone");
//   iframe.src = chrome.runtime.getURL("sidebar.html");
//   document.body.appendChild(iframe);
// };

// navigator.mediaDevices.getUserMedia({ audio: true })
// .then(
//   (stream) => {
//     const audio = stream;
//   })
// .catch((err) => {
//   console.error(`${err.name}: ${err.message}`);
// })


// import Vapi from "@vapi-ai/web";

// const vapi = new Vapi("b1dcd146-1d59-4b93-802c-2ca2ce1c4462");

// const assistantOptions = {
//     name: "Vapi’s Pizza Front Desk",
//     firstMessage: "Vappy’s Pizzeria speaking, how can I help you?",
//     transcriber: {
//       provider: "deepgram",
//       model: "nova-2",
//       language: "en-US",
//     },
//     voice: {
//       provider: "playht",
//       voiceId: "jennifer",
//     },
//     model: {
//       provider: "openai",
//       model: "gpt-4",
//       messages: [
//         {
//           role: "system",
//           content: `You are a voice assistant for Vappy’s Pizzeria, a pizza shop located on the Internet.

//   Your job is to take the order of customers calling in. The menu has only 3 types
//   of items: pizza, sides, and drinks. There are no other types of items on the menu.

//   1) There are 3 kinds of pizza: cheese pizza, pepperoni pizza, and vegetarian pizza
//   (often called "veggie" pizza).
//   2) There are 3 kinds of sides: french fries, garlic bread, and chicken wings.
//   3) There are 2 kinds of drinks: soda, and water. (if a customer asks for a
//   brand name like "coca cola", just let them know that we only offer "soda")

//   Customers can only order 1 of each item. If a customer tries to order more
//   than 1 item within each category, politely inform them that only 1 item per
//   category may be ordered.

//   Customers must order 1 item from at least 1 category to have a complete order.
//   They can order just a pizza, or just a side, or just a drink.

//   Be sure to introduce the menu items, don't assume that the caller knows what
//   is on the menu (most appropriate at the start of the conversation).

//   If the customer goes off-topic or off-track and talks about anything but the
//   process of ordering, politely steer the conversation back to collecting their order.

//   Once you have all the information you need pertaining to their order, you can
//   end the conversation. You can say something like "Awesome, we'll have that ready
//   for you in 10-20 minutes." to naturally let the customer know the order has been
//   fully communicated.

//   It is important that you collect the order in an efficient manner (succinct replies
//   & direct questions). You only have 1 task here, and it is to collect the customers
//   order, then end the conversation.

//   - Be sure to be kind of funny and witty!
//   - Keep all your responses short and simple. Use casual language, phrases like "Umm...", "Well...", and "I mean" are preferred.
//   - This is a voice conversation, so keep your responses short, like in a real conversation. Don't ramble for too long.`,
//         },
//       ],
//     },
//   };

//   vapi.start(assistantOptions);
