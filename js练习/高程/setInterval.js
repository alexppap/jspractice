// var num = 0;
// var max = 10;
// var timer = null;

// function increaseNumber () {
//   num++;
//   console.log(num)
//   if (num == max) {
//     clearInterval(timer);
//     console.log('done')
//   }
// }
// timer = setInterval(increaseNumber, 1000)

//超时调用取代定时调用
var num = 0;
var max = 10;

function increaseNumber () {
  num++;
  console.log(num)
  if (num < max) {
    setTimeout(increaseNumber, 1000)
  } else {
    console.log('done')
  }
}
setTimeout(increaseNumber, 1000)


//用arguments.calle
// setTimeout(function(){
//   num++;
//   console.log(num)
//   if(num < max){
//     setTimeout(arguments.callee,1000)
//   } else{
//     console.log('done')
//   }
// })