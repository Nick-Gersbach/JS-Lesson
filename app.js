//Step 1 - Assign Variable to HTML element you want to select
const mainHead = document.querySelector('.mainHead');

//Step 2 -  Assign an event Listenter to the variable
mainHead.addEventListener('click', changeColor);

//Step 3 - Add function to make something happen
function changeColor() {

   mainHead.style.color = 'purple';

}



