// Changing color of list-cards * 3 to red on mouse over cf active state

const colored = document.querySelectorAll(".colored").forEach((colored)=> {
  colored.addEventListener("mouseover", (event)=> {
    event.currentTarget.classList.toggle("red");
  });
});

// Changing color of side-cards h3 to orange on mouse over cf active state
const oranged = document.querySelectorAll('.oranged').forEach((oranged)=> {
  oranged.addEventListener("mouseover", (event)=> {
    event.currentTarget.classList.toggle("orange")
  });
});

// Displaying or hiding mobile-sized navbar

const open = document.getElementById('open');
  open.addEventListener("click", (event)=> {
    event.currentTarget.style.display= 'none';
  });

const close = document.querySelector('.close');
  close.addEventListener("click", (event)=> {
    event.currentTarget.style.display= 'none';
  });

// const element = document.querySelector(CSS_SELECTOR);
// // Hide
// element.style.display= "none";
// Show
// element.style.display= "";
