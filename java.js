function myFun() {
     var x = document.getElementById("myTopNav");
     if (x.className == "myNav") {
         x.className += " responsive";
    } 
    else {
         x.className = "myNav";
    }
}

