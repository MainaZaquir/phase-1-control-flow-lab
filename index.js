function scuberGreetingForFeet(distance) {
  // Write your code here!

  if (distance <= 400) {
    return 'This one is on me!';
  }
  else if (distance > 2000) {
    return 'I will gladly take your thirty bucks.';
  }
  else if (distance > 2500) {
    return '+No can do.';
  }
}

// Example usage
console.log(scuberGreetingForFeet("300")); // Output: 'This one is on me!'
console.log(scuberGreetingForFeet("2300")); // Output: 'I will gladly take yor thirty bucks.'
console.log(scuberGreetingForFeet("2800")); // Output: 'No can do' 

  

  function ternaryCheckCity(city) {
  return city === "NYC" ? 'Ok, sounds good.' : 'No go.';
}

// Example usage:
console.log(ternaryCheckCity("NYC")); // Output: 'Ok, sounds good.'
console.log(ternaryCheckCity("LA")); // Output: 'No go.'


  function switchOnCharmFromTip(tip) {
  switch (tip) {
    case "generous":
      return "Thank you so much.";

    case "not as generous":
      return "Thank you.";

    default:
      return "Bye.";
  }
}

// Example usage:
console.log(switchOnCharmFromTip("generous")); // Output: 'Thank you so much.'
console.log(switchOnCharmFromTip("not as generous")); // Output: 'Thank you.'
console.log(switchOnCharmFromTip("average")); // Output: 'Bye.'}