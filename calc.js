// Variable Declarations
var templateText = document.getElementById("calculationTemplate");
var text1 = document.getElementById("textField1");
var title = document.getElementById("calculationTemplate");
var text2 = document.getElementById("textField2");
var text3 = document.getElementById("textField3");
var variable1 = document.getElementById("variable1");
var variable2 = document.getElementById("variable2");
var resultField = document.getElementById("resultField");
var form = document.getElementById("calcForm");

form.addEventListener('submit', function (event) {
    var choice = document.getElementById("menuSelect").value;
    /* variable a is always the first variable entered
        variable b is always the second variable entered
    */
    var a = parseFloat(variable1.value);
    var b = parseFloat(variable2.value);
    
    if (choice === "yIsWhat%OfX?") {
        var result = (a/b) * 100;
        resultField.innerText = "Answer: " + result + "%";
    }
    else if (choice === "whatIsP%OfX?") {
        var result = (a/100)*b;
        resultField.innerText = "Answer: " + result;
    }
    else if (choice === "yIsP%OfWhat?") {
        var result = a/(b/100);
        resultField.innerText  = "Answer: " + result;
    }
    else if (choice === "what%OfXIsY?") {
        var result = (b/a)*100;
        resultField.innerText = "Answer: " + result + "%";
    }
    else if (choice === "p%OfWhatIsY?") {
        var result = b/(a/100);
        resultField.innerText = "Answer: " + result;
    }
    else if (choice === "p%OfXIsWhat?") {
        var result = (a/100)*b;
        resultField.innerText = "Answer: " + result;
    }
    event.preventDefault();
});

/* calcSelect()
    function called on change to menuSelect select bar
*/

function calcSelect() {
    // get menu choice from select menu
    var choice = document.getElementById("menuSelect").value;
    
    if (choice === "yIsWhat%OfX?") {
        title.innerText = "Y is P% of X";
        text1.innerText = "";
        variable1.value = "Y";
        text2.innerText = " is what % of";
        variable2.value = "X";
        text3.innerText = "?";
        
    }
    else if (choice === "whatIsP%OfX?") {
        title.innerText = "Y is P% of X";
        text1.innerText = "What is ";
        variable1.value = "P";
        text2.innerText = "% of ";
        variable2.value = "X";
        text3.innerText = "?";
        
    }
    else if (choice === "yIsP%OfWhat?") {
        title.innerText = "Y is P% of X";
        text1.innerText = "";
        variable1.value = "Y";
        text2.innerText = " is ";
        variable2.value = "P";
        text3.innerText = "% of what?";
        
    }
    else if (choice === "what%OfXIsY?") {
        title.innerText = "P% of X is Y";
        text1.innerText = "What % of ";
        variable1.value = "X";
        text2.innerText = " is ";
        variable2.value = "Y";
        text3.innerText = "?";
    }
    else if (choice === "p%OfWhatIsY?") {
        title.innerText = "P% of X is Y";
        text1.innerText = "";
        variable1.value = "P";
        text2.innerText = "% of what is ";
        variable2.value = "Y";
        text3.innerText = "?";
        
    }
    else if (choice === "p%OfXIsWhat?") {
        title.innerText = "P% of X is Y";
        text1.innerText = "";
        variable1.value = "P";
        text2.innerText = "% of ";
        variable2.value = "X";
        text3.innerText = " is what?";
    }   
}
