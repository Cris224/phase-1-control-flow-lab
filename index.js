function scuberGreetingForFeet(someNumber){
if (someNumber <= 400) {
  return "This one is on me!";
}else if (someNumber > 2500 ){
  return "No can do."; 
}else if (someNumber > 2000){
  return `I will gladly take your thirty bucks.`;
}
}

function ternaryCheckCity(x){
   return x == "NYC" ? "Ok, sounds good." : "No go.";
}

function switchOnCharmFromTip(tip){
  switch(tip){
    case "generous" :
      return "Thank you so much.";
    case "not as generous":
      return "Thank you.";
    case "thanks for everything":
      return "Bye.";
  }
  
}