let mediaStream = null;
const startButton = document.getElementById('startButton');
const stopButton = document.getElementById('stopButton');

startButton.addEventListener('click', async () => {
  try {
    // Request microphone access
    mediaStream = await navigator.mediaDevices.getUserMedia({ audio: true });
    
    // Handle success
    console.log('Microphone access granted');
    startButton.disabled = true;
    stopButton.disabled = false;
  } catch (error) {
    console.error('Error accessing microphone:', error);
    alert('Microphone access denied or not available.');
  }
});

stopButton.addEventListener('click', () => {
  if (mediaStream) {
    // Stop all audio tracks
    mediaStream.getTracks().forEach(track => track.stop());
    console.log('Microphone stopped');
    
    startButton.disabled = false;
    stopButton.disabled = true;
  }
});
