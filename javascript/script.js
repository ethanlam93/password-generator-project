// Assignment Code
// Selector for the button
var generateBtn = document.querySelector("#generate");


// Write password to the #password input
function writePassword() {
  // Select password from the DOM 
  var passwordText = document.querySelector("#password");
  // Setting the value of password to equal the password array, also converting the array into a string 
  passwordText.value = myArray.join("");
}


// Setting an array containing all lower characters
var lower = [ "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
// Setting an array containing all UPPER characters
var upper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
// Setting an array containing all numbers
var num = [0,1,2,3,4,5,6,7,8,9]
// Setting an array containing all special characters
var special = [ "!", "#" , "$" , "%" , "&" , "'" , "(" , ")" , "*" , "+" , "-", ".", "/", ":", ";", "<",  "=" , ">", "?", "@" , "[" ,"]", "^" , "_" ,"`", "{" , "|" , "}" ,"~", "\\"]
var myArray = []

// The BIG function that will generate password when button is clicked, and paste the password to the box
function generatePassword(){
  // Ask the user how many character would they like in their password?
  var characterCountInString = prompt("How many characters would you like your password to contain? \n please choose a NUMBER betwen 8 and 128!!!!");
  // Convert user's answer from a string to a number to use in function
  characterCountInNumber = parseInt(characterCountInString);
  // When the user choose between 8-128 characters, do this function
  if(characterCountInNumber >=8 && characterCountInNumber <=128 ){
      // generate password
      randomPass();
      // randomize password
      randomizePass(myArray);
      // insert password into password container
      writePassword();
      // alert the users the password
      alert("Your password is " + myArray.join(""));
      // reset the password so if they click generate again, it wills start from scratch
      arrayReset();
      // console.log(myArray)
  }
  // if the user makes a mistake when choosing password length, alert them and ask them again
  else{
    alert("Please choose a NUMBER between at least 8 and no more than 128");
    generatePassword();
  }
}

//reset the array to an empty so the next time it generate password, it will not contain the previous generated password
function arrayReset(){
  myArray = [];
}



// Password generator function
function randomPass(){
  // confirm if user want lowercase, uppercase, number or special characters in their password
  var isLower = confirm("Do you want lower case in your password?\n Hit OK for Yes and CANCEL for No");
  var isUpper = confirm("Do you want UPPER case in your password?\n Hit OK for Yes and CANCEL for No");
  var isNumber = confirm("Do you want number in your password?\n Hit OK for Yes and CANCEL for No");
  var isSpecial = confirm("Do you want special characters in your password?\n Hit OK for Yes and CANCEL for No"); 
  // if function based on the answer of user
  if(isLower === true || isUpper ===true || isNumber === true || isSpecial && true){ 
    for( var i = 0; i < characterCountInNumber;){
    //if all four criteria are true
    if(isLower && i < characterCountInNumber){ 
    myArray.push(lower[Math.floor(Math.random()*lower.length)]);
    i++;
    if (isUpper && i < characterCountInNumber){
    myArray.push(upper[Math.floor(Math.random()*upper.length)]);
    i++};
    if (isNumber && i < characterCountInNumber){
    myArray.push(num[Math.floor(Math.random()*num.length)]);
    i++};
    if (isSpecial && i < characterCountInNumber){
    myArray.push(special[Math.floor(Math.random()*special.length)]);
    i++};
    }
    //if the 1 criteria are false, check the other three
    else if (isUpper && i < characterCountInNumber){
    myArray.push(upper[Math.floor(Math.random()*upper.length)]);
    i++;
    if (isNumber && i < characterCountInNumber){
    myArray.push(num[Math.floor(Math.random()*num.length)]);
    i++};
    if (isSpecial && i < characterCountInNumber){
    myArray.push(special[Math.floor(Math.random()*special.length)]);
    i++}
    }
    //if the first two criteria are false, check the last two criteria
    else if (isNumber && i < characterCountInNumber){
    myArray.push(num[Math.floor(Math.random()*num.length)]);
    i++;
    if (isSpecial && i < characterCountInNumber){
    myArray.push(special[Math.floor(Math.random()*special.length)]);
    i++}
    }
    //if the first three criteria are false, then only the last one is true
    else if (isSpecial && i < characterCountInNumber){
    myArray.push(special[Math.floor(Math.random()*special.length)]);
    i++
    }}}

  //if user accidentally didn't choose any criteria for their password, warn them to choose at least 1
    else if(isLower === false && isUpper === false && isNumber === false && isSpecial === false){
    alert("Please choose AT LEAST 1 criteria for your password");
    randomPass()
  }}


//Randomize the order of the password generated so it is more secure
function randomizePass (a){
  var newIndex;
  var newValue;
  for(var z = myArray.length -1; z >0 ; z--){
  newIndex = Math.floor(Math.random()*(z + 1));
  newValue = a[z];
  a[z] = a[newIndex];
  a[newIndex] = newValue;
  }
}

// Add event listener to generate button
generateBtn.addEventListener("click", generatePassword)


