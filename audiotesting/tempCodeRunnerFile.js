// /Users/murph/DecibelDetect/test/audiotest.js

document.addEventListener('DOMContentLoaded', () => {
    const startButton = document.createElement('button');
    startButton.textContent = 'Start Recording';
    document.body.appendChild(startButton);

    const stopButton = document.createElement('button');
    stopButton.textContent = 'Stop Recording';
    stopButton.style.display = 'none';
    document.body.appendChild(stopButton);

    const decibelDisplay = document.createElement('div');
    decibelDisplay.textContent = 'Decibels: 0';
    document.body.appendChild(decibelDisplay);

    let audioContext;
    let mediaRecorder;
    let analyser;
    let dataArray;

    startButton.addEventListener('click', async () => {
        startButton.style.display = 'none';
        stopButton.style.display = 'inline';

        audioContext = new (window.AudioContext || window.webkitAudioContext)();
        const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
        const source = audioContext.createMediaStreamSource(stream);

        analyser = audioContext.createAnalyser();
        analyser.fftSize = 256;
        const bufferLength = analyser.frequencyBinCount;
        dataArray = new Uint8Array(bufferLength);

        source.connect(analyser);

        mediaRecorder = new MediaRecorder(stream);
        mediaRecorder.start();

        updateDecibels();
    });

    stopButton.addEventListener('click', () => {
        startButton.style.display = 'inline';
        stopButton.style.display = 'none';

        mediaRecorder.stop();
        audioContext.close();
    });

    function updateDecibels() {
        analyser.getByteFrequencyData(dataArray);
        const sum = dataArray.reduce((a, b) => a + b, 0);
        const average = sum / dataArray.length;
        const decibels = 20 * Math.log10(average / 255);
        decibelDisplay.textContent = `Decibels: ${decibels.toFixed(2)}`;

        if (mediaRecorder && mediaRecorder.state === 'recording') {
            requestAnimationFrame(updateDecibels);
        }
    }
});