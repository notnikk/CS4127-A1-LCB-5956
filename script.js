const hamburger = document.getElementById("hamburger")
const navLinks = document.getElementById("nav-links")

hamburger.addEventListener("click",() => {
	navLinks.classList.toggle("show");
});

const faqItems = document.querySelectorAll('.faq-item');

faqItems.forEach(item => {
  item.addEventListener('click',() => {
    item.classList.toggle('open');
  });
});

function validateForm() {
  let name = document.getElementById("username").value;
  let email = document.getElementById("email").value;
  let errorMsg = "";

  if (name.trim() === "" ) {
    errorMsg += "Name can't be empty." ;
  }
  
  if (!email.includes("@") || !email.includes(".")) {
    errorMsg += "Enter a valid email address." ;
  }
  
  if (errorMsg !== "") {
    alert(errorMsg);
    return false;
  }
  
  alert("Form successfully submitted!");
  return true;
}

const car = document.querySelector('moving-car');

if (car) {
  let position = -200;

  function moveCar() {
    position += 2;
    car.style.left = position + 'px';

    if (position > window.innerWidth) {
      position = -200;
    }

    requestAnimationFrame(moveCar);
  }
  
  moveCar;
}              	