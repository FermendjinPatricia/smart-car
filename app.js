// =======================
// FIREBASE IMPORTS
// =======================
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.8.0/firebase-app.js";
import { getDatabase, ref, onValue } from "https://www.gstatic.com/firebasejs/12.8.0/firebase-database.js";

// =======================
// FIREBASE CONFIG
// =======================
const firebaseConfig = {
  apiKey: "AIzaSyCAWsQl1oWd-PjSky-vRQbM6vLr-_me0n8",
  authDomain: "smart-car-1861c.firebaseapp.com",
  databaseURL: "https://smart-car-1861c-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "smart-car-1861c",
  storageBucket: "smart-car-1861c.firebasestorage.app",
  messagingSenderId: "298990367306",
  appId: "1:298990367306:web:3cefd62615d36629152cb3"
};

// =======================
// INIT
// =======================
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

// =======================
// DOM REFERENCES
// =======================
const stateEl = document.getElementById("state");
const labelEl = document.getElementById("label");
const speedEl = document.getElementById("speed");
const timeEl  = document.getElementById("time");

// =======================
// READ STATUS (LIVE)
// =======================
const statusRef = ref(db, "status");

onValue(statusRef, (snapshot) => {
  const data = snapshot.val();

  if (!data) return;

  stateEl.innerText = data.is_at_red_light ? "STOP" : "AUTO";
  labelEl.innerText = data.last_label ?? "---";
  speedEl.innerText = data.speed ?? "---";
  timeEl.innerText  = new Date(data.timestamp * 1000).toLocaleTimeString();
});
