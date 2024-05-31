
function updateTimeAndDate() {
	const now = new Date();
	const daysOfWeek = [
		"Sunday",
		"Monday",
		"Tuesday",
		"Wednesday",
		"Thursday",
		"Friday",
		"Saturday",
	];
	document.getElementById("time").innerText = now.toLocaleTimeString();
	document.getElementById("date").innerText =
		now.toLocaleDateString() + " " + daysOfWeek[now.getDay()];
}
setInterval(updateTimeAndDate, 1000);
updateTimeAndDate();

let stopwatchInterval;
let stopwatchTime = 0;

function updateStopwatch() {
	const hours = String(Math.floor(stopwatchTime / 3600)).padStart(2, "0");
	const minutes = String(Math.floor((stopwatchTime % 3600) / 60)).padStart(
		2,
		"0",
	);
	const seconds = String(stopwatchTime % 60).padStart(2, "0");
	document.getElementById("stopwatch-time").innerText =
		`${hours}:${minutes}:${seconds}`;
}

document.getElementById("start-stopwatch").addEventListener("click", () => {
	if (!stopwatchInterval) {
		stopwatchInterval = setInterval(() => {
			stopwatchTime++;
			updateStopwatch();
		}, 1000);
	}
});

document.getElementById("stop-stopwatch").addEventListener("click", () => {
	clearInterval(stopwatchInterval);
	stopwatchInterval = null;
});

document.getElementById("reset-stopwatch").addEventListener("click", () => {
	clearInterval(stopwatchInterval);
	stopwatchInterval = null;
	stopwatchTime = 0;
	updateStopwatch();
});

let pomodoroInterval;
let pomodoroTime = 25 * 60;
const workTime = 25 * 60;
const shortBreakTime = 5 * 60;
const longBreakTime = 15 * 60;

function updateTimer() {
	const minutes = String(Math.floor(pomodoroTime / 60)).padStart(2, "0");
	const seconds = String(pomodoroTime % 60).padStart(2, "0");
	document.getElementById("timer-time").innerText = `${minutes}:${seconds}`;
}

function startPomodoro() {
	pomodoroInterval = setInterval(() => {
		if (pomodoroTime > 0) {
			pomodoroTime--;
			updateTimer();
		} else {
			clearInterval(pomodoroInterval);
			alert("Time's up!");
		}
	}, 1000);
}

document.getElementById("work-mode").addEventListener("click", () => {
	clearInterval(pomodoroInterval);
	pomodoroTime = workTime;
	updateTimer();
});

document.getElementById("short-break-mode").addEventListener("click", () => {
	clearInterval(pomodoroInterval);
	pomodoroTime = shortBreakTime;
	updateTimer();
});

document.getElementById("long-break-mode").addEventListener("click", () => {
	clearInterval(pomodoroInterval);
	pomodoroTime = longBreakTime;
	updateTimer();
});

document.getElementById("start-timer").addEventListener("click", () => {
	if (!pomodoroInterval) {
		startPomodoro();
	}
});

document.getElementById("reset-timer").addEventListener("click", () => {
	clearInterval(pomodoroInterval);
	pomodoroInterval = null;
	pomodoroTime = workTime;
	updateTimer();
});

updateTimer();

