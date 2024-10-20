const fs = require("fs");
const fetch = require('node-fetch');

require('dotenv').config();
const { Deepgram } = require('@deepgram/sdk');
const recorder = require('node-record-lpcm16');
const playSound = require('play-sound')(opts = {});
const { exec } = require('child_process');
const { createClient } = require("@deepgram/sdk");
const axios = require("axios");


const url_listen = "https://api.deepgram.com/v1/listen";
const url_speak = "https://api.deepgram.com/v1/speak?model=aura-asteria-en";
const DG_KEY = "45a33e236576b99bd01aeb4adff48b2c9674ff4b"; // Replace with your actual API key
let mediaRecorder;
let audioChunks = [];

async function recordAudio(filename, duration = 2) {
    return new Promise((resolve) => {
        const file = fs.createWriteStream('temp.wav', { encoding: 'binary' });

        console.log('Recording...');
        const recording = recorder.record({
            sampleRate: 44100,
            channels: 2,
            format: 'wav',
        }).stream();

        recording.pipe(file);

        setTimeout(() => {
            console.log('Finished recording.');
            recording.end(); // Correctly stop the recording stream
            resolve('temp.wav');
        }, duration * 1000);
    });
}

async function transcribeAudio(audioFilePath) {
    return new Promise((resolve, reject) => {
        // Read the audio file as binary data
        fs.readFile(audioFilePath, (err, audioData) => {
        if (err) {
            console.error("Error reading audio file:", err);
            return reject(err);
        }

        // Define request headers
        const headers = {
            Accept: "application/json",
            Authorization: Token ${DG_KEY},
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
    });
}
  
async function convertWavToMp3(inputPath, outputPath) {
    exec(ffmpeg -i ${inputPath} -codec:a libmp3lame -qscale:a 2 ${outputPath}, (err) => {
        if (err) {
            console.error(Error converting to MP3: ${err.message});
        }
    });
}

async function playMp3(filePath) {
    playSound.play(filePath, (err) => {
        if (err) {
            console.error(Error playing audio: ${err.message});
        }
    });
}

async function main() {
    const buffer = 'output.mp3';
    const transcriptPath = 'transcript.json';
    const duration = 5;

    for (let i = 0; i < 1; i++) {
        try {
            transcription = await transcribeAudio(buffer);
            data = JSON.stringify(transcription, null, 4)
            fs.writeFileSync(transcriptPath, data);

            const content = transcription.results.channels[0].alternatives[0].transcript;
            console.log(content);

            const config = {
                headers: {
                  Authorization: Token ${DG_KEY},
                  "Content-Type": "application/json",
                },
                responseType: "stream", // Ensure the response is treated as a stream
              };
            data = {
                text: content,
              };
            axios
                .post(url_speak, data, config)
                .then((response) => {
                    if (response.status !== 200) {
                    console.error(HTTP error! Status: ${response.status});
                    return;
                    }
                    const dest = fs.createWriteStream("output.mp3");
                    response.data.pipe(dest);
                    dest.on("finish", () => {
                    console.log("File saved successfully.");
                    });
                })
                .catch((error) => {
                    console.error("Error:", error.message);
                });
                
            await playMp3(buffer); // Adjust as needed based on your speak response handling

        } catch (error) {
            console.error(Error in main function: ${error.message});
        }
    }
}

main()