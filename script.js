// 🔐 SIMPLE LOGIN (change credentials here)
const USER = "aaradhya";
const PASS = "piano123";

function login() {
  const u = username.value;
  const p = password.value;
  if (u === USER && p === PASS) {
    document.getElementById("loginBox").style.display = "none";
    document.getElementById("content").classList.remove("hidden");
  } else {
    alert("Wrong login");
  }
}

// 📊 VISITOR COUNTER
let visits = localStorage.getItem("visits");
visits = visits ? Number(visits) + 1 : 1;
localStorage.setItem("visits", visits);
document.getElementById("visitorCount").innerText =
  "Visitors: " + visits;
