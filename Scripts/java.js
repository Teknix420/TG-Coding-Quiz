// Setting Variables
var header = document.getElementsByClassName('header');
var ul = document.getElementsByClassName('ul');
var li1 = document.getElementById('li1');
var li2 = document.getElementById('li2');
var li3 = document.getElementById('li3');
var li4 = document.getElementById('li4');
var footer = document.getElementsByClassName('footer');
var p = document.getElementsByClassName('p');
var timer = 60;
var score = 0;
var c1 = false;
var c2 = false;
var c3 = false;
var c4 = false;
var testEnd2 = false;

// Start Timer when quiz starts
var timerStart = function timerCountdown() {
        var timerCountdown = setInterval(function () {
        timer--;
        p[0].textContent = "Time Remaining: " + timer;
        if (timer <= 0 && testEnd2 === false) {
            
            clearInterval(timerCountdown);
            testEnd();
            
        };
        if (timer >= 0 && testEnd2 === true) {

            clearInterval(timerCountdown);

        }
        
    }, 1000);
};
    
// Delayed functions for when a choice is selected
var question1add = function () {
    setTimeout(function () { question1() }, 1000);
};
var question2add = function () {
    setTimeout(function () { question2() }, 1000);
};
var question3add = function () {
    setTimeout(function () { question3() }, 1000);
};
var question4add = function () {
    setTimeout(function () { question4() }, 1000);
};
var question5add = function () {
    setTimeout(function () { question5() }, 1000);
};
var question6add = function () {
    setTimeout(function () { question6() }, 1000);
};
var question7add = function () {
    setTimeout(function () { question7() }, 1000);
};
var question8add = function () {
    setTimeout(function () { question8() }, 1000);
};
var question9add = function () {
    setTimeout(function () { question9() }, 1000);
};
var question10add = function () {
    setTimeout(function () { question10() }, 1000);
};
var testEndAdd = function () {
    setTimeout(function () { testEnd() }, 1000);
};

// Reset colors of buttons
function resetColor() {
    li1.style.backgroundColor = "blue";
    li2.style.backgroundColor = "blue";
    li3.style.backgroundColor = "blue";
    li4.style.backgroundColor = "blue";
};

// Reset boolean values for answer checking
function resetAnswer() {
    c1 = false;
    c2 = false;
    c3 = false;
    c4 = false;
};

// Initial page setup
header[0].textContent = "Welcome to the coding quiz! You have 60 seconds to complete the quiz. Press Start to begin.";
li1.textContent = "Start";
li2.style.visibility = "hidden";
li3.style.visibility = "hidden";
li4.style.visibility = "hidden";

li1.addEventListener('click', function () {
    li1.style.backgroundColor = 'purple';
});
li1.addEventListener('click', question1add);
li1.addEventListener('click', timerStart);

// Create 10 functions with 10 different questions that change whenever an option is selected and update the score/timer if the answer is right or wrong
function question1() {

    li1.removeEventListener('click', question1add);
    li1.removeEventListener('click', timerStart);

    resetColor();
    li2.style.visibility = "visible";
    li3.style.visibility = "visible";
    li4.style.visibility = "visible";
    header[0].textContent = "Which built-in method adds one or more elements to the end of an array and returns the new length of the array?";
    li1.textContent = "last()";
    li2.textContent = "put()";
    li3.textContent = "push()";
    li4.textContent = "None of the above";
    c3 = true;

    li1.addEventListener('click', question2add);
    li2.addEventListener('click', question2add);
    li3.addEventListener('click', question2add);
    li4.addEventListener('click', question2add);

    // Setup Event Listeners for the rest of the quiz that check boolean values of the answers
    li1.addEventListener('click', function () {
        footer[0].style.visibility = 'visible';
        if (c1 === true) {
            footer[0].textContent = 'Correct!'
            score++;
        }
        else {
            footer[0].textContent = 'Wrong!'
            timer = timer - 5;
        };
    });
    li2.addEventListener('click', function () {
        li2.style.backgroundColor = 'purple';
        footer[0].style.visibility = 'visible';
        if (c2 === true) {
            footer[0].textContent = 'Correct!'
            score++;
        }
        else {
            footer[0].textContent = 'Wrong!'
            timer = timer - 5;
        };
    });
    li3.addEventListener('click', function () {
        li3.style.backgroundColor = 'purple';
        footer[0].style.visibility = 'visible';
        if (c3 === true) {
            footer[0].textContent = 'Correct!'
            score++;
        }
        else {
            footer[0].textContent = 'Wrong!'
            timer = timer - 5;
        };
    });
    li4.addEventListener('click', function () {
        li4.style.backgroundColor = 'purple';
        footer[0].style.visibility = 'visible';
        if (c4 === true) {
            footer[0].textContent = 'Correct!'
            score++;
        }
        else {
            footer[0].textContent = 'Wrong!'
            timer = timer - 5;
        };
    });
};

