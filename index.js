
function scuberGreetingForFeet( somevalue ){

  let result 
 if (somevalue <= 400){result = "This one is on me!" ; 
  return result
 }
 else if (somevalue <=2000){result = "That will be twenty bucks." ; 
 return result}
 else if (somevalue < 2500){result= "I will gladly take your thirty bucks." ;
  return result
 }
 else {result= "No can do.";
  return result
 }

  } 
scuberGreetingForFeet(199)
scuberGreetingForFeet(1500)
scuberGreetingForFeet(2001)
scuberGreetingForFeet(2501)




  // Write your code here!


function ternaryCheckCity(city){
  let result
  city==="NYC" ? (result="Ok, sounds good.") : ( result="No go.")
return result
  // Write your code here!
}

function switchOnCharmFromTip(tip){
  let result 
  switch (tip) {
    case 'generous':
      result = "Thank you so much.";
      return result;
      break;
     
    case "not as generous":
      result = "Thank you.";
      return result;
      break;
    default: 
      result = "Bye.";
      return result
      break;
      
      
  }

  // Write your code here!
}
switchOnCharmFromTip(generous)
switchOnCharmFromTip(not_as_generous)
switchOnCharmFromTip (thanks_for_everything)