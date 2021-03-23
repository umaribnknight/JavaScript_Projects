function my_Dictionary() {                    //function name
    var Animal = {                            //variables
        Species:"Dog",
        Color:"Black",
        Breed:"Labrador",
        Age:5,
        Sound:"Bark!"
    };
    delete Animal.sound                   // delete var
    document.getElementById("Dictionary").innerHTML = Animal.Sound;

}
