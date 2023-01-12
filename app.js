// Changing color of list-cards titles to red on mouse over cf active state
const colored = document.querySelectorAll(".colored").forEach((colored)=> {
  colored.addEventListener("mouseover", (event)=> {
    event.currentTarget.classList.toggle("red");
  });
});

// Changing color of side-cards titles to orange on mouse over cf active state
const oranged = document.querySelectorAll('.oranged').forEach((oranged)=> {
  oranged.addEventListener("mouseover", (event)=> {
    event.currentTarget.classList.toggle("orange")
  });
});

// Displaying or hiding mobile-sized navbar
const toggle = document.querySelector('.toggle');
const body = document.querySelector('body');
// on click on toogle buttons add and remove a class open on the body,
// this way we know when the menu is opened thanks to this class
toggle.addEventListener("click", (event) => {
  body.classList.toggle("open");
})

// const element = document.querySelector(CSS_SELECTOR);
// // Hide
// element.style.display= "none";
// Show
// element.style.display= "";
