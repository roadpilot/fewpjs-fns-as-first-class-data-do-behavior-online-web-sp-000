/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
function greet(input){
  // return input
  if (input=="08:40"){
  return "Good Morning";
  }
  elseif (input=="14:21"){
  return "Good Afternoon";
  }
  else (input=="19:00"){
  return "Good Evening";
  }
}
/* Write your implementation of displayMessage() */
function displayMessage(){
  
}