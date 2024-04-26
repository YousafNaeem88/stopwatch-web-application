let timer;
let isRunning = false;
let lapCounter = 1;

function startStop() {
    if (isRunning) {
        clearInterval(timer);
        document.getElementById("startStop").textContent = "Start";
    } else {
        timer = setInterval(run, 10);
        document.getElementById("startStop").textContent = "Stop";
    }
    isRunning = !isRunning;
}

function run() {
    let display = document.getElementById("display");
    let time = display.textContent.split(":");
    let h = parseInt(time[0]);
    let m = parseInt(time[1]);
    let s = parseInt(time[2]);

    s++;

    if (s === 100) {
        s = 0;
        m++;
    }
    if (m === 60) {
        m = 0;
        h++;
    }

    display.textContent = (h < 10 ? "0" : "") + h + ":" +
                           (m < 10 ? "0" : "") + m + ":" +
                           (s < 10 ? "0" : "") + s;
}

function reset() {
    clearInterval(timer);
    isRunning = false;
    document.getElementById("display").textContent = "00:00:00";
    document.getElementById("startStop").textContent = "Start";
    lapCounter = 1;
    document.getElementById("laps").innerHTML = "";
}

function lap() {
    if (isRunning) {
        let lapTime = document.getElementById("display").textContent;
        let lapItem = document.createElement("li");
        lapItem.textContent = "Lap " + lapCounter + ": " + lapTime;
        document.getElementById("laps").appendChild(lapItem);
        lapCounter++;
    }
}
