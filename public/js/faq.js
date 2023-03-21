"use strict";

const $ = (selector) => document.querySelector(selector);

// declare a variable to hold the reference to the timer; make it
// global so all the functions can access it
let timer = null;
let counter = 10;

const goToTerms = () => {
  //Count down from 10, if above 0 update seconds text, if at 0, send to the terms page
  counter = counter - 1;
  if (counter <= 0) {
    window.location ="https://" + window.location.host + "/terms";
  } else {
    $("#seconds").innerText = counter; // update number of seconds
  }
};

const acceptTerms = () => {
  // code to accept terms goes here

  clearInterval(timer);
  $("#terms").setAttribute("class", "hidden");
};

// the event handler for the click event of each h2 element
const toggle = (evt) => {
  const h2 = evt.currentTarget; // get the clicked h2 element
  const div = h2.nextElementSibling; // div = h2's sibling div

  h2.classList.toggle("minus");
  div.classList.toggle("open");

  evt.preventDefault();
};

document.addEventListener("DOMContentLoaded", () => {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const accepted = urlParams.get("accepted");

  if (!accepted) {
    // user hasn't accepted terms
    timer = setInterval(goToTerms, 1000);
    $("#accept").addEventListener("click", acceptTerms);
  } else {
    // hide terms section
    $("#terms").setAttribute("class", "hidden");
  }

  // get the h2 tags
  const h2Elements = faqs.querySelectorAll("#faqs h2");

  // attach event handler for each h2 tag
  for (let h2Element of h2Elements) {
    h2Element.addEventListener("click", toggle);
  }

  h2Elements[0].firstChild.focus();
});

/*
line 62 ////////was h2element instead of h2Element = syntax error////////
    h2Element.addEventListener("click", toggle);
  }

line 66///////was 'Focus' instead of 'focus' = syntax error///////
  h2Elements[0].firstChild.focus();
});
line 50/////////////missing hashtag = syntax error///////////////
    $("#accept").addEventListener("click", acceptTerms);
line32  //////h2 was missing const in front = reference error////////
  const h2 = evt.currentTarget; // get the clicked h2 element
line 17    /////was .value but needed to be .innerText = Logic Error /////////
    $("#seconds").innerText = counter; // update number of seconds
  }
line 12  /////////counter wasn't subtracting even though it ran = Logic Error ////////
  counter = counter - 1;*/



  
/*  syntax error: typos, calling functions or variables by the wrong name
reference error: code refers to something that can't be accessed or doesn't exist
Logic error: Code runs but there's a mistake in the logic preventing it from producing the expected results.
runtime error: code can be run but has an issue once it runs.
thrown error: dev explicitly throws an error when certain code is run.

console.log: outputs a message to the web console.
console.warn: outputs a warning message to the Web console.
console.error: outputs an error message to the Web console.
console.trace: logs the function that called it, then the function that called that one, and the one that called that one, until it gets to global context (logged as anonymous) which calls everything

const $ = (selector) => document.querySelector(selector); makes it so that $("#id") selects the id.

REGEX
/Character classes/
.             any character except newline
\w\d\s       word, digit, whitespace
\W\D\S       not word, digit, whitespace
[abc]        any of a, b, or c
[^abc]       not a, b, or c
[a-g]         character between a & g

/Anchors/
^abc$         start / end of the string
\b\B         word, not-word boundary

/Escaped characters/
.*\       escaped special characters
\t\n\r       tab, linefeed, carriage return

/Groups & Lookaround/
(abc)         capture group
\1           backreference to group #1
(?:abc)       non-capturing group
(?=abc)       positive lookahead
(?!abc)       negative lookahead

/Quantifiers & Alternation/
a*a+a?       0 or more, 1 or more, 0 or 1
a{5}a{2,}     exactly five, two or more
a{1,3}       between one & three
a+?a{2,}?     match as few as possible
ab|cd         match ab or cd
evt = events 
HTML events are "things" that happen to HTML elements.
When JavaScript is used in HTML pages, JavaScript can "react" on these events.
Types:
onchange    An HTML element has been changed
onclick    The user clicks an HTML element
onmouseover    The user moves the mouse over an HTML element
onmouseout    The user moves the mouse away from an HTML element
onkeydown    The user pushes a keyboard key
onload    The browser has finished loading the page

.checked = sets or returns the checked state of a checkbox
.value = sets or returns the value attribute of a text field
.textContent = is all text contained by an element and all its children that are for formatting purposes only.
.innerText = returns all text contained by an element and all its child elements.
.innerHtml = returns all text, including html tags, that is contained by an element.
.length = of an array, represents the # of elements in the array
window.location = object that can be used to get the current page address (URL) and to redirect the browser to a new page. //see faq.js line 15
The clearInterval() method clears a timer set with the setInterval() method.
The setInterval() method calls a function at specified intervals (in milliseconds). It continues calling the function until clearInterval() is called, or the window is closed. (1 second = 1000 milliseconds) i.e. setInterval(var, 1000) = every second
*/
