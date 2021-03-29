var x = 10;
function Add_numbers_1() {
    document.write(20 + x + "<br>");
}
function Add_numbers_2() {
    document.write(20 + x + "<br>");
}
function Add_numbers_2() {
    document.write(x + 100);
}
Add_numbers_1();
Add_numbers_2();
if (1 < 2) {
    document.write("The left number is smaller than the number on the right.")
}
function Add_numbers_1() {
    var x = 10;
    console.log(15 + x);
}
function Add_numbers_2() {
    console.log(x + 100);
}
Add_numbers_1();
Add_numbers_2();

function Time_function() {
    var Time =new Date().getHours();
    var Reply;
    if(Time < 12 == Time > 0) {
        Reply = "It is morning time!";
    }
    else if (Time >= 12 == Time < 18) {
        Reply = "it is afternoon.";
    }
    else {
        Reply = "It is evening time.";
    }
    document.getElementById("Time_of_day").innerHTML = Reply;
}
function Add_numbers_1() {
    var x = 10;
    console.log(15 + x);
}
function Add_numbers_2() {
    console.log(x + 100);
}
Add_numbers_1();
Add_numbers_2();