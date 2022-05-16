window.alert("ถ้าหากต้องการย้อนกลับไปคำใบ้อื่น ให้กดปุ่มคำใบ้ซ้ำอีกครั้ง")

function btn1() {
    var element = document.getElementById("content1");
   element.classList.toggle("content1-active");
   var element4 = document.getElementById("btn2");
   element4.classList.toggle("btn2-none");
   var element5 = document.getElementById("btn1");
   element5.classList.toggle("btn1-active");
                      document.getElementById("btn1").style.padding = "20px"; 
                      document.getElementById("btn1").style.borderRadius = "60px"; 
                      document.getElementById("btn1").style.marginTop = "20px";
                        console.log("done btn1-1!");
    setTimeout(() => { document.getElementById("btn1").style.padding = "35px"; 
                       document.getElementById("btn1").style.borderRadius = "5px";
                       document.getElementById("btn1").style.marginTop = "10px";
                        console.log("done btn1-2!");}, 125);                    
}

function btn2() {
    var element1 = document.getElementById("content2");
   element1.classList.toggle("content2-active");
   var element3 = document.getElementById("btn1");
   element3.classList.toggle("btn1-none");
   var element6 = document.getElementById("btn2");
   element6.classList.toggle("btn2-active");
                      document.getElementById("btn2").style.padding = "20px"; 
                      document.getElementById("btn2").style.borderRadius = "60px"; 
                      document.getElementById("btn2").style.marginTop = "20px";
                        console.log("done btn2-1!");
    setTimeout(() => { document.getElementById("btn2").style.padding = "35px"; 
                       document.getElementById("btn2").style.borderRadius = "5px";
                       document.getElementById("btn2").style.marginTop = "10px";
                        console.log("done btn2-2!");}, 125); 
}



