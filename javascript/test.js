//var first_name = "kylee"; two forward slashes mean single-line comment

/* 
BLOCK COMMENT
*/

var greeting = "hello!";
var first_name = "kylee";
var last_name = "zabel";
var message1 = "welcome to the Internet";
var message2 = "have fun exploring";
var favoriteQuote = "\"Four Score...\"";
var my_image = "<img src=\images/myImage.png\" />";
//use single quotes if you have a lot of illegal characters
var my_image = '<img src="images/myImage.png" />';
var goodbye = "see you later";

//BAD variable names (errors!!!!)
//var first name = "";
//var 2first_name ="";
//var math ="";

//operators
// "=" assigns values
// "+=" (concatenation assignment operator, strings) adds to whatever the variable currently has

//output variables to the console!!!
/*console.log(greeting);
console.log(first_name);
console.log(last_name);
console.log(message1);
console.log(message2);
console.log(favoriteQuote);
console.log(goodbye);*/

//one console log for all of the variables at one time
console.log(greeting + first_name + last_name + message1 + message2 + favoriteQuote + goodbye);

//"My fellow *Americans*, ask not what your *country* can do for *you*—ask what *you* can do for your *country*." - John F. Kennedy

var static_words1 = "My fellow ";
var static_words2 = ", ask not what your ";
var static_words3 = " can do for ";
var static_words4 = " - ask what ";
var static_words5 = " can do for your ";

//create a variable that is sued as a referrence to your form button
//we use the unique ID attribute to do this
var button = document.getElementById("submit");

//then we add the ability to have a mouse click fire off a function
button.addEventListener("click", onClick, false);

function onClick(evt)
{
  evt.preventDefault(evt);//this line stops the form from submitting by preventing its default action
  
  //Forms
  var element1 = document.getElementById("form1").elements.item(0).value;
  var element2 = document.getElementById("form1").elements.item(1).value;
  var element3 = document.getElementById("form1").elements.item(2).value;
  var element4 = document.getElementById("form1").elements.item(3).value;
  var element5 = document.getElementById("form1").elements.item(4).value;
  console.log(static_words1 + element1 + static_words2 + element2 + static_words3 + element3 + static_words4 + element4 +static_words5 + element5);
  //document.getElementbyId("myForm").elements.item(0).value;
  //return false;
  
}