function question2() {

    li1.removeEventListener('click', question2add);
    li2.removeEventListener('click', question2add);
    li3.removeEventListener('click', question2add);
    li4.removeEventListener('click', question2add);

    resetColor();
    resetAnswer();
    header[0].textContent = "Which of the following function of String object combines the text of two strings and returns a new string?";
    li1.textContent = "add()";
    li2.textContent = "merge()";
    li3.textContent = "concat()";
    li4.textContent = "append()";
    footer[0].style.visibility = 'hidden';
    c3 = true;

    li1.addEventListener('click', question3add);
    li2.addEventListener('click', question3add);
    li3.addEventListener('click', question3add);
    li4.addEventListener('click', question3add);

};

function question3() {

    li1.removeEventListener('click', question3add);
    li2.removeEventListener('click', question3add);
    li3.removeEventListener('click', question3add);
    li4.removeEventListener('click', question3add);

    resetColor();
    resetAnswer();
    header[0].textContent = "Which of the following function of Array object sorts the elements of an array?";
    li1.textContent = "toSource()";
    li2.textContent = "sort()";
    li3.textContent = "toString()";
    li4.textContent = "unshift()";
    footer[0].style.visibility = 'hidden';
    c2 = true;

    li1.addEventListener('click', question4add);
    li2.addEventListener('click', question4add);
    li3.addEventListener('click', question4add);
    li4.addEventListener('click', question4add);

};

function question4() {

    li1.removeEventListener('click', question4add);
    li2.removeEventListener('click', question4add);
    li3.removeEventListener('click', question4add);
    li4.removeEventListener('click', question4add);

    resetColor();
    resetAnswer();
    header[0].textContent = "Which of the following function of String object returns the calling string value converted to lower case?";
    li1.textContent = "toLocaleLowerCase()";
    li2.textContent = "toLowerCase()";
    li3.textContent = "toString()";
    li4.textContent = "substring()";
    footer[0].style.visibility = 'hidden';
    c2 = true;

    li1.addEventListener('click', question5add);
    li2.addEventListener('click', question5add);
    li3.addEventListener('click', question5add);
    li4.addEventListener('click', question5add);

};

function question5() {

    li1.removeEventListener('click', question5add);
    li2.removeEventListener('click', question5add);
    li3.removeEventListener('click', question5add);
    li4.removeEventListener('click', question5add);

    resetColor();
    resetAnswer();
    header[0].textContent = "What are variables used for in JavaScript Programs?";
    li1.textContent = "Storing numbers, dates, or other values";
    li2.textContent = "Varying randomly";
    li3.textContent = "Causing high-school algebra flashbacks";
    li4.textContent = "None of the above";
    footer[0].style.visibility = 'hidden';
    c1 = true;

    li1.addEventListener('click', question6add);
    li2.addEventListener('click', question6add);
    li3.addEventListener('click', question6add);
    li4.addEventListener('click', question6add);

};

function question6() {

    li1.removeEventListener('click', question6add);
    li2.removeEventListener('click', question6add);
    li3.removeEventListener('click', question6add);
    li4.removeEventListener('click', question6add);

    resetColor();
    resetAnswer();
    header[0].textContent = "Which of the following are capabilities of functions in JavaScript?";
    li1.textContent = "Return a value";
    li2.textContent = "Accept parameters and return a value";
    li3.textContent = "Accept parameters";
    li4.textContent = "None of the above";
    footer[0].style.visibility = 'hidden';
    c3 = true;

    li1.addEventListener('click', question7add);
    li2.addEventListener('click', question7add);
    li3.addEventListener('click', question7add);
    li4.addEventListener('click', question7add);

};

