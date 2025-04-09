function convertToPDF() {
  const loader = document.getElementById("loader");
  const status = document.getElementById("statusText");

  loader.classList.remove("hidden");
  status.textContent = "Processing... please wait.";

  setTimeout(() => {
    loader.classList.add("hidden");
    status.textContent = "✅ Conversion done! (This is a demo placeholder)";
  }, 2000);
}