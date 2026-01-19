// MOCK DATA (temporar)
const status = {
  state: "AUTO",
  label: "STOP",
  speed: 50,
  time: new Date().toLocaleTimeString()
};

const logs = [
  "STOP",
  "RED LIGHT",
  "SPEED 50",
  "GREEN LIGHT"
];

// STATUS
document.getElementById("state").innerText = status.state;
document.getElementById("label").innerText = status.label;
document.getElementById("speed").innerText = status.speed;
document.getElementById("time").innerText = status.time;

// LOGS
const logsDiv = document.getElementById("logs");
logs.forEach(l => {
  const div = document.createElement("div");
  div.className = "log";
  div.innerText = `[${new Date().toLocaleTimeString()}] ${l}`;
  logsDiv.appendChild(div);
});

// BUTTONS (deocamdată console.log)
document.getElementById("stopBtn").onclick = () => {
  console.log("STOP pressed");
};

document.getElementById("startBtn").onclick = () => {
  console.log("START pressed");
};
