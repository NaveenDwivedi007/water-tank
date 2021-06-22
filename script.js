const smalls = document.querySelectorAll(".small")
const percentage= document.querySelector(".percentage")
const liters=document.querySelector("#liters")
const empty = document.querySelector(".empty")


smalls.forEach((small,idx)=>{
  small.addEventListener("click",()=>{
    fill(idx)
    percentage.innerText = `${(idx+1)/smalls.length*100}%`
    percentage.style.height=`${(idx+1)/smalls.length*100}%`
    liters.innerText = `${(1-(idx+1)/smalls.length)*2}L`
    const c = liters.innerText;
    if (c === "0L") {
      empty.style.display = "none"
    }
  })
})

function fill(index){
  smalls.forEach((small,i)=>{
    if (small.classList.value.split(" ").filter(val=>val==="full")[0]==="full") {
      small.classList.remove("full")
    }
    if (i<index+1) {
      small.classList.add("full")
    }
  })
}