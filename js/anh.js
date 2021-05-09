//lap album anh
var anhAr = [];
var currentIndex = 0;
for(var i = 0; i<=2; i++){
   anhAr[i] = new Image();
    anhAr[i].src = "./images/img"+i+".jpg";
}
document.getElementById("ban").src = anhAr[0].src;

function next(){
  
    currentIndex++;
  //  alert(currentIndex);
   document.getElementById("ban").src = anhAr[currentIndex].src;
   if(currentIndex>=2 ){
       currentIndex = -1;
   }

  
}
function back(){
   currentIndex--;
   //alert(currentIndex);
   document.getElementById("ban").src = anhAr[currentIndex].src;
    if(currentIndex<=0){
       currentIndex= 1;
    }
}