let inpName = document.querySelector(".inpName");
let inpPassword = document.querySelector(".inpPassword");
let inpEmail = document.querySelector(".inpEmail");
let svg1 = document.querySelector(".input:nth-of-type(1) svg");
let svg2 = document.querySelector(".input:nth-of-type(2) svg");
let svg3 = document.querySelector(".input:nth-of-type(3) svg");
let span1 = document.querySelector("span:nth-of-type(1)");
let span2 = document.querySelector("span:nth-of-type(2)");
let span3 = document.querySelector("span:nth-of-type(3)");
let button = document.querySelector("button:nth-of-type(1)");
let lastMsg = document.querySelector("#welcome");
let string = /[a-zA-Z]/;

function btn() {
  let nameValue = inpName.value;
  let PasswordValue = inpPassword.value;
  let EmailValue = inpEmail.value;

  //verify name
  if (
    nameValue[0] === nameValue[0].toUpperCase() &&
    nameValue[0].match(string)
  ) {
    svg1.style.scale = "1";
    span1.style.display = "none";
  } else {
    span1.style.display = "inline";
    svg1.style.scale = "0";
  }

  //varify password
  if (
    /[0-9]/.test(PasswordValue) &&
    PasswordValue.length >= [9] &&
    /[A-Z]/.test(PasswordValue)
  ) {
    svg2.style.scale = "1";
    span2.style.display = "none";
  } else {
    span2.style.display = "inline";
    svg2.style.scale = "0";
  }

  //verify Email
  if (/@+./g.test(EmailValue)) {
    svg3.style.scale = "1";
    span3.style.display = "none";
  } else {
    span3.style.display = "inline";
    svg3.style.scale = "0";
  }

  // if all conditions are true
  if (
    svg1.style.scale === "1" &&
    svg2.style.scale === "1" &&
    svg3.style.scale === "1"
  ) {
    lastMsg.style.display = "block";
  } else {
    console.log("check");
  }
}
