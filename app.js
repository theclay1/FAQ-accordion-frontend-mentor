let plus = document.querySelectorAll(".Q>img");

document.querySelector("main").addEventListener("click", (ele) => {
  if (ele.target.src === "http://127.0.0.1:5500/img/icon-plus.svg") {
    for (i = 0; i < plus.length; i++) {
      plus[i].parentElement.parentElement.lastElementChild.style.display =
        "none";
      plus[i].src = "http://127.0.0.1:5500/img/icon-plus.svg";
    }
    ele.target.parentElement.parentElement.lastElementChild.style.display =
      "block";
    ele.target.src = "http://127.0.0.1:5500/img/icon-minus.svg";
  } else if (ele.target.src === "http://127.0.0.1:5500/img/icon-minus.svg") {
    ele.target.parentElement.parentElement.lastElementChild.style.display =
      "none";
    ele.target.src = "http://127.0.0.1:5500/img/icon-plus.svg";
  }
});
