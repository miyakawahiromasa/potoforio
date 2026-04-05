// =====================
// レスポンシブ処理
// =====================
function responsiveAdjust() {
  const width = window.innerWidth;

  const largeTexts = document.querySelectorAll(".large-text");
  const prTexts = document.querySelectorAll(".pr-text p");

  if (width < 600) {
    largeTexts.forEach(el => el.style.fontSize = "20px");
    prTexts.forEach(el => el.style.fontSize = "14px");
  } else if (width < 1024) {
    largeTexts.forEach(el => el.style.fontSize = "24px");
    prTexts.forEach(el => el.style.fontSize = "16px");
  } else {
    largeTexts.forEach(el => el.style.fontSize = "28px");
    prTexts.forEach(el => el.style.fontSize = "18px");
  }
}

// =====================
// ローディング
// =====================
document.addEventListener("DOMContentLoaded", () => {
  document.body.classList.add("loading");
});

window.addEventListener("load", () => {
  responsiveAdjust();

  const loading = document.getElementById("loading");
  if (!loading) return;

  loading.classList.add("hide");

  setTimeout(() => {
    loading.style.display = "none";
    document.body.classList.remove("loading");
  }, 500);
});

window.addEventListener("resize", responsiveAdjust);

// =====================
// モーダル（複数対応）
// =====================
document.querySelectorAll(".appealButton").forEach(button => {
  button.addEventListener("click", () => {
    const target = button.dataset.target;
    const modal = document.getElementById(target);

    if (!modal) return;

    modal.style.display = "flex";
    document.body.classList.add("modal-open");
  });
});

document.querySelectorAll(".close").forEach(closeBtn => {
  closeBtn.addEventListener("click", () => {
    const modal = closeBtn.closest(".modal");
    modal.style.display = "flex";
    document.body.classList.remove("modal-open");
  });
});

// 背景クリックで閉じる
document.querySelectorAll(".modal").forEach(modal => {
  modal.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.style.display = "none";
      document.body.classList.remove("modal-open");
    }
  });
});

