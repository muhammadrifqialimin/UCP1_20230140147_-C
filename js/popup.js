window.addEventListener("DOMContentLoaded", () => {
  setTimeout(() => {
    const modal = document.getElementById("promo-modal");
    if (modal) modal.style.display = "flex";
  }, 1200);

  document.getElementById("promo-close-btn").onclick = closeModal;
  document.getElementById("promo-ok-btn").onclick = function () {
    alert("Terima kasih sudah bergabung dengan Sejajar!");
    closeModal();
  };

  function closeModal() {
    const modal = document.getElementById("promo-modal");
    if (modal) modal.style.display = "none";
  }
});
