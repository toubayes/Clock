


function londonclock(){
    var date=new Date();
    var hours =date.getHours()-1;
    var minut =date.getMinutes() 
    var second =date.getSeconds();
    var  times =document.querySelector(".setTime").innerHTML=hours + ":" +minut +":" + second ;
 

    var day=date.getDate();
    var month=parseInt(date.getMonth()+1);
    var year=date.getFullYear();
    var  today =document.querySelector(".setdate").innerHTML=day + "-" +month +"-" + year ;
}
setInterval(londonclock,100);
onload =londonclock();

function getColor(){
    var getColor=document.querySelector(".setColor").value;
   console.log(getColor);
   localStorage.setItem("Color",getColor);
   document.querySelector(".outside_box").style.background =localStorage.getItem("Color");
document.querySelector(".bracle").style.background =localStorage.getItem("Color");
}


// function setColor(){
//    var setcolor=  document.querySelector(".setColor").value= localStorage.getItem("Color");
//     console.log(setcolor);
//     // document.querySelector(".outside_box").style.background=localStorage.getItem("Color");
//     // document.querySelector(".bracle").style.background = localStorage.getItem("Color");
//     }
    
//     // setInterval(setColor,100);