function btn1() {
    var element = document.getElementById("content1");
   element.classList.toggle("content1-active");
   var element4 = document.getElementById("btn2");
   element4.classList.toggle("btn2-none");
}

function btn2() {
    var element1 = document.getElementById("content2");
   element1.classList.toggle("content2-active");
   var element3 = document.getElementById("btn1");
   element3.classList.toggle("btn1-none");
}



