"use strict";
const axios = require("axios");

//==== IMPORTS ====//
import { Groq } from "groq-sdk";

async function transcribeAudio(audioData) {
  let url_listen = "https://api.deepgram.com/v1/listen";
  let DG_KEY = "45a33e236576b99bd01aeb4adff48b2c9674ff4b";

  return new Promise((resolve, reject) => {
    // Define request headers
    const headers = {
      Accept: "application/json",
      Authorization: `Token ${DG_KEY}`,
      "Content-Type": "audio/mp3", // Use the correct content type
    };

    // Define fetch options
    const options = {
      method: "POST",
      headers: headers,
      body: audioData,
    };

    // Make the POST request using fetch
    fetch(url_listen, options)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to make request: " + response.statusText);
        }
        return response.json();
      })
      .then((data) => {
        console.dir(data, { depth: null }); // Log the response data
        resolve(data); // Return the data as JSON
      })
      .catch((error) => {
        console.error("Error:", error);
        reject(error); // Reject the promise with the error
      });
  });
}

async function audioToText(audioData) {
  let transcription = await transcribeAudio(audioData);
  const content = transcription.results.channels[0].alternatives[0].transcript;
  console.log("Testing audio content");
  console.log(content);
  return content;
}

async function playText(content) {
  let url_speak = "https://api.deepgram.com/v1/speak?model=aura-asteria-en";
  let DG_KEY = "45a33e236576b99bd01aeb4adff48b2c9674ff4b";
  const config = {
    headers: {
      Authorization: `Token ${DG_KEY}`,
      "Content-Type": "application/json",
    },
    responseType: "blob",
  };
  let data = {
    text: content,
  };

  axios
    .post(url_speak, data, config)
    .then((response) => {
      // Create a Blob from the response data
      const blob = new Blob([response.data], { type: "audio/mpeg" });

      audioToText(response.data); // TESTING THIS FUNCTION

      const url = URL.createObjectURL(blob);

      // Set the source of the audio player to the Blob URL
      const audioPlayer = document.getElementById("audio-player");
      audioPlayer.src = url;

      // Load the audio
      audioPlayer.load();
      audioPlayer.play();
    })
    .catch((error) => {
      console.error("Error:", error.message);
    });
}

function scrollToBottom() {
  const chat = document.getElementById("mainpad");
  chat.scrollTop = chat.scrollHeight;
}

//==== CHATLOG ====//
function addToChat(s, is_human, do_save = true) {
  const newDiv = document.createElement("div");
  const newSubDiv = document.createElement("div");
  const newContent = document.createTextNode(s);
  newDiv.id = is_human == true ? "human-message" : "ai-message";
  newSubDiv.appendChild(newContent);
  newDiv.append(newSubDiv);
  const currentDiv = document.getElementById("chatlog");
  currentDiv.appendChild(newDiv);
  if (do_save) saveToLocalStorage([s, is_human]);
  scrollToBottom();
}

function saveToLocalStorage(message) {
  let chatLog = JSON.parse(localStorage.getItem("chatLog")) || [];
  chatLog.push(message);
  localStorage.setItem("chatLog", JSON.stringify(chatLog));
}

function loadChatLog() {
  const chatLog = JSON.parse(localStorage.getItem("chatLog")) || [];
  chatLog.forEach((x) => addToChat(x[0], x[1], false));
}

function clearChatLog() {
  localStorage.removeItem("chatLog");
  const chatlogDiv = document.getElementById("chatlog");
  chatlogDiv.innerHTML = "";
}

//==== CHATTING FEATURE ====//
document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("input-field-form");
  const input = document.getElementById("input-field");
  const chatClear = document.getElementById("clear-chat");

  loadChatLog();

  function handleSubmit(event) {
    event.preventDefault();
    const userInput = input.value.trim();
    addToChat(userInput, true);
    messageGroq(userInput);
    // output.textContent = `You entered: ${userInput}`;
    input.value = ""; // Clear the input field
  }

  // Handle form submission
  form.addEventListener("submit", handleSubmit);

  // Handle Enter key press
  input.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
      handleSubmit(event);
    }
  });

  chatClear.addEventListener("click", clearChatLog);
});

