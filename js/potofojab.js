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

// DOMができたら loading を付ける
document.addEventListener("DOMContentLoaded", () => {
  document.body.classList.add("loading");
});

// すべて読み込み終わったら解除
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