function question7() {

    li1.removeEventListener('click', question7add);
    li2.removeEventListener('click', question7add);
    li3.removeEventListener('click', question7add);
    li4.removeEventListener('click', question7add);

    resetColor();
    resetAnswer();
    header[0].textContent = "____ tag is an extension to HTML that can enclose any number of JavaScript statements.";
    li1.textContent = "<script>";
    li2.textContent = "<body>";
    li3.textContent = "<head>";
    li4.textContent = "<title>";
    footer[0].style.visibility = 'hidden';
    c1 = true;

    li1.addEventListener('click', question8add);
    li2.addEventListener('click', question8add);
    li3.addEventListener('click', question8add);
    li4.addEventListener('click', question8add);

};

function question8() {

    li1.removeEventListener('click', question8add);
    li2.removeEventListener('click', question8add);
    li3.removeEventListener('click', question8add);
    li4.removeEventListener('click', question8add);

    resetColor();
    resetAnswer();
    header[0].textContent = 'What is the correct JavaScript syntax to write "Hello World"?';
    li1.textContent = 'system.out.printIn("Hello World")';
    li2.textContent = 'printIn("Hello World")';
    li3.textContent = 'document.write("Hello World")';
    li4.textContent = 'response.write("Hello World")';
    footer[0].style.visibility = 'hidden';
    c3 = true;

    li1.addEventListener('click', question9add);
    li2.addEventListener('click', question9add);
    li3.addEventListener('click', question9add);
    li4.addEventListener('click', question9add);

};

function question9() {

    li1.removeEventListener('click', question9add);
    li2.removeEventListener('click', question9add);
    li3.removeEventListener('click', question9add);
    li4.removeEventListener('click', question9add);

    resetColor();
    resetAnswer();
    header[0].textContent = 'Which of the following is a JavaScript data type?';
    li1.textContent = "String";
    li2.textContent = "Boolean";
    li3.textContent = "Object";
    li4.textContent = "All of the above";
    footer[0].style.visibility = 'hidden';
    c4 = true;

    li1.addEventListener('click', question10add);
    li2.addEventListener('click', question10add);
    li3.addEventListener('click', question10add);
    li4.addEventListener('click', question10add);

};

function question10() {

    li1.removeEventListener('click', question10add);
    li2.removeEventListener('click', question10add);
    li3.removeEventListener('click', question10add);
    li4.removeEventListener('click', question10add);

    resetColor();
    resetAnswer();
    header[0].textContent = "JavaScript entities start with ____ and end with ____.";
    li1.textContent = "Semicolon, Colon";
    li2.textContent = "Semicolon, Ampersand";
    li3.textContent = "Ampersand, Colon";
    li4.textContent = "Ampersand, Semicolon";
    footer[0].style.visibility = 'hidden';
    c4 = true;

    li1.addEventListener('click', testEnd);
    li2.addEventListener('click', testEnd);
    li3.addEventListener('click', testEnd);
    li4.addEventListener('click', testEnd);

};

function testEnd() {
    
    testEnd2 = true;
    var initials = prompt('Please enter your intials');
    var storedScore = localStorage.getItem('High Score');
    var storedInitials = localStorage.getItem('Initials');
    parseInt(storedScore);
    if (score >= storedScore) {
        localStorage.setItem('High Score', score);
        localStorage.setItem('Initials', initials);
    };
    header[0].textContent = "This is the end of the quiz!";
    li1.style.backgroundColor = 'purple';
    li2.style.backgroundColor = 'blue';
    li3.style.backgroundColor = 'green';
    li4.style.visibility = 'hidden';
    p[0].style.visibility = 'hidden';
    footer[0].style.visibility = 'visible';
    li1.textContent = 'You had ' + timer + ' second(s) remaining';
    li2.textContent = 'Score: ' + score;
    li3.textContent = 'Initials: ' + initials;
    storedScore = localStorage.getItem('High Score');
    storedInitials = localStorage.getItem('Initials');
    footer[0].textContent = 'Current Highscore: ' + storedInitials + ' - ' + storedScore;

};