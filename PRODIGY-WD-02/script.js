let isRunning = false;
let time = 0;
let interval;
let lapTimes = [];

// Start or Stop the stopwatch
function startStop() {
    if (isRunning) {
        clearInterval(interval);
        document.getElementById('startStopBtn').textContent = "Start";
    } else {
        interval = setInterval(updateTime, 1000);
        document.getElementById('startStopBtn').textContent = "Stop";
    }
    isRunning = !isRunning;
}

// Reset the stopwatch
function reset() {
    clearInterval(interval);
    time = 0;
    lapTimes = [];
    updateTimeDisplay();
    document.getElementById('lapList').innerHTML = '';
    document.getElementById('startStopBtn').textContent = "Start";
    isRunning = false;
}

// Update the stopwatch display
function updateTime() {
    time++;
    updateTimeDisplay();
}

// Update the time display in HH:MM:SS format
function updateTimeDisplay() {
    let hours = Math.floor(time / 3600);
    let minutes = Math.floor((time % 3600) / 60);
    let seconds = time % 60;

    // Pad single-digit values with a zero
    hours = String(hours).padStart(2, '0');
    minutes = String(minutes).padStart(2, '0');
    seconds = String(seconds).padStart(2, '0');

    document.getElementById('timeDisplay').textContent = `${hours}:${minutes}:${seconds}`;
}

// Record a lap time
function recordLap() {
    if (!isRunning) return; // Only allow recording laps while the stopwatch is running

    let hours = Math.floor(time / 3600);
    let minutes = Math.floor((time % 3600) / 60);
    let seconds = time % 60;

    // Format lap time
    let lapTime = `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
    lapTimes.push(lapTime);

    // Add lap time to the list
    const lapList = document.getElementById('lapList');
    const lapItem = document.createElement('li');
    lapItem.textContent = `Lap ${lapTimes.length}: ${lapTime}`;
    lapList.appendChild(lapItem);
}
