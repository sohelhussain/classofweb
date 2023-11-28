// let box = document.querySelectorAll(`.box`)
// let arr = ["box-selected","box-selected2","box-selected3"]
// let num = Math.floor(Math.random()*10)
// box.forEach((dets)=> {
//   dets.addEventListener("click", (e)=> {
//     dets.classList.add(arr[num])
//   })
// })
let grow = 0
let growVar = 0;
window.addEventListener("keydown", (e)=> {
  console.log(e);
  if (e.key == "ArrowRight") {
    grow += 10
    document.querySelector(".box").style.left = grow + "px";
  }
  else if (e.key == "ArrowLeft") {
    grow -= 10
    document.querySelector(".box").style.left = grow + "px";
  }
  else if (e.key == "ArrowUp") {
    growVar -= 10
    document.querySelector(".box").style.top = growVar + "px";
  }
  else if (e.key == "ArrowDown") {
    console.log(e);
    growVar += 10
    document.querySelector(".box").style.top = growVar + "px";
  }
  
})