//==== GROQ CALLS ====//
// const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });
const groq = new Groq({
  apiKey: "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",
  dangerouslyAllowBrowser: true,
});

// export
async function messageGroq(content) {
  // const chatCompletion = await getGroqChatCompletion(content);
  // // Print the completion returned by the LLM.
  // //   console.log(chatCompletion.choices[0]?.message?.content || "");
  // const s = chatCompletion.choices[0]?.message?.content || "";
  // addToChat(s);
  const chatCompletion = await getGroqChatCompletion(
    content,
    JSON.parse(localStorage.getItem("currentHTMLElements"))
  );
  const s = chatCompletion.choices[0]?.message?.content || "";
  let parsedResponse;
  try {
    parsedResponse = JSON.parse(s);
  } catch (error) {
    console.error("Error parsing JSON response:", error);
    throw new Error("Invalid JSON format from completion");
  }
  const explanation = parsedResponse.explanation;
  const actions = parsedResponse.action;
  console.log(actions);
  await playText(explanation);
  addToChat(explanation);
}

// export
async function getGroqChatCompletion(content, elements) {
  //   input_entries = [
  //     ChatEntry(role='system', content="
  //               You are tasked with coming up with high level plan of how to solve the task specified by the user by performing a sequence on actions on a website given the elements available on the website.
  //               Your response should be formatted as json following the structure {'actions':[Action], 'explanation': str}, where the explanation is a short explanation of the actions being and an action can look like any of the following,
  //               - "Input(id="{id}").set_value("{input}")"
  //               - "TextArea(id="{id}".set_value("{input}")"
  //               - "Input(id="{id}").submit()"
  //         """),
  //     ChatEntry(role='system', content="The following elements are available in the website:\n" + '\n'.join([str(i) for i in elements])),
  //     ChatEntry(role='user', content=f"I want to buy the latest iPhone."),
  // ]
  // output = json.loads(chat_api.chat(input_entries))
  // explanation = output['explanation']
  // actions = output['actions']

  return groq.chat.completions.create({
    messages: [
      {
        role: "system",
        content: `You are tasked with coming up with a high level solution to perform the task specified by the user. Your response should beformatted as a json including {action:[Action], explanation: str} where the explanation is a concise explanation of the actions to take and the actions are any of the following
          - {type: "input", id: "{id}", value: "{input}", action="set_value"}
          - {type: "input", id: "{id}", action="submit"}

        Try to keep your actions within the current webpage. The following elements are available on the website, and their HTML attributes:\n${elements}
        `,
      },
      {
        role: "user",
        content: content,
      },
    ],
    model: "llama3-8b-8192",
    response_format: { type: "json_object" },
  });
}

//     },
//       {
//         role: "user",
//         content: content,
//       },
//     ],
//     model: "llama3-8b-8192",
//   });
// }

//==== GET DOM ====//
chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  console.log(
    sender.tab
      ? "from a content script:" + sender.tab.url
      : "from the extension"
  );
  if (request) sendResponse({ farewell: "received" });

  // addToChat(JSON.stringify(request))
  // let result = request.elements;
  // addToChat(request)
  // addToChat(JSON.stringify(request));
  saveElements(request);
  // addToChat(result[0].tagName);
});

async function saveElements(result) {
  // let elems = [];
  // for (let i = 0; i < result.length; i++) {
  //   if (result[i].tagName === 'input' || result[i].tagName === 'textarea' || result[i].tagName === 'button' || result[i].tagName === 'a' || result[i].tagName === 'div') {
  //     elems.push("Tag: " + result[i].tagName + ", Attributes: " + result[i].attributes + ", innerText: " + result[i].innerText);
  //   }
  // }
  // addToChat(request.greeting);
  // let chatLog = JSON.parse(localStorage.getItem("chatLog")) || [];
  // chatLog.push(message);
  // console.log(chatLog)
  localStorage.setItem("currentHTMLElements", JSON.stringify(result));
  // addToChat(localStorage.getItem("currentHTMLElements"));
  // addToChat(JSON.stringify(result));
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
