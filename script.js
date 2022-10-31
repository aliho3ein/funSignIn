const funBtn = document.querySelector(".funBtn");
const funPass = document.getElementById("funPass");
const infoFun = document.querySelector(".infoFun");
let btnPlace = true;
funBtn.addEventListener("mouseover", () => {
  if (funPass.value.length <= 5) {
    if (btnPlace) {
      funBtn.style.marginLeft = "-100px";
    } else {
      funBtn.style.marginLeft = "100px";
    }
    btnPlace = !btnPlace;
    infoFun.textContent = funMassage[Math.trunc(Math.random(0, 1) * 9)];
  } else {
    console.log(funPass.value);
    infoFun.textContent = "Congratulate :)";
  }
});

let funMassage = [
  "Try Again :))",
  "you are too slow :D",
  "Nop :D",
  "Do ur best ...",
  "You Got this bro try again :)",
  "Catch me :x",
  "No way :O",
  "Do it Again ;)",
  "What was That",
  "Don't Cry :D",
];
