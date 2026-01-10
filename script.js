// 📊 Visitor Counter
let visits = localStorage.getItem("visits");
visits = visits ? Number(visits) + 1 : 1;
localStorage.setItem("visits", visits);
document.getElementById("visitorCount").innerText = "Visitors: " + visits;

// 🔐 Admin Login
const ADMIN_PASSWORD = "pianoAdmin123";

function openAdmin() {
  document.getElementById("adminLogin").classList.toggle("hidden");
}

function adminLogin() {
  const pass = document.getElementById("adminPass").value;
  if (pass === ADMIN_PASSWORD) {
    document.getElementById("adminLogin").classList.add("hidden");
    document.getElementById("adminPanel").classList.remove("hidden");
  } else {
    alert("Wrong password");
  }
}

// 💾 Load saved content
let videos = JSON.parse(localStorage.getItem("videos") || "[]");
let images = JSON.parse(localStorage.getItem("images") || "[]");
let songs = JSON.parse(localStorage.getItem("songs") || "[]");

function render() {
  document.getElementById("videos").innerHTML =
    videos.map(v => `<iframe class="fade" src="https://www.youtube.com/embed/${v}" allowfullscreen></iframe>`).join("");

  document.getElementById("gallery").innerHTML =
    images.map(i => `<img class="fade" src="${i}">`).join("");

  document.getElementById("songs").innerHTML =
    songs.map(s => `<audio class="fade" controls src="${s}"></audio>`).join("");

  observeFade();
}

render();

// ➕ Add content
function addVideo() {
  videos.push(videoInput.value);
  localStorage.setItem("videos", JSON.stringify(videos));
  videoInput.value = "";
  render();
}

function addImage() {
  images.push(imageInput.value);
  localStorage.setItem("images", JSON.stringify(images));
  imageInput.value = "";
  render();
}

function addSong() {
  songs.push(songInput.value);
  localStorage.setItem("songs", JSON.stringify(songs));
  songInput.value = "";
  render();
}

// 👁️ Subtle scroll reveal (Wikipedia-style)
function observeFade() {
  const items = document.querySelectorAll(".fade");
  const observer = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add("show");
        observer.unobserve(e.target);
      }
    });
  }, { threshold: 0.15 });

  items.forEach(i => observer.observe(i));
}
