
// var a=["w","a","s","d","j","k","l"];
// for(var i=0;i<a.length;i++){
//   document.querySelector("."+a[i]).addEventListener("click",x);
// }
// function x(){
//  var b=this.innerHTML;
//  z(b);
//  animation(b);
// }
// for(var i=0;i<a.length;i++){
//   document.querySelector("."+a[i]).addEventListener("keydown",y);
// }
// function y(event){
//   z(event.key);
//   animation(event.key);
// }

// function z(value){
//  switch(value){
//   case 'w':
//     new Audio("sounds/tom-1.mp3").play();
//     break;
//     case 'a':
//       new Audio("sounds/tom-2.mp3").play();
//       break;
//       case 's':
//         new Audio("sounds/tom-3.mp3").play();
//         break;
//         case 'd':
//           new Audio("sounds/tom-4.mp3").play();
//           break;
//           case 'j':
//             new Audio("sounds/kick-bass.mp3").play();
//             break;
//             case 'k':
//               new Audio("sounds/crash.mp3").play();
//               break;
//               case 'l':
//                 new Audio("sounds/snare.mp3").play();
//                 break;
//                 default:console.log(b);
//  }
 
// }
// function animation(i){
// var j=document.querySelector("."+i);
// j.classList.add("pressed");
// setTimeout(function (){j.classList.remove("pressed");},100);
// }



for(var i=0;i<document.querySelectorAll("button").length;i++){
document.querySelectorAll("button")[i].addEventListener("click",function(){
  var b=this.innerHTML;
  playSound(b);
  animation(b);
});
}

for(var i=0;i<document.querySelectorAll("button").length;i++){
document.querySelectorAll("button")[i].addEventListener("keydown",function(event){
  playSound(event.key);
  animation(event.key);
  });
}


function playSound(key){
switch(key){
  case 'w':
    new Audio("sounds/tom-1.mp3").play();
    break;
      case 'a':
      new Audio("sounds/tom-2.mp3").play();
      break;
      case 's':
        new Audio("sounds/tom-3.mp3").play();
        break;
        case 'd':
          new Audio("sounds/tom-4.mp3").play();
          break;
          case 'j':
            new Audio("sounds/kick-bass.mp3").play();
            break;
            case 'k':
              new Audio("sounds/crash.mp3").play();
              break;
              case 'l':
                new Audio("sounds/snare.mp3").play();
                break;
                default:console.log(b);
}
}
function animation(i){
  var j=document.querySelector("."+i);
  j.classList.add("pressed");
  setTimeout(function(){
    j.classList.remove("pressed");
  },100);
}