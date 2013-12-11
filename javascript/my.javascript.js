//Javascript file designed for Golf Stats App
var name = "";
var date = Date();
var game = 9
var coursePar = 0;
var par = 0;
var fairway_hit = 0;
var GIR = 0;
var chips = 0;
var putts = 0;

function Round(form) {
    name = form.roundname.value;
    date = form.date.value;
    game = 0;
    
    for (Count = 0; Count < 2; Count++) {
        if (form.radio[Count].checked)
            break;
    }
    if (Count == 1) { game = 18; }
    else { game = 9; }
}


function Hole(form) {
    for (Count = 0; Count < 3; Count++) {
        if (form.radio[Count].checked)
            break;
    }
    if (Count == 0) { coursePar = coursePar + 3; }
    else if(Count == 1) { coursePar = coursePar + 4; }
    else { coursePar = coursePar + 5; }
};
function getname(){
    return name;
}
var count = 1;
function main() {
    count = count + 1;
    alert("it works");
    document.form.holeID.value = count;
    var element = document.getElementById("test");
    element.innerHtml = count;
    
    /*document.write("Course Name: " + name + "<br/><br/>");
    document.write("Date: " + date + "<br/><br/>");
    document.write("Round: " + game + " Holes" + "<br/><br/>");
    document.write("Course Par: " + coursePar + "<br/><br/>");
    document.write("Fairways Hit: " + fairway_hit + "<br/><br/>");
    document.write("GIR: " + GIR + "<br/><br/>");
    document.write("Chips: " + chips + "<br/><br/>");
    document.write("Putts: " + putts + "<br/><br/>");
    */
}

