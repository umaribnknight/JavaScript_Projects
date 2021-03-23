function mult() {               //This function is for multiplictation.
    var simple_Math = 6 * 8;
    document.getElementById("Math").innerHTML = "6 x 8 = " + simple_Math;
}

function modulus_Operator() {  //This function is for division with remainder
    var simple_Math = 25 % 6;
    document.getElementById("Modulus").innerHTML = "When you divide 25 by 6 you have a remainder of: " + simple_Math;
}

function more_Math() {
    var simple_Math = (1+2) * 10 / 2 -5;
    document.getElementById("More_Math").innerHTML = "1 plus 2, multiplied by 10  divided in half and then subtracted by 5 equals " + simple_Math; 
}

var x = 5;
x++;
document.write(x);

var y = 5.25;
y--;
document.write(y);