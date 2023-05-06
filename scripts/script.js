const dodecahedron = document.getElementById("dodecahedron")

let startPos = [0, 0]
let currentPos = [0, 0]
const sx = 0.6
const sy = -0.6

window.addEventListener("mousedown", mousedownHandler)
window.addEventListener("pointerdown", mousedownHandler)
window.addEventListener("mouseup", mouseupHandler)
window.addEventListener("pointerup", mouseupHandler)

function mousedownHandler(event) {
  startPos = [event.x.toFixed(2), event.y.toFixed(2)]
  window.addEventListener("mousemove", mousemoveHandler, true)
}

function mouseupHandler(event) {
  window.removeEventListener("mousemove", mousemoveHandler, true)
  currentPos = [dodecahedron.style.transform.split("rotateX(")[1]?.split("deg")[0], dodecahedron.style.transform.split("rotateY(")[1]?.split("deg")[0]]
  startPos = [0, 0]
}

function mousemoveHandler(event) {
  const dx = (event.y.toFixed(2) - startPos[1]) * sy
  const dy = (event.x.toFixed(2) - startPos[0]) * sx
  const curx = currentPos[0] === "undefined" ? 0 : currentPos[0]
  const cury = currentPos[1] === "undefined" ? 0 : currentPos[1]
  dodecahedron.style.transform = `rotateX(${Number(curx) + Number(dx)}deg) rotateY(${Number(cury) + Number(dy)}deg)`
}