const arr = ["box", "circle", "try"];

document.querySelector(`button`).addEventListener("click",() => {
  const num = Math.floor(Math.random() * arr.length);
  // console.log(arr[num]);
  document.querySelector(".box").classList.add(arr[num]);
})