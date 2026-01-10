// 🌙 Dark mode
function toggleDark() {
  document.body.classList.toggle("dark");
}

// 📑 Tabs
function showTab(id) {
  document.querySelectorAll(".tab").forEach(t => t.classList.add("hidden"));
  document.getElementById(id).classList.remove("hidden");
}

// 📊 Visitor counter (ADMIN ONLY)
let visits = localStorage.getItem("visits");
visits = visits ? Number(visits) + 1 : 1;
localStorage.setItem("visits", visits);

// 🔐 Admin
const ADMIN_PASSWORD = "pianoAdmin123";

function openAdmin() {
  document.getElementById("adminLogin").classList.toggle("hidden");
}

function togglePass() {
  adminPass.type = adminPass.type === "password" ? "text" : "password";
}

function adminLogin() {
  if (adminPass.value === ADMIN_PASSWORD) {
    adminLoginBox();
  } else alert("Wrong password");
}

function adminLoginBox() {
  document.getElementById("adminLogin").classList.add("hidden");
  document.getElementById("adminPanel").classList.remove("hidden");
  document.getElementById("adminVisits").innerText =
    "Total visits: " + visits;
}

// 💾 Content
let videos = JSON.parse(localStorage.getItem("videos") || "[]");
let images = JSON.parse(localStorage.getItem("images") || "[]");
let songs = JSON.parse(localStorage.getItem("songs") || "[]");

function render() {
  videosBox().innerHTML = videos.map(v =>
    `<iframe class="fade" src="https://www.youtube.com/embed/${v}"></iframe>`
  ).join("");

  galleryBox().innerHTML = images.map(i =>
    `<img class="fade" src="${i}">`
  ).join("");

  songsBox().innerHTML = songs.map(s =>
    `<audio class="fade" controls src="${s}"></audio>`
  ).join("");

  observe();
}

const videosBox = () => document.getElementById("videos");
const galleryBox = () => document.getElementById("gallery");
const songsBox = () => document.getElementById("songs");

render();

function addVideo() {
  videos.push(videoInput.value);
  save();
}

function addImage() {
  images.push(imageInput.value);
  save();
}

function addSong() {
  songs.push(songInput.value);
  save();
}

function save() {
  localStorage.setItem("videos", JSON.stringify(videos));
  localStorage.setItem("images", JSON.stringify(images));
  localStorage.setItem("songs", JSON.stringify(songs));
  render();
}

// ✨ Subtle animation
function observe() {
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add("show");
        obs.unobserve(e.target);
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll(".fade").forEach(el => obs.observe(el));
}
