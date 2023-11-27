let cursor = document.querySelector("#cursor")

document.querySelector('#main').addEventListener("mousemove",(detes) => {
  cursor.style.left = detes.x + "px"
  cursor.style.top = detes.y + "px"
})
document.querySelector(`h1`).addEventListener("mouseenter",() => {
  cursor.style.scale = 2
})
document.querySelector(`h1`).addEventListener("mouseleave",() => {
  cursor.style.scale = 1
})