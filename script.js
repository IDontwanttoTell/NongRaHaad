window.alert("ถ้าหากต้องการย้อนกลับไปคำใบ้อื่น ให้กดปุ่มคำใบ้ซ้ำอีกครั้ง")



function btn1() {
    var element = document.getElementById("content1");
   element.classList.toggle("content1-active");
   var element4 = document.getElementById("btn2");
   element4.classList.toggle("btn2-none");
   var element5 = document.getElementById("btn1");
   element5.className = "btn1-active";
}

function btn2() {
    var element1 = document.getElementById("content2");
   element1.classList.toggle("content2-active");
   var element3 = document.getElementById("btn1");
   element3.classList.toggle("btn1-none");
   var element6 = document.getElementById("btn2");
   element6.className = "btn2-active";